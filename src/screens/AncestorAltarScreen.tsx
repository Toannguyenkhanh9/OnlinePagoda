import React, { useEffect, useRef, useState } from 'react';

import {
  Alert,
  Animated,
  Easing,
  Image,
  ImageBackground,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { launchImageLibrary } from 'react-native-image-picker';
import { useTranslation } from 'react-i18next';

const ANCESTOR_ALTAR_STORAGE_KEY = 'IPAGODA_ANCESTOR_ALTAR_PROFILE';

const ANCESTOR_PRAYER_HISTORY_KEY = 'IPAGODA_ANCESTOR_PRAYER_HISTORY';

const INCENSE_BURN_DURATION_MS = 60 * 1000;

const TEMPLE_EFFECT_ASSETS = {
  incenseStick: require('../assets/images/incense_stick_real.png'),
  incenseFlame: require('../assets/images/incense_flame_real.png'),
};
const ANCESTOR_ALTAR_ASSETS = {
  altarBackground: require('../assets/images/ancestor/ancestor_altar_bg.png'),
};

type AncestorProfile = {
  name: string;
  birthDate: string;
  deathDate: string;
  photoUri: string;
};

type PrayerHistoryItem = {
  id: string;
  prayer: string;
  date: string;
};

type IncenseLightingEffectProps = {
  visible: boolean;
  progress: Animated.Value;
};

function createDefaultProfile(): AncestorProfile {
  return {
    name: '',
    birthDate: '',
    deathDate: '',
    photoUri: '',
  };
}

async function loadAncestorProfile() {
  try {
    const raw = await AsyncStorage.getItem(ANCESTOR_ALTAR_STORAGE_KEY);

    if (!raw) {
      return createDefaultProfile();
    }

    return {
      ...createDefaultProfile(),
      ...(JSON.parse(raw) as Partial<AncestorProfile>),
    };
  } catch {
    return createDefaultProfile();
  }
}

async function saveAncestorProfile(profile: AncestorProfile) {
  await AsyncStorage.setItem(
    ANCESTOR_ALTAR_STORAGE_KEY,
    JSON.stringify(profile),
  );
}

async function loadPrayerHistory() {
  try {
    const raw = await AsyncStorage.getItem(ANCESTOR_PRAYER_HISTORY_KEY);

    if (!raw) {
      return [];
    }

    const parsed = JSON.parse(raw) as PrayerHistoryItem[];

    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

async function savePrayerHistory(items: PrayerHistoryItem[]) {
  await AsyncStorage.setItem(
    ANCESTOR_PRAYER_HISTORY_KEY,
    JSON.stringify(items.slice(0, 50)),
  );
}

function useRandomPulse(
  minimum: number,
  maximum: number,
  minimumDuration: number,
  maximumDuration: number,
) {
  const value = useRef(new Animated.Value((minimum + maximum) / 2)).current;

  useEffect(() => {
    let cancelled = false;
    let animation: Animated.CompositeAnimation | null = null;

    const animateNext = () => {
      if (cancelled) {
        return;
      }

      const nextValue = minimum + Math.random() * (maximum - minimum);

      const duration = Math.round(
        minimumDuration + Math.random() * (maximumDuration - minimumDuration),
      );

      animation = Animated.timing(value, {
        toValue: nextValue,
        duration,
        easing: Easing.inOut(Easing.quad),
        useNativeDriver: true,
      });

      animation.start(({ finished }) => {
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
  }, [maximum, maximumDuration, minimum, minimumDuration, value]);

  return value;
}
function SmokeAfterIncense({ visible }: { visible: boolean }) {
  const drift = useRef(new Animated.Value(0)).current;
  const opacity = useRandomPulse(0.5, 0.92, 1200, 2300);

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
    outputRange: [-12, 0, 14],
  });

  const rotate = drift.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: ['-2deg', '0deg', '2deg'],
  });

  return (
    <Animated.View
      pointerEvents="none"
      style={[
        styles.afterSmokeWrap,
        {
          opacity,
          transform: [{ translateX }, { rotate }],
        },
      ]}
    >
      <View style={styles.afterSmokeA} />
      <View style={styles.afterSmokeB} />
      <View style={styles.afterSmokeC} />
    </Animated.View>
  );
}

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
          transform: [{ translateY: groupTranslateY }, { scale: groupScale }],
        },
      ]}
    >
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
              transform: [{ rotate: stick.rotate }],
            },
          ]}
        >
          <Animated.View
            style={[
              styles.incenseLightingGlow,
              {
                opacity: Animated.multiply(glowOpacity, emberGlow),
              },
            ]}
          />

          <Animated.View
            style={[
              styles.incenseLightingSmoke,
              {
                opacity: smokeOpacity,
                transform: [
                  { translateY: smokeTranslateY },
                  { translateX: stick.smokeX },
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
                transform: [{ scale: flamePulse }],
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

export default function AncestorAltarScreen() {
  const { t } = useTranslation();

  const [profile, setProfile] = useState<AncestorProfile>(
    createDefaultProfile(),
  );

  const [editingProfile, setEditingProfile] = useState<AncestorProfile>(
    createDefaultProfile(),
  );

  const [profileModalVisible, setProfileModalVisible] = useState(false);

  const [prayerModalVisible, setPrayerModalVisible] = useState(false);

  const [prayerText, setPrayerText] = useState('');

  const [floatingPrayer, setFloatingPrayer] = useState('');

  const [prayerHistory, setPrayerHistory] = useState<PrayerHistoryItem[]>([]);

  const [historyVisible, setHistoryVisible] = useState(false);

  const [incenseExpirations, setIncenseExpirations] = useState<number[]>([]);

  const [incenseLightingVisible, setIncenseLightingVisible] = useState(false);

  const incenseLightingProgress = useRef(new Animated.Value(0)).current;

  const incenseLightingTimeoutRef = useRef<ReturnType<
    typeof setTimeout
  > | null>(null);

  const incenseCount = incenseExpirations.length;

  useEffect(() => {
    let mounted = true;

    loadAncestorProfile().then(value => {
      if (mounted) {
        setProfile(value);
        setEditingProfile(value);
      }
    });

    loadPrayerHistory().then(value => {
      if (mounted) {
        setPrayerHistory(value);
      }
    });

    return () => {
      mounted = false;

      if (incenseLightingTimeoutRef.current) {
        clearTimeout(incenseLightingTimeoutRef.current);
        incenseLightingTimeoutRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    const removeExpiredIncense = () => {
      const now = Date.now();

      setIncenseExpirations(current => {
        const remaining = current.filter(
          expirationTime => expirationTime > now,
        );

        return remaining.length === current.length ? current : remaining;
      });
    };

    removeExpiredIncense();

    const interval = setInterval(removeExpiredIncense, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const chooseAncestorPhoto = async () => {
    try {
      const result = await launchImageLibrary({
        mediaType: 'photo',
        quality: 0.9,
        selectionLimit: 1,
      });

      const uri = result.assets?.[0]?.uri;

      if (!uri) {
        return;
      }

      const next = {
        ...editingProfile,
        photoUri: uri,
      };

      setEditingProfile(next);
    } catch (error) {
      console.warn('Unable to pick ancestor photo:', error);
    }
  };

  const openProfileModal = () => {
    setEditingProfile(profile);
    setProfileModalVisible(true);
  };

  const saveProfile = () => {
    const next = {
      ...editingProfile,
      name: editingProfile.name.trim(),
      birthDate: editingProfile.birthDate.trim(),
      deathDate: editingProfile.deathDate.trim(),
    };

    setProfile(next);
    saveAncestorProfile(next).catch(error => {
      console.warn('Unable to save ancestor profile:', error);
    });

    setProfileModalVisible(false);
  };

  const savePrayer = (prayer: string) => {
    const cleaned = prayer.trim();

    if (!cleaned) {
      return;
    }

    const item: PrayerHistoryItem = {
      id: `${Date.now()}-${Math.random()}`,
      prayer: cleaned,
      date: new Date().toISOString(),
    };

    setPrayerHistory(current => {
      const next = [item, ...current].slice(0, 50);

      savePrayerHistory(next).catch(error => {
        console.warn('Unable to save ancestor prayer:', error);
      });

      return next;
    });
  };

  const showFloatingPrayer = (prayer?: string) => {
    const cleaned = prayer?.trim();

    if (!cleaned) {
      setFloatingPrayer('');
      return;
    }

    setFloatingPrayer(cleaned);

    setTimeout(() => {
      setFloatingPrayer('');
    }, 5200);
  };

  const lightIncense = (prayer?: string) => {
    if (incenseLightingTimeoutRef.current) {
      clearTimeout(incenseLightingTimeoutRef.current);
      incenseLightingTimeoutRef.current = null;
    }

    incenseLightingProgress.stopAnimation();
    incenseLightingProgress.setValue(0);
    setIncenseLightingVisible(true);

    const cleanedPrayer = prayer?.trim();

    if (cleanedPrayer) {
      savePrayer(cleanedPrayer);
      showFloatingPrayer(cleanedPrayer);
    }

    incenseLightingTimeoutRef.current = setTimeout(() => {
      const expirationTime = Date.now() + INCENSE_BURN_DURATION_MS;

      setIncenseExpirations(current => [
        ...current,
        expirationTime,
        expirationTime,
        expirationTime,
      ]);
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

  const openPrayerModal = () => {
    setPrayerText('');
    setPrayerModalVisible(true);
  };

  const confirmPrayerIncense = () => {
    const cleaned = prayerText.trim();

    if (!cleaned) {
      Alert.alert(
        t('ancestorAltar.emptyPrayerTitle', {
          defaultValue: 'Chưa có lời cầu nguyện',
        }),
        t('ancestorAltar.emptyPrayerMessage', {
          defaultValue: 'Bạn hãy nhập lời cầu nguyện trước.',
        }),
      );
      return;
    }

    setPrayerModalVisible(false);
    lightIncense(cleaned);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#1B0E08" />

      <View style={styles.screen}>
        <View style={styles.header}>
          <View>
            <Text style={styles.headerTitle}>
              {t('ancestorAltar.title', {
                defaultValue: 'Bàn thờ gia tiên',
              })}
            </Text>

            <Text style={styles.headerSubtitle}>
              {t('ancestorAltar.subtitle', {
                defaultValue: 'Tưởng nhớ người thân với lòng biết ơn',
              })}
            </Text>
          </View>

          <Pressable
            style={styles.headerButton}
            onPress={() => setHistoryVisible(true)}
          >
            <Text style={styles.headerButtonText}>📜</Text>
          </Pressable>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
        >
          <View style={styles.altarScene}>
            <ImageBackground
              source={ANCESTOR_ALTAR_ASSETS.altarBackground}
              resizeMode="cover"
              style={styles.altarBackgroundImage}
            >
              <View style={styles.altarDarkOverlay} />

              <View style={styles.ancestorFrameArea}>
                <Pressable style={styles.photoFrame} onPress={openProfileModal}>
                  {profile.photoUri ? (
                    <Image
                      source={{ uri: profile.photoUri }}
                      resizeMode="cover"
                      style={styles.ancestorPhoto}
                    />
                  ) : (
                    <View style={styles.photoPlaceholder}>
                      <Text style={styles.photoPlaceholderText}>
                        {t('ancestorAltar.addPhoto', {
                          defaultValue: 'Thêm ảnh',
                        })}
                      </Text>
                    </View>
                  )}
                </Pressable>

                <Text style={styles.photoHintText} numberOfLines={2}>
                  {t('ancestorAltar.photoHint', {
                    defaultValue:
                      'Nhấn vào khung hình để chọn ảnh người thân/tổ tiên',
                  })}
                </Text>

                <View style={styles.namePlaque}>
                  <Text style={styles.ancestorName} numberOfLines={1}>
                    {profile.name ||
                      t('ancestorAltar.noName', {
                        defaultValue: 'Người thân đã khuất',
                      })}
                  </Text>

                  <Text style={styles.ancestorDates} numberOfLines={1}>
                    {profile.birthDate || '—'}
                    {'  ·  '}
                    {profile.deathDate || '—'}
                  </Text>
                </View>
              </View>

              <View style={styles.incenseBowlArea}>
                {floatingPrayer ? (
                  <View style={styles.prayerFloatingBox}>
                    <Text style={styles.prayerFloatingText} numberOfLines={3}>
                      {floatingPrayer}
                    </Text>
                  </View>
                ) : null}

                <IncenseLightingEffect
                  visible={incenseLightingVisible}
                  progress={incenseLightingProgress}
                />

                <SmokeAfterIncense visible={incenseCount > 0} />
              </View>
            </ImageBackground>
          </View>

          <View style={styles.infoCard}>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>
                {t('ancestorAltar.incenseCount', {
                  defaultValue: 'Nhang đang cháy',
                })}
              </Text>
              <Text style={styles.infoValue}>{incenseCount}</Text>
            </View>

            <View style={styles.infoDivider} />

            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>
                {t('ancestorAltar.prayerCount', {
                  defaultValue: 'Lời nguyện',
                })}
              </Text>
              <Text style={styles.infoValue}>{prayerHistory.length}</Text>
            </View>
          </View>

          <View style={styles.actions}>
            <Pressable
              style={({ pressed }) => [
                styles.secondaryButton,
                pressed && styles.buttonPressed,
              ]}
              onPress={() => lightIncense()}
            >
              <Text style={styles.secondaryButtonText}>
                🕯️{' '}
                {t('ancestorAltar.lightIncense', {
                  defaultValue: 'Thắp hương',
                })}
              </Text>
            </Pressable>

            <Pressable
              style={({ pressed }) => [
                styles.primaryButton,
                pressed && styles.buttonPressed,
              ]}
              onPress={openPrayerModal}
            >
              <Text style={styles.primaryButtonText}>
                🙏{' '}
                {t('ancestorAltar.lightWithPrayer', {
                  defaultValue: 'Thắp hương với lời cầu nguyện',
                })}
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>

      <Modal
        visible={profileModalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setProfileModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>
              {t('ancestorAltar.profileTitle', {
                defaultValue: 'Thông tin người thân',
              })}
            </Text>

            <Pressable
              style={styles.modalPhotoPicker}
              onPress={chooseAncestorPhoto}
            >
              {editingProfile.photoUri ? (
                <Image
                  source={{ uri: editingProfile.photoUri }}
                  resizeMode="cover"
                  style={styles.modalPhoto}
                />
              ) : (
                <Text style={styles.modalPhotoText}>
                  🖼️{' '}
                  {t('ancestorAltar.choosePhoto', {
                    defaultValue: 'Chọn ảnh',
                  })}
                </Text>
              )}
            </Pressable>

            <TextInput
              value={editingProfile.name}
              onChangeText={text =>
                setEditingProfile(current => ({
                  ...current,
                  name: text,
                }))
              }
              placeholder={t('ancestorAltar.namePlaceholder', {
                defaultValue: 'Họ tên người mất',
              })}
              placeholderTextColor="rgba(255,255,255,0.45)"
              style={styles.input}
            />

            <TextInput
              value={editingProfile.birthDate}
              onChangeText={text =>
                setEditingProfile(current => ({
                  ...current,
                  birthDate: text,
                }))
              }
              placeholder={t('ancestorAltar.birthPlaceholder', {
                defaultValue: 'Ngày sinh',
              })}
              placeholderTextColor="rgba(255,255,255,0.45)"
              style={styles.input}
            />

            <TextInput
              value={editingProfile.deathDate}
              onChangeText={text =>
                setEditingProfile(current => ({
                  ...current,
                  deathDate: text,
                }))
              }
              placeholder={t('ancestorAltar.deathPlaceholder', {
                defaultValue: 'Ngày mất',
              })}
              placeholderTextColor="rgba(255,255,255,0.45)"
              style={styles.input}
            />

            <View style={styles.modalActions}>
              <Pressable
                style={styles.cancelButton}
                onPress={() => setProfileModalVisible(false)}
              >
                <Text style={styles.cancelButtonText}>
                  {t('common.cancel', {
                    defaultValue: 'Hủy',
                  })}
                </Text>
              </Pressable>

              <Pressable style={styles.confirmButton} onPress={saveProfile}>
                <Text style={styles.confirmButtonText}>
                  {t('common.save', {
                    defaultValue: 'Lưu',
                  })}
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        visible={prayerModalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setPrayerModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>
              {t('ancestorAltar.prayerTitle', {
                defaultValue: 'Lời cầu nguyện',
              })}
            </Text>

            <TextInput
              value={prayerText}
              onChangeText={setPrayerText}
              multiline
              maxLength={160}
              placeholder={t('ancestorAltar.prayerPlaceholder', {
                defaultValue:
                  'Ví dụ: Con cầu mong ông bà tổ tiên phù hộ cho gia đình bình an...',
              })}
              placeholderTextColor="rgba(255,255,255,0.45)"
              style={styles.prayerInput}
            />

            <View style={styles.prayerPresets}>
              {[
                t('ancestorAltar.prayerPresetPeace', {
                  defaultValue:
                    'Cầu mong gia đình bình an, mọi việc thuận duyên.',
                }),
                t('ancestorAltar.prayerPresetGratitude', {
                  defaultValue:
                    'Con xin tưởng nhớ và biết ơn công đức tổ tiên.',
                }),
                t('ancestorAltar.prayerPresetProtection', {
                  defaultValue: 'Xin ông bà tổ tiên che chở cho con cháu.',
                }),
              ].map(item => (
                <Pressable
                  key={item}
                  style={styles.prayerPresetChip}
                  onPress={() => setPrayerText(item)}
                >
                  <Text style={styles.prayerPresetText} numberOfLines={2}>
                    {item}
                  </Text>
                </Pressable>
              ))}
            </View>

            <View style={styles.modalActions}>
              <Pressable
                style={styles.cancelButton}
                onPress={() => setPrayerModalVisible(false)}
              >
                <Text style={styles.cancelButtonText}>
                  {t('common.cancel', {
                    defaultValue: 'Hủy',
                  })}
                </Text>
              </Pressable>

              <Pressable
                style={styles.confirmButton}
                onPress={confirmPrayerIncense}
              >
                <Text style={styles.confirmButtonText}>
                  {t('ancestorAltar.lightIncense', {
                    defaultValue: 'Thắp hương',
                  })}
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        visible={historyVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setHistoryVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.historyCard}>
            <Text style={styles.modalTitle}>
              {t('ancestorAltar.historyTitle', {
                defaultValue: 'Lịch sử lời nguyện',
              })}
            </Text>

            <ScrollView style={styles.historyList}>
              {prayerHistory.length === 0 ? (
                <Text style={styles.emptyHistory}>
                  {t('ancestorAltar.emptyHistory', {
                    defaultValue: 'Bạn chưa lưu lời cầu nguyện nào.',
                  })}
                </Text>
              ) : (
                prayerHistory.map(item => (
                  <View key={item.id} style={styles.historyItem}>
                    <Text style={styles.historyDate}>
                      {new Date(item.date).toLocaleDateString()}
                    </Text>

                    <Text style={styles.historyPrayer}>{item.prayer}</Text>
                  </View>
                ))
              )}
            </ScrollView>

            <Pressable
              style={styles.closeHistoryButton}
              onPress={() => setHistoryVisible(false)}
            >
              <Text style={styles.confirmButtonText}>
                {t('common.cancel', {
                  defaultValue: 'Đóng',
                })}
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const GOLD = '#E8B84F';
const GOLD_LIGHT = '#FFE4A0';
const DARK = '#1A0D07';
const PANEL = 'rgba(32, 16, 8, 0.92)';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: DARK,
  },

  screen: {
    flex: 1,
    backgroundColor: DARK,
  },

  header: {
    minHeight: 70,
    paddingHorizontal: 18,
    paddingVertical: 12,
    backgroundColor: 'rgba(20, 10, 5, 0.95)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(232,184,79,0.32)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  headerTitle: {
    color: GOLD_LIGHT,
    fontSize: 21,
    fontWeight: '900',
  },

  headerSubtitle: {
    color: '#CDB38A',
    fontSize: 12,
    marginTop: 3,
  },

  headerButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderWidth: 1,
    borderColor: 'rgba(232,184,79,0.28)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerButtonText: {
    fontSize: 20,
  },

  content: {
    paddingBottom: 120,
  },

  wallGlow: {
    position: 'absolute',
    top: 40,
    width: 280,
    height: 280,
    borderRadius: 140,
    backgroundColor: 'rgba(255,204,120,0.12)',
    shadowColor: '#FFD37A',
    shadowOpacity: 0.8,
    shadowRadius: 40,
  },

  photoPlaceholderIcon: {
    fontSize: 36,
  },
  offeringsRow: {
    position: 'absolute',
    bottom: 128,
    left: 10,
    right: 10,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
  },

  flowerVase: {
    alignItems: 'center',
    width: 62,
  },

  flowerEmoji: {
    fontSize: 34,
    marginBottom: -4,
  },

  vaseBody: {
    width: 38,
    height: 42,
    borderRadius: 18,
    backgroundColor: '#8A5A2B',
    borderWidth: 1,
    borderColor: 'rgba(255,220,150,0.38)',
  },

  candleWrap: {
    alignItems: 'center',
    width: 38,
  },

  candleFlame: {
    width: 12,
    height: 20,
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    borderBottomLeftRadius: 8,
    backgroundColor: '#FFE27A',
    shadowColor: '#FFB23B',
    shadowOpacity: 1,
    shadowRadius: 14,
    marginBottom: -2,
  },

  candleBody: {
    width: 22,
    height: 52,
    borderRadius: 7,
    backgroundColor: '#FFF0C8',
  },

  fruitPlate: {
    alignItems: 'center',
    width: 84,
  },

  fruitEmoji: {
    fontSize: 30,
  },

  plateBase: {
    width: 74,
    height: 14,
    borderRadius: 8,
    backgroundColor: '#B57A34',
    marginTop: -2,
  },
  incenseBowl: {
    alignItems: 'center',
    zIndex: 8,
  },

  bowlRim: {
    width: 92,
    height: 18,
    borderRadius: 20,
    backgroundColor: '#C58B3A',
    borderWidth: 1,
    borderColor: '#FFE4A0',
  },

  bowlBody: {
    width: 76,
    height: 52,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: '#8D4E1F',
    borderWidth: 1,
    borderColor: 'rgba(255,220,150,0.42)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  bowlSymbol: {
    color: GOLD_LIGHT,
    fontSize: 20,
    fontWeight: '900',
  },

  altarTable: {
    width: '100%',
    height: 62,
    backgroundColor: '#4C2611',
    borderTopWidth: 2,
    borderTopColor: 'rgba(232,184,79,0.38)',
  },
  incenseOfferingTray: {
    position: 'absolute',
    bottom: 8,
    width: 108,
    height: 30,
    borderRadius: 18,
    backgroundColor: 'rgba(154, 98, 50, 0.28)',
    borderWidth: 1,
    borderColor: 'rgba(255, 220, 150, 0.18)',
  },

  incenseStickWrap: {
    position: 'absolute',
    bottom: 38,
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
  afterSmokeA: {
    position: 'absolute',
    bottom: 20,
    width: 20,
    height: 92,
    borderRadius: 14,
    backgroundColor: 'rgba(255,255,255,0.16)',
  },

  afterSmokeB: {
    position: 'absolute',
    bottom: 50,
    left: 30,
    width: 18,
    height: 74,
    borderRadius: 13,
    backgroundColor: 'rgba(255,255,255,0.11)',
  },

  afterSmokeC: {
    position: 'absolute',
    bottom: 38,
    right: 28,
    width: 16,
    height: 82,
    borderRadius: 13,
    backgroundColor: 'rgba(255,255,255,0.12)',
  },

  infoCard: {
    marginHorizontal: 16,
    marginTop: 16,
    minHeight: 78,
    borderRadius: 18,
    backgroundColor: PANEL,
    borderWidth: 1,
    borderColor: 'rgba(232,184,79,0.28)',
    flexDirection: 'row',
    alignItems: 'center',
  },

  infoItem: {
    flex: 1,
    alignItems: 'center',
  },

  infoLabel: {
    color: '#CDB38A',
    fontSize: 12,
    fontWeight: '700',
  },

  infoValue: {
    color: GOLD_LIGHT,
    fontSize: 24,
    fontWeight: '900',
    marginTop: 4,
  },

  infoDivider: {
    width: 1,
    height: 42,
    backgroundColor: 'rgba(232,184,79,0.25)',
  },

  actions: {
    marginHorizontal: 16,
    marginTop: 14,
  },

  secondaryButton: {
    height: 52,
    borderRadius: 26,
    backgroundColor: 'rgba(0,0,0,0.34)',
    borderWidth: 1,
    borderColor: 'rgba(232,184,79,0.32)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },

  secondaryButtonText: {
    color: GOLD_LIGHT,
    fontSize: 15,
    fontWeight: '900',
  },

  primaryButton: {
    height: 58,
    borderRadius: 29,
    backgroundColor: GOLD,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },

  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '900',
  },

  buttonPressed: {
    opacity: 0.72,
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.68)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 22,
  },

  modalCard: {
    width: '100%',
    backgroundColor: 'rgba(32,16,8,0.97)',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(232,184,79,0.32)',
    padding: 18,
  },

  modalTitle: {
    color: GOLD_LIGHT,
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'center',
  },

  modalPhotoPicker: {
    alignSelf: 'center',
    marginTop: 16,
    width: 116,
    height: 146,
    borderRadius: 12,
    borderWidth: 3,
    borderColor: '#C7923A',
    backgroundColor: 'rgba(255,255,255,0.08)',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },

  modalPhoto: {
    width: '100%',
    height: '100%',
  },

  modalPhotoText: {
    color: GOLD_LIGHT,
    fontSize: 13,
    fontWeight: '800',
    textAlign: 'center',
  },

  input: {
    height: 48,
    marginTop: 12,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: 'rgba(232,184,79,0.25)',
    backgroundColor: 'rgba(255,255,255,0.08)',
    paddingHorizontal: 14,
    color: '#FFFFFF',
    fontSize: 14,
  },

  prayerInput: {
    minHeight: 112,
    marginTop: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(232,184,79,0.25)',
    backgroundColor: 'rgba(255,255,255,0.08)',
    paddingHorizontal: 14,
    paddingVertical: 12,
    color: '#FFFFFF',
    fontSize: 14,
    textAlignVertical: 'top',
  },

  prayerPresets: {
    marginTop: 12,
  },

  prayerPresetChip: {
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 9,
    marginBottom: 8,
    backgroundColor: 'rgba(232,184,79,0.12)',
    borderWidth: 1,
    borderColor: 'rgba(232,184,79,0.22)',
  },

  prayerPresetText: {
    color: GOLD_LIGHT,
    fontSize: 13,
    fontWeight: '700',
    lineHeight: 18,
  },

  modalActions: {
    marginTop: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  cancelButton: {
    width: '47%',
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(255,255,255,0.12)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  cancelButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '800',
  },

  confirmButton: {
    width: '47%',
    height: 48,
    borderRadius: 24,
    backgroundColor: GOLD,
    alignItems: 'center',
    justifyContent: 'center',
  },

  confirmButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '900',
  },

  historyCard: {
    width: '100%',
    maxHeight: '72%',
    backgroundColor: 'rgba(32,16,8,0.97)',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(232,184,79,0.32)',
    padding: 18,
  },

  historyList: {
    marginTop: 14,
  },

  historyItem: {
    paddingVertical: 11,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.08)',
  },

  historyDate: {
    color: '#CDB38A',
    fontSize: 11,
    fontWeight: '700',
  },

  historyPrayer: {
    color: '#FFFFFF',
    marginTop: 5,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '700',
  },

  emptyHistory: {
    color: 'rgba(255,255,255,0.68)',
    fontSize: 14,
    textAlign: 'center',
    paddingVertical: 28,
  },

  closeHistoryButton: {
    height: 46,
    borderRadius: 23,
    marginTop: 16,
    backgroundColor: GOLD,
    alignItems: 'center',
    justifyContent: 'center',
  },
  altarScene: {
    height: 440,
    backgroundColor: '#1A0D07',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(232,184,79,0.28)',
    overflow: 'hidden',
  },

  altarBackgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  altarDarkOverlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(18, 8, 3, 0.06)',
  },

  ancestorFrameArea: {
    position: 'absolute',
    top: 68,
    alignSelf: 'center',
    alignItems: 'center',
    zIndex: 12,
  },

  photoFrame: {
    width: 75,
    height: 135,
    borderRadius: 4,
    backgroundColor: 'rgba(55, 31, 14, 0.48)',
    borderWidth: 2,
    borderColor: 'rgba(255, 221, 145, 0.62)',
    overflow: 'hidden',
  },

  ancestorPhoto: {
    width: '100%',
    height: '100%',
  },

  photoPlaceholder: {
    flex: 1,
    backgroundColor: 'rgba(210, 170, 105, 0.42)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  photoPlaceholderText: {
    color: '#5B3416',
    fontSize: 13,
    fontWeight: '900',
    textAlign: 'center',
  },

  namePlaque: {
    minWidth: 210,
    marginTop: 10,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: 'rgba(0,0,0,0.42)',
    borderWidth: 1,
    borderColor: 'rgba(255, 221, 145, 0.32)',
    alignItems: 'center',
  },

  ancestorName: {
    color: GOLD_LIGHT,
    fontSize: 16,
    fontWeight: '900',
  },

  ancestorDates: {
    color: '#D4BB8F',
    fontSize: 11,
    marginTop: 3,
  },

  incenseBowlArea: {
    position: 'absolute',
    bottom: 82,
    alignSelf: 'center',
    width: 240,
    height: 230,
    alignItems: 'center',
    justifyContent: 'flex-end',
    zIndex: 16,
  },

  prayerFloatingBox: {
    position: 'absolute',
    top: 10,
    left: 14,
    right: 14,
    zIndex: 30,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 16,
    backgroundColor: 'rgba(0,0,0,0.52)',
    borderWidth: 1,
    borderColor: 'rgba(232,184,79,0.32)',
  },

  prayerFloatingText: {
    color: GOLD_LIGHT,
    fontSize: 12,
    fontWeight: '800',
    textAlign: 'center',
    lineHeight: 17,
  },

  incenseLightingLayer: {
    position: 'absolute',
    bottom: -12,
    alignSelf: 'center',
    width: 190,
    height: 292,
    alignItems: 'center',
    justifyContent: 'flex-end',
    zIndex: 22,
  },

  afterSmokeWrap: {
    position: 'absolute',
    bottom: 46,
    width: 90,
    height: 140,
    alignItems: 'center',
    zIndex: 18,
  },
  photoHintText: {
  maxWidth: 230,
  marginTop: 7,
  paddingHorizontal: 12,
  paddingVertical: 6,
  borderRadius: 999,
  backgroundColor: 'rgba(0,0,0,0.38)',
  borderWidth: 1,
  borderColor: 'rgba(255,221,145,0.24)',
  color: '#FFE4A0',
  fontSize: 10,
  lineHeight: 14,
  fontWeight: '800',
  textAlign: 'center',
},
});
