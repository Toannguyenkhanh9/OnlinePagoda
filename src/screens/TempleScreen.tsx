import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import {
  Alert,
  Animated,
  Easing,
  Image,
  ImageBackground,
  ImageSourcePropType,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {useFocusEffect} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

import SkiaIncenseSmoke from '../components/SkiaIncenseSmoke';

import {
  playTempleSound,
  preloadTempleSounds,
  releaseTempleSounds,
  startLoopingTempleSound,
  stopAllTempleSounds,
  stopTempleSound,
  type TempleSound,
} from '../services/audio';

import TempleAmbientSound from '../components/TempleAmbientSound';
import TempleSceneOverlay from '../components/TempleSceneOverlay';

import {
  incrementChantDraft,
} from '../services/chantCounter';

import {
  recordPracticeActivity,
} from '../services/practice';

import {
  DEFAULT_ALTAR_PREFERENCES,
  getAltarPreferences,
  type AltarPreferences,
} from '../services/altarPreferences';

import {
  getAltarBackgroundSource,
  resolveAltarCultureTheme,
} from '../utils/altarTheme';

const TEMPLE_EFFECT_ASSETS = {
  incenseStick: require('../assets/images/incense_stick_real.png'),
  incenseFlame: require('../assets/images/incense_flame_real.png'),
};

type ActionKind =
  | 'incense'
  | 'woodenFish'
  | 'bell';

type TempleRoundActionProps = {
  kind: ActionKind;
  title: string;
  subtitle?: string;
  imageSource?: ImageSourcePropType;
  isActive?: boolean;
  onPress: () => void;
  onLongPress?: () => void;
};

function TempleRoundAction({
  kind,
  title,
  subtitle,
  imageSource,
  isActive = false,
  onPress,
  onLongPress,
}: TempleRoundActionProps) {
  const scale = useRef(new Animated.Value(1)).current;
  const motion = useRef(new Animated.Value(0)).current;
  const longPressedRef = useRef(false);

  useEffect(() => {
    let loop: Animated.CompositeAnimation | undefined;

    if (isActive) {
      loop = Animated.loop(
        Animated.sequence([
          Animated.timing(motion, {
            toValue: 1,
            duration: 280,
            useNativeDriver: true,
          }),
          Animated.timing(motion, {
            toValue: -1,
            duration: 280,
            useNativeDriver: true,
          }),
          Animated.timing(motion, {
            toValue: 0,
            duration: 220,
            useNativeDriver: true,
          }),
        ]),
      );

      loop.start();
    } else {
      motion.stopAnimation();
      motion.setValue(0);
    }

    return () => {
      loop?.stop();
    };
  }, [isActive, motion]);

  const animateTap = () => {
    Animated.sequence([
      Animated.timing(scale, {
        toValue: 0.92,
        duration: 80,
        useNativeDriver: true,
      }),
      Animated.spring(scale, {
        toValue: 1,
        friction: 4,
        tension: 120,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handlePress = () => {
    if (longPressedRef.current) {
      longPressedRef.current = false;
      return;
    }

    animateTap();
    onPress();
  };

  const handleLongPress = () => {
    longPressedRef.current = true;
    animateTap();
    onLongPress?.();
  };

  const rotation = motion.interpolate({
    inputRange: [-1, 0, 1],
    outputRange:
      kind === 'bell'
        ? ['-10deg', '0deg', '10deg']
        : ['-4deg', '0deg', '4deg'],
  });

  const translateY = motion.interpolate({
    inputRange: [-1, 0, 1],
    outputRange:
      kind === 'woodenFish'
        ? [2, 0, -3]
        : [0, 0, 0],
  });

  return (
    <View style={styles.actionItem}>
      <Pressable
        accessibilityRole="button"
        accessibilityState={{selected: isActive}}
        delayLongPress={500}
        onPress={handlePress}
        onLongPress={handleLongPress}
        style={({pressed}) => [
          styles.actionPressable,
          pressed && styles.actionPressed,
        ]}>
        <Animated.View
          style={[
            styles.actionCircle,
            isActive && styles.actionCircleActive,
            {
              transform: [{scale}],
            },
          ]}>
          <Animated.View
            style={[
              styles.actionVisual,
              {
                transform: [
                  {rotate: rotation},
                  {translateY},
                ],
              },
            ]}>
            {imageSource ? (
              <Image
                source={imageSource}
                resizeMode="contain"
                style={styles.actionImage}
              />
            ) : (
              <View style={styles.incenseIcon}>
                <View style={styles.incenseFlame} />
                <View style={styles.incenseIconStick} />
                <View style={styles.incenseCup} />
              </View>
            )}
          </Animated.View>

          {isActive && <View style={styles.activeDot} />}
        </Animated.View>
      </Pressable>

      <Text style={styles.actionTitle}>{title}</Text>

      {!!subtitle && (
        <Text
          style={[
            styles.actionSubtitle,
            isActive && styles.actionSubtitleActive,
          ]}>
          {subtitle}
        </Text>
      )}
    </View>
  );
}

type IncenseLightingEffectProps = {
  visible: boolean;
  progress: Animated.Value;
};

function IncenseLightingEffect({
  visible,
  progress,
}: IncenseLightingEffectProps) {
  const flamePulse = useRef(new Animated.Value(1)).current;
  const emberGlow = useRef(new Animated.Value(0.75)).current;

  useEffect(() => {
    if (!visible) {
      flamePulse.stopAnimation();
      emberGlow.stopAnimation();
      flamePulse.setValue(1);
      emberGlow.setValue(0.75);
      return;
    }

    const flameLoop = Animated.loop(
      Animated.sequence([
        Animated.timing(flamePulse, {
          toValue: 1.1,
          duration: 260,
          useNativeDriver: true,
        }),
        Animated.timing(flamePulse, {
          toValue: 0.92,
          duration: 220,
          useNativeDriver: true,
        }),
        Animated.timing(flamePulse, {
          toValue: 1.04,
          duration: 260,
          useNativeDriver: true,
        }),
      ]),
    );

    const glowLoop = Animated.loop(
      Animated.sequence([
        Animated.timing(emberGlow, {
          toValue: 1,
          duration: 320,
          useNativeDriver: true,
        }),
        Animated.timing(emberGlow, {
          toValue: 0.65,
          duration: 340,
          useNativeDriver: true,
        }),
      ]),
    );

    flameLoop.start();
    glowLoop.start();

    return () => {
      flameLoop.stop();
      glowLoop.stop();
      flamePulse.stopAnimation();
      emberGlow.stopAnimation();
    };
  }, [visible, flamePulse, emberGlow]);

  if (!visible) {
    return null;
  }

  const groupTranslateY = progress.interpolate({
    inputRange: [0, 0.28, 0.58, 0.84, 1],
    outputRange: [150, 22, 0, -4, -20],
  });

  const groupOpacity = progress.interpolate({
    inputRange: [0, 0.08, 0.18, 0.88, 1],
    outputRange: [0, 0.65, 1, 1, 0],
  });

  const groupScale = progress.interpolate({
    inputRange: [0, 0.22, 0.58, 1],
    outputRange: [0.9, 0.97, 1, 0.92],
  });

  const stickOpacity = progress.interpolate({
    inputRange: [0, 0.12, 0.88, 1],
    outputRange: [0, 1, 1, 0],
  });

  const flameOpacity = progress.interpolate({
    inputRange: [0, 0.26, 0.36, 0.86, 1],
    outputRange: [0, 0.25, 1, 0.9, 0],
  });

  const glowOpacity = progress.interpolate({
    inputRange: [0, 0.26, 0.42, 0.86, 1],
    outputRange: [0, 0.45, 0.95, 0.55, 0],
  });

  const smokeOpacity = progress.interpolate({
    inputRange: [0, 0.42, 0.68, 0.92, 1],
    outputRange: [0, 0.04, 0.18, 0.48, 0],
  });

  const smokeTranslateY = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [8, -94],
  });

  const smokeDriftLeft = progress.interpolate({
    inputRange: [0, 0.4, 0.72, 1],
    outputRange: [0, -8, 10, 16],
  });

  const smokeDriftCenter = progress.interpolate({
    inputRange: [0, 0.35, 0.7, 1],
    outputRange: [0, 4, -4, 8],
  });

  const smokeDriftRight = progress.interpolate({
    inputRange: [0, 0.45, 0.75, 1],
    outputRange: [0, 8, -6, -14],
  });

  const trayOpacity = progress.interpolate({
    inputRange: [0, 0.18, 0.78, 1],
    outputRange: [0, 0.88, 0.7, 0],
  });

  const sticks = [
    {
      key: 'left',
      x: -24,
      rotate: '-9deg',
      smokeX: smokeDriftLeft,
    },
    {
      key: 'center',
      x: 0,
      rotate: '0deg',
      smokeX: smokeDriftCenter,
    },
    {
      key: 'right',
      x: 24,
      rotate: '9deg',
      smokeX: smokeDriftRight,
    },
  ];

  return (
    <Animated.View
      pointerEvents="none"
      style={[
        styles.incenseLightingLayer,
        {
          opacity: groupOpacity,
          transform: [
            {translateY: groupTranslateY},
            {scale: groupScale},
          ],
        },
      ]}>
      <Animated.View
        style={[
          styles.incenseOfferingTray,
          {
            opacity: trayOpacity,
          },
        ]}
      />

      {sticks.map(stick => (
        <Animated.View
          key={stick.key}
          style={[
            styles.incenseStickWrap,
            {
              marginLeft: stick.x,
              opacity: stickOpacity,
              transform: [{rotate: stick.rotate}],
            },
          ]}>
          <Animated.View
            style={[
              styles.incenseLightingGlow,
              {
                opacity: Animated.multiply(
                  glowOpacity,
                  emberGlow,
                ),
              },
            ]}
          />

          <Animated.View
            style={[
              styles.incenseLightingSmoke,
              {
                opacity: smokeOpacity,
                transform: [
                  {translateY: smokeTranslateY},
                  {translateX: stick.smokeX},
                ],
              },
            ]}
          />

          <Animated.Image
            source={TEMPLE_EFFECT_ASSETS.incenseFlame}
            resizeMode="contain"
            style={[
              styles.incenseFlameImage,
              {
                opacity: flameOpacity,
                transform: [{scale: flamePulse}],
              },
            ]}
          />

          <Animated.Image
            source={TEMPLE_EFFECT_ASSETS.incenseStick}
            resizeMode="contain"
            style={styles.incenseStickImage}
          />
        </Animated.View>
      ))}
    </Animated.View>
  );
}

type TempleSmokeLayerProps = {
  visible: boolean;
};

function useRandomPulse(
  minimum: number,
  maximum: number,
  minimumDuration: number,
  maximumDuration: number,
): Animated.Value {
  const value = useRef(
    new Animated.Value((minimum + maximum) / 2),
  ).current;

  useEffect(() => {
    let cancelled = false;
    let animation: Animated.CompositeAnimation | null = null;

    const animateNext = () => {
      if (cancelled) {
        return;
      }

      const nextValue =
        minimum + Math.random() * (maximum - minimum);

      const duration = Math.round(
        minimumDuration +
          Math.random() * (maximumDuration - minimumDuration),
      );

      animation = Animated.timing(value, {
        toValue: nextValue,
        duration,
        easing: Easing.inOut(Easing.quad),
        useNativeDriver: true,
      });

      animation.start(({finished}) => {
        if (finished && !cancelled) {
          animateNext();
        }
      });
    };

    animateNext();

    return () => {
      cancelled = true;
      animation?.stop();
      value.stopAnimation();
    };
  }, [
    maximum,
    maximumDuration,
    minimum,
    minimumDuration,
    value,
  ]);

  return value;
}

function TempleLightEffects() {
  const leftLight = useRandomPulse(
    0.22,
    0.72,
    260,
    880,
  );

  const rightLight = useRandomPulse(
    0.2,
    0.7,
    300,
    960,
  );

  const centerLight = useRandomPulse(
    0.12,
    0.42,
    900,
    2100,
  );

  return (
    <View
      pointerEvents="none"
      style={styles.fullScreenEffect}>
      <Animated.Image
        source={require('../assets/images/temple_glow_left.png')}
        resizeMode="cover"
        style={[
          styles.glowOverlayImage,
          {
            opacity: leftLight,
          },
        ]}
      />

      <Animated.Image
        source={require('../assets/images/temple_glow_right.png')}
        resizeMode="cover"
        style={[
          styles.glowOverlayImage,
          {
            opacity: rightLight,
          },
        ]}
      />

      <Animated.Image
        source={require('../assets/images/temple_glow_center.png')}
        resizeMode="cover"
        style={[
          styles.glowOverlayImage,
          {
            opacity: centerLight,
          },
        ]}
      />
    </View>
  );
}

function TempleSmokeLayer({
  visible,
}: TempleSmokeLayerProps) {
  const drift = useRef(
    new Animated.Value(0),
  ).current;

  const smokeOpacity = useRandomPulse(
    0.72,
    1,
    1200,
    2400,
  );

  useEffect(() => {
    if (!visible) {
      drift.stopAnimation();
      drift.setValue(0);
      return;
    }

    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(drift, {
          toValue: 1,
          duration: 4200,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
        Animated.timing(drift, {
          toValue: -1,
          duration: 5600,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
        Animated.timing(drift, {
          toValue: 0,
          duration: 3800,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
      ]),
    );

    animation.start();

    return () => {
      animation.stop();
      drift.stopAnimation();
    };
  }, [drift, visible]);

  if (!visible) {
    return null;
  }

  const translateX = drift.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [-14, 0, 12],
  });

  const rotate = drift.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: ['-1.5deg', '0deg', '1.3deg'],
  });

  const scaleX = drift.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [1.05, 0.98, 1.07],
  });

  return (
    <Animated.View
      pointerEvents="none"
      style={[
        styles.smokeMotionLayer,
        {
          opacity: smokeOpacity,
          transform: [
            {translateX},
            {rotate},
            {scaleX},
          ],
        },
      ]}>
      <SkiaIncenseSmoke />
    </Animated.View>
  );
}

const INCENSE_BURN_DURATION_MS = 60 * 1000;

export default function TempleScreen() {
  const {t, i18n} = useTranslation();

  const [incenseExpirations, setIncenseExpirations] =
    useState<number[]>([]);

  const [
    incenseLightingVisible,
    setIncenseLightingVisible,
  ] = useState(false);

  const incenseLightingProgress = useRef(
    new Animated.Value(0),
  ).current;

  const incenseLightingTimeoutRef = useRef<
    ReturnType<typeof setTimeout> | null
  >(null);

  const incenseCount = incenseExpirations.length;

  const [woodenFishCount, setWoodenFishCount] =
    useState(0);

  const [bellCount, setBellCount] =
    useState(0);

  const [loopingSound, setLoopingSound] =
    useState<TempleSound | null>(null);

  const [altarPreferences, setAltarPreferences] =
    useState<AltarPreferences>(
      DEFAULT_ALTAR_PREFERENCES,
    );

  const language =
    i18n.resolvedLanguage ??
    i18n.language ??
    'en';

  const effectiveCultureTheme =
    resolveAltarCultureTheme(
      altarPreferences.cultureTheme,
      language,
    );

  const altarBackground =
    getAltarBackgroundSource(
      effectiveCultureTheme,
    );

  useFocusEffect(
    useCallback(() => {
      let active = true;

      getAltarPreferences()
        .then(value => {
          if (active) {
            setAltarPreferences(value);
          }
        })
        .catch(error => {
          console.warn(
            'Unable to load altar preferences:',
            error,
          );
        });

      return () => {
        active = false;
      };
    }, []),
  );

  useEffect(() => {
    preloadTempleSounds();

    return () => {
      if (incenseLightingTimeoutRef.current) {
        clearTimeout(incenseLightingTimeoutRef.current);
        incenseLightingTimeoutRef.current = null;
      }

      stopAllTempleSounds();
      releaseTempleSounds();
    };
  }, []);

  useEffect(() => {
    const removeExpiredIncense = () => {
      const now = Date.now();

      setIncenseExpirations(current => {
        const remaining = current.filter(
          expirationTime => expirationTime > now,
        );

        return remaining.length === current.length
          ? current
          : remaining;
      });
    };

    removeExpiredIncense();

    const interval = setInterval(
      removeExpiredIncense,
      1000,
    );

    return () => {
      clearInterval(interval);
    };
  }, []);

  const lightIncense = () => {
    if (incenseLightingTimeoutRef.current) {
      clearTimeout(incenseLightingTimeoutRef.current);
      incenseLightingTimeoutRef.current = null;
    }

    incenseLightingProgress.stopAnimation();
    incenseLightingProgress.setValue(0);
    setIncenseLightingVisible(true);

    incenseLightingTimeoutRef.current = setTimeout(() => {
      const expirationTime =
        Date.now() + INCENSE_BURN_DURATION_MS;

      setIncenseExpirations(current => [
        ...current,
        expirationTime,
        expirationTime,
        expirationTime,
      ]);

      recordPracticeActivity('incense').catch(error => {
        console.warn(
          'Unable to record incense practice:',
          error,
        );
      });
    }, 1600);

    Animated.timing(incenseLightingProgress, {
      toValue: 1,
      duration: 3800,
      easing: Easing.inOut(Easing.quad),
      useNativeDriver: true,
    }).start(() => {
      setIncenseLightingVisible(false);
      incenseLightingProgress.setValue(0);
    });
  };

  const recordWoodenFishStrike = async () => {
    setWoodenFishCount(current => current + 1);

    try {
      await incrementChantDraft(
        'woodenFish',
        1,
      );
    } catch (error) {
      console.warn(
        'Unable to update wooden-fish chant counter:',
        error,
      );
    }
  };

  const handleSoundPress = async (type: TempleSound) => {
    if (loopingSound === type) {
      stopTempleSound(type);
      setLoopingSound(null);
      return;
    }

    if (loopingSound !== null) {
      stopAllTempleSounds();
      setLoopingSound(null);
    }

    await playTempleSound(type);

    if (type === 'woodenFish') {
      await recordWoodenFishStrike();
    } else {
      setBellCount(current => current + 1);
    }
  };

  const handleSoundLongPress = async (type: TempleSound) => {
    if (loopingSound === type) {
      stopTempleSound(type);
      setLoopingSound(null);
      return;
    }

    stopAllTempleSounds();
    await startLoopingTempleSound(type);
    setLoopingSound(type);

    if (type === 'woodenFish') {
      await recordWoodenFishStrike();
    } else {
      setBellCount(current => current + 1);
    }
  };

  const resetCounters = () => {
    Alert.alert(
      t('temple.resetDialogTitle'),
      t('temple.resetDialogMessage'),
      [
        {
          text: t('common.cancel'),
          style: 'cancel',
        },
        {
          text: t('common.reset'),
          style: 'destructive',
          onPress: () => {
            stopAllTempleSounds();
            setLoopingSound(null);
            setIncenseExpirations([]);
            setWoodenFishCount(0);
            setBellCount(0);
          },
        },
      ],
    );
  };

  return (
    <ImageBackground
      source={altarBackground}
      resizeMode="cover"
      style={styles.background}>
      <TempleSceneOverlay
        preferences={altarPreferences}
      />

      <TempleAmbientSound />

      <StatusBar
        barStyle="light-content"
        backgroundColor="#160B05"
      />

      <View style={styles.overlay}>
        {effectiveCultureTheme === 'vietnam' && (
          <TempleLightEffects />
        )}

        <SafeAreaView style={styles.safeArea}>
          <ScrollView
            contentContainerStyle={styles.content}
            showsVerticalScrollIndicator={false}>
            <View style={styles.header}>
              <View style={styles.headerLeft}>
                <Text style={styles.lotusIcon}>✺</Text>
                <Text style={styles.headerTitle}>
                  {t('temple.title')}
                </Text>
              </View>

              <Text style={styles.notificationIcon}>♧</Text>
            </View>

            <View style={styles.heroSpacer}>
              <IncenseLightingEffect
                visible={incenseLightingVisible}
                progress={incenseLightingProgress}
              />

              <TempleSmokeLayer
                visible={incenseCount > 0}
              />
            </View>

            <View style={styles.bottomPanel}>
              <View style={styles.actionsRow}>
                <TempleRoundAction
                  kind="incense"
                  imageSource={require('../assets/images/light_incense.png')}
                  title={t('temple.lightIncenseShort', {
                    defaultValue: 'Thắp hương',
                  })}
                  subtitle={t('temple.incenseShortCount', {
                    count: incenseCount,
                    defaultValue: `${incenseCount} nén`,
                  })}
                  onPress={lightIncense}
                />

                <TempleRoundAction
                  kind="woodenFish"
                  imageSource={require('../assets/images/wooden_fish.png')}
                  title={t('temple.woodenFish')}
                  subtitle={
                    loopingSound === 'woodenFish'
                      ? t('temple.tapToStop')
                      : t('temple.woodenFishCount', {
                          count: woodenFishCount,
                        })
                  }
                  isActive={loopingSound === 'woodenFish'}
                  onPress={() =>
                    handleSoundPress('woodenFish')
                  }
                  onLongPress={() =>
                    handleSoundLongPress('woodenFish')
                  }
                />

                <TempleRoundAction
                  kind="bell"
                  imageSource={require('../assets/images/temple_bell.png')}
                  title={t('temple.bell')}
                  subtitle={
                    loopingSound === 'bell'
                      ? t('temple.tapToStop')
                      : t('temple.bellCount', {
                          count: bellCount,
                        })
                  }
                  isActive={loopingSound === 'bell'}
                  onPress={() => handleSoundPress('bell')}
                  onLongPress={() =>
                    handleSoundLongPress('bell')
                  }
                />
              </View>

              <View style={styles.mottoRow}>
                <Text style={styles.mottoOrnament}>‹</Text>
                <Text style={styles.motto}>
                  {t('temple.motto')}
                </Text>
                <Text style={styles.mottoOrnament}>›</Text>
              </View>

              <Text style={styles.longPressHint}>
                {t('temple.longPressHint')}
              </Text>

              <View style={styles.statsCard}>
                <View style={styles.statItem}>
                  <Text style={styles.statLabel}>
                    {t('temple.incenseStatsTitle', {
                      defaultValue: 'Số nén hương',
                    })}
                  </Text>
                  <Text style={styles.statValue}>
                    {incenseCount}
                  </Text>
                </View>

                <View style={styles.statDivider} />

                <View style={styles.statItem}>
                  <Text style={styles.statLabel}>
                    {t('temple.woodenFish')}
                  </Text>
                  <Text style={styles.statValue}>
                    {woodenFishCount}
                  </Text>
                </View>

                <View style={styles.statDivider} />

                <View style={styles.statItem}>
                  <Text style={styles.statLabel}>
                    {t('temple.bell')}
                  </Text>
                  <Text style={styles.statValue}>
                    {bellCount}
                  </Text>
                </View>
              </View>

              {woodenFishCount >= 108 && (
                <View style={styles.completedCard}>
                  <Text style={styles.completedTitle}>
                    {t('temple.completedTitle')}
                  </Text>

                  <Text style={styles.completedText}>
                    {t('temple.completedText')}
                  </Text>
                </View>
              )}

              <Pressable
                style={({pressed}) => [
                  styles.resetButton,
                  pressed && styles.resetButtonPressed,
                ]}
                onPress={resetCounters}>
                <Text style={styles.resetButtonText}>
                  {t('temple.resetCounter')}
                </Text>
              </Pressable>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
}

const GOLD = '#E8B84F';
const GOLD_LIGHT = '#FFE4A0';
const PANEL = 'rgba(27, 14, 7, 0.88)';

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(14, 7, 3, 0.20)',
  },

  safeArea: {
    flex: 1,
    backgroundColor: 'transparent',
  },

  content: {
    flexGrow: 1,
    paddingBottom: 112,
  },

  header: {
    minHeight: 62,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(20, 10, 5, 0.84)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(232, 184, 79, 0.35)',
    paddingHorizontal: 20,
  },

  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  lotusIcon: {
    color: GOLD,
    fontSize: 25,
    marginRight: 9,
  },

  headerTitle: {
    color: GOLD_LIGHT,
    fontSize: 19,
    fontWeight: '800',
  },

  notificationIcon: {
    color: GOLD_LIGHT,
    fontSize: 26,
    transform: [{rotate: '180deg'}],
  },

  heroSpacer: {
    minHeight: 405,
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },

  incenseLightingLayer: {
    position: 'absolute',
    bottom: 16,
    alignSelf: 'center',
    width: 190,
    height: 292,
    alignItems: 'center',
    justifyContent: 'flex-end',
    zIndex: 12,
  },

  incenseOfferingTray: {
    position: 'absolute',
    bottom: 2,
    width: 132,
    height: 42,
    borderRadius: 24,
    backgroundColor: 'rgba(154, 98, 50, 0.72)',
    borderWidth: 1,
    borderColor: 'rgba(255, 220, 150, 0.42)',
    shadowColor: '#000',
    shadowOpacity: 0.32,
    shadowRadius: 8,
    elevation: 6,
  },

  incenseStickWrap: {
    position: 'absolute',
    bottom: 28,
    width: 46,
    height: 210,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  incenseStickImage: {
    width: 36,
    height: 178,
  },

  incenseFlameImage: {
    position: 'absolute',
    top: 2,
    width: 24,
    height: 38,
  },

  incenseLightingGlow: {
    position: 'absolute',
    top: 8,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255, 188, 88, 0.22)',
    shadowColor: '#FFB74D',
    shadowOpacity: 1,
    shadowRadius: 16,
    elevation: 10,
  },

  incenseLightingSmoke: {
    position: 'absolute',
    top: 12,
    width: 18,
    height: 82,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.18)',
  },

  fullScreenEffect: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },

  glowOverlayImage: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },

  smokeMotionLayer: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  bottomPanel: {
    backgroundColor: PANEL,
    borderTopWidth: 1,
    borderTopColor: 'rgba(232, 184, 79, 0.34)',
    paddingHorizontal: 14,
    paddingTop: 16,
    paddingBottom: 20,
  },

  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  actionItem: {
    width: '32%',
    alignItems: 'center',
  },

  actionPressable: {
    borderRadius: 54,
  },

  actionCircle: {
    width: 88,
    height: 88,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(88, 47, 17, 0.75)',
    borderWidth: 1.5,
    borderColor: GOLD,
    borderRadius: 44,

    shadowColor: GOLD,
    shadowOpacity: 0.28,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 0,
    },

    elevation: 7,
  },

  actionCircleActive: {
    backgroundColor: 'rgba(143, 82, 20, 0.92)',
    borderColor: '#FFE29A',
    shadowOpacity: 0.8,
    shadowRadius: 15,
    elevation: 12,
  },

  actionPressed: {
    opacity: 0.78,
  },

  actionVisual: {
    width: 64,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
  },

  actionImage: {
    width: 62,
    height: 62,
  },

  activeDot: {
    position: 'absolute',
    right: 7,
    top: 7,
    width: 10,
    height: 10,
    backgroundColor: '#FFF3A6',
    borderRadius: 5,
  },

  actionTitle: {
    color: '#FFF2CC',
    fontSize: 13,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 8,
  },

  actionSubtitle: {
    minHeight: 18,
    color: '#CFB58F',
    fontSize: 10,
    lineHeight: 14,
    textAlign: 'center',
    marginTop: 3,
  },

  actionSubtitleActive: {
    color: '#FFE295',
  },

  incenseIcon: {
    width: 48,
    height: 62,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  incenseFlame: {
    width: 11,
    height: 18,
    backgroundColor: '#FFD66B',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 7,
    transform: [{rotate: '8deg'}],
    marginBottom: -1,
  },

  incenseIconStick: {
    width: 5,
    height: 30,
    backgroundColor: '#C6452C',
    borderRadius: 3,
  },

  incenseCup: {
    width: 28,
    height: 12,
    backgroundColor: '#DDA83F',
    borderWidth: 1,
    borderColor: '#FFE7A8',
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9,
  },

  mottoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 17,
  },

  motto: {
    color: GOLD_LIGHT,
    fontSize: 17,
    fontWeight: '700',
    textAlign: 'center',
    paddingHorizontal: 12,
  },

  mottoOrnament: {
    color: GOLD,
    fontSize: 26,
    fontWeight: '300',
  },

  longPressHint: {
    color: '#BFA37E',
    fontSize: 11,
    lineHeight: 16,
    textAlign: 'center',
    marginTop: 7,
  },

  statsCard: {
    minHeight: 92,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(82, 44, 16, 0.78)',
    borderWidth: 1,
    borderColor: 'rgba(232, 184, 79, 0.55)',
    borderRadius: 16,
    marginTop: 14,
    paddingVertical: 12,
  },

  statItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },

  statDivider: {
    width: 1,
    height: 46,
    backgroundColor: 'rgba(232, 184, 79, 0.35)',
  },

  statLabel: {
    color: '#E8D1A7',
    fontSize: 11,
    textAlign: 'center',
  },

  statValue: {
    color: GOLD_LIGHT,
    fontSize: 28,
    fontWeight: '700',
    marginTop: 4,
  },

  completedCard: {
    backgroundColor: 'rgba(103, 83, 33, 0.92)',
    borderWidth: 1,
    borderColor: 'rgba(255, 226, 141, 0.55)',
    borderRadius: 14,
    padding: 14,
    marginTop: 14,
  },

  completedTitle: {
    color: '#FFF0BD',
    fontSize: 16,
    fontWeight: '800',
  },

  completedText: {
    color: '#ECDDB5',
    fontSize: 13,
    lineHeight: 20,
    marginTop: 5,
  },

  resetButton: {
    minHeight: 42,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(232, 184, 79, 0.34)',
    borderRadius: 12,
    marginTop: 12,
  },

  resetButtonPressed: {
    opacity: 0.65,
  },

  resetButtonText: {
    color: '#D5B98B',
    fontSize: 13,
    fontWeight: '700',
  },
});