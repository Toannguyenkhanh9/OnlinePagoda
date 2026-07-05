import React, { useEffect, useMemo, useRef, useState } from 'react';

import {
  Animated,
  Dimensions,
  Easing,
  ImageBackground,
  ImageSourcePropType,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTranslation } from 'react-i18next';

import {
  getLanternSoundEnabled,
  playLanternWaterSound,
  preloadLanternSounds,
  releaseLanternSounds,
  setLanternSoundEnabled,
} from '../services/lanternSound';
import { scheduleLanternReleaseReminders } from '../services/lanternReleaseNotifications';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const ASSETS = {
  background: require('../assets/images/lantern/lantern_river_bg.png'),

  lotusPink: require('../assets/images/lantern/lotus_lantern_pink.png'),
  lotusGold: require('../assets/images/lantern/lotus_lantern_gold.png'),
  paperLantern: require('../assets/images/lantern/paper_lantern.png'),
  moonLantern: require('../assets/images/lantern/moon_lantern.png'),
  peaceLantern: require('../assets/images/lantern/peace_lantern.png'),
};

const STORAGE_KEY = 'IPAGODA_LANTERN_RELEASE_STATS';
const SOUND_STORAGE_KEY = 'IPAGODA_LANTERN_RELEASE_SOUND_ENABLED';
type LanternStats = {
  total: number;
  today: number;
  lastDate: string;
};

type LanternKind = 'pink' | 'gold' | 'paper' | 'moon' | 'peace';

type LanternItem = {
  id: number;
  progress: Animated.Value;
  startX: number;
  startY: number;
  driftX: number;
  label: string;
  image: ImageSourcePropType;
};

type LanternType = {
  key: LanternKind;
  emoji: string;
  labelKey: string;
  image: ImageSourcePropType;
};

const LANTERN_TYPES: LanternType[] = [
  {
    key: 'pink',
    emoji: '🌸',
    labelKey: 'lanternRelease.types.pink',
    image: ASSETS.lotusPink,
  },
  {
    key: 'gold',
    emoji: '🪷',
    labelKey: 'lanternRelease.types.gold',
    image: ASSETS.lotusGold,
  },
  {
    key: 'paper',
    emoji: '🕯️',
    labelKey: 'lanternRelease.types.paper',
    image: ASSETS.paperLantern,
  },
  {
    key: 'moon',
    emoji: '🌕',
    labelKey: 'lanternRelease.types.moon',
    image: ASSETS.moonLantern,
  },
  {
    key: 'peace',
    emoji: '💮',
    labelKey: 'lanternRelease.types.peace',
    image: ASSETS.peaceLantern,
  },
];

const DEFAULT_PRAYER_PRESETS = [
  'Bình An',
  'Như Ý',
  'Cầu An',
  'Từ Bi',
  'Thiện Duyên',
  'An Lạc',
];

function getTodayKey() {
  return new Date().toISOString().slice(0, 10);
}

function createDefaultStats(): LanternStats {
  return {
    total: 0,
    today: 0,
    lastDate: getTodayKey(),
  };
}

async function loadStats(): Promise<LanternStats> {
  const today = getTodayKey();

  try {
    const raw = await AsyncStorage.getItem(STORAGE_KEY);

    if (!raw) {
      return createDefaultStats();
    }

    const parsed = JSON.parse(raw) as LanternStats;

    if (parsed.lastDate !== today) {
      return {
        ...parsed,
        today: 0,
        lastDate: today,
      };
    }

    return parsed;
  } catch {
    return createDefaultStats();
  }
}

async function saveStats(stats: LanternStats) {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
}

/**
 * Lunar day calculation, timezone Vietnam = 7.
 * Special days: mùng 1, 14, 15, 30.
 */
function jdFromDate(dd: number, mm: number, yy: number) {
  const a = Math.floor((14 - mm) / 12);
  const y = yy + 4800 - a;
  const m = mm + 12 * a - 3;

  let jd =
    dd +
    Math.floor((153 * m + 2) / 5) +
    365 * y +
    Math.floor(y / 4) -
    Math.floor(y / 100) +
    Math.floor(y / 400) -
    32045;

  if (jd < 2299161) {
    jd =
      dd + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - 32083;
  }

  return jd;
}

function getNewMoonDay(k: number, timeZone: number) {
  const t = k / 1236.85;
  const t2 = t * t;
  const t3 = t2 * t;
  const dr = Math.PI / 180;

  let jd1 = 2415020.75933 + 29.53058868 * k + 0.0001178 * t2 - 0.000000155 * t3;

  jd1 += 0.00033 * Math.sin((166.56 + 132.87 * t - 0.009173 * t2) * dr);

  const m = 359.2242 + 29.10535608 * k - 0.0000333 * t2 - 0.00000347 * t3;

  const mpr = 306.0253 + 385.81691806 * k + 0.0107306 * t2 + 0.00001236 * t3;

  const f = 21.2964 + 390.67050646 * k - 0.0016528 * t2 - 0.00000239 * t3;

  let c1 =
    (0.1734 - 0.000393 * t) * Math.sin(m * dr) +
    0.0021 * Math.sin(2 * dr * m) -
    0.4068 * Math.sin(mpr * dr) +
    0.0161 * Math.sin(2 * dr * mpr) -
    0.0004 * Math.sin(3 * dr * mpr) +
    0.0104 * Math.sin(2 * dr * f) -
    0.0051 * Math.sin((m + mpr) * dr) -
    0.0074 * Math.sin((m - mpr) * dr) +
    0.0004 * Math.sin((2 * f + m) * dr) -
    0.0004 * Math.sin((2 * f - m) * dr) -
    0.0006 * Math.sin((2 * f + mpr) * dr) +
    0.001 * Math.sin((2 * f - mpr) * dr) +
    0.0005 * Math.sin((2 * mpr + m) * dr);

  let deltaT: number;

  if (t < -11) {
    deltaT =
      0.001 +
      0.000839 * t +
      0.0002261 * t2 -
      0.00000845 * t3 -
      0.000000081 * t * t3;
  } else {
    deltaT = -0.000278 + 0.000265 * t + 0.000262 * t2;
  }

  const jdNew = jd1 + c1 - deltaT;

  return Math.floor(jdNew + 0.5 + timeZone / 24);
}

function getSunLongitude(jdn: number, timeZone: number) {
  const t = (jdn - 2451545.5 - timeZone / 24) / 36525;
  const t2 = t * t;
  const dr = Math.PI / 180;

  const m = 357.5291 + 35999.0503 * t - 0.0001559 * t2 - 0.00000048 * t * t2;

  const l0 = 280.46645 + 36000.76983 * t + 0.0003032 * t2;

  let dl =
    (1.9146 - 0.004817 * t - 0.000014 * t2) * Math.sin(dr * m) +
    (0.019993 - 0.000101 * t) * Math.sin(2 * dr * m) +
    0.00029 * Math.sin(3 * dr * m);

  let l = l0 + dl;
  l = l * dr;
  l = l - Math.PI * 2 * Math.floor(l / (Math.PI * 2));

  return Math.floor((l / Math.PI) * 6);
}

function getLunarMonth11(yy: number, timeZone: number) {
  const off = jdFromDate(31, 12, yy) - 2415021;
  const k = Math.floor(off / 29.530588853);
  let nm = getNewMoonDay(k, timeZone);
  const sunLong = getSunLongitude(nm, timeZone);

  if (sunLong >= 9) {
    nm = getNewMoonDay(k - 1, timeZone);
  }

  return nm;
}

function getLeapMonthOffset(a11: number, timeZone: number) {
  const k = Math.floor((a11 - 2415021.076998695) / 29.530588853 + 0.5);
  let last = 0;
  let i = 1;
  let arc = getSunLongitude(getNewMoonDay(k + i, timeZone), timeZone);

  do {
    last = arc;
    i += 1;
    arc = getSunLongitude(getNewMoonDay(k + i, timeZone), timeZone);
  } while (arc !== last && i < 14);

  return i - 1;
}

function getVietnameseLunarDay(date = new Date()) {
  const timeZone = 7;
  const dd = date.getDate();
  const mm = date.getMonth() + 1;
  const yy = date.getFullYear();

  const dayNumber = jdFromDate(dd, mm, yy);
  const k = Math.floor((dayNumber - 2415021.076998695) / 29.530588853);

  let monthStart = getNewMoonDay(k + 1, timeZone);

  if (monthStart > dayNumber) {
    monthStart = getNewMoonDay(k, timeZone);
  }

  let a11 = getLunarMonth11(yy, timeZone);
  let b11 = a11;
  //let lunarYear: number;

  if (a11 >= monthStart) {
    // lunarYear = yy;
    a11 = getLunarMonth11(yy - 1, timeZone);
  } else {
    //lunarYear = yy + 1;
    b11 = getLunarMonth11(yy + 1, timeZone);
  }

  const lunarDay = dayNumber - monthStart + 1;
  const diff = Math.floor((monthStart - a11) / 29);
  let lunarMonth = diff + 11;

  if (b11 - a11 > 365) {
    const leapMonthDiff = getLeapMonthOffset(a11, timeZone);

    if (diff >= leapMonthDiff) {
      lunarMonth = diff + 10;
    }
  }

  if (lunarMonth > 12) {
    lunarMonth -= 12;
  }

  if (lunarMonth >= 11 && diff < 4) {
    //lunarYear -= 1;
  }

  return lunarDay;
}

function isSpecialLunarNight() {
  const lunarDay = getVietnameseLunarDay();

  return (
    lunarDay === 1 || lunarDay === 14 || lunarDay === 15 || lunarDay === 30
  );
}

function MovingWater() {
  const waveA = useRef(new Animated.Value(0)).current;
  const waveB = useRef(new Animated.Value(0)).current;
  const waveC = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animA = Animated.loop(
      Animated.timing(waveA, {
        toValue: 1,
        duration: 9000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    );

    const animB = Animated.loop(
      Animated.timing(waveB, {
        toValue: 1,
        duration: 13000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    );

    const animC = Animated.loop(
      Animated.timing(waveC, {
        toValue: 1,
        duration: 17000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    );

    animA.start();
    animB.start();
    animC.start();

    return () => {
      animA.stop();
      animB.stop();
      animC.stop();
    };
  }, [waveA, waveB, waveC]);

  const moveA = waveA.interpolate({
    inputRange: [0, 1],
    outputRange: [-120, 120],
  });

  const moveB = waveB.interpolate({
    inputRange: [0, 1],
    outputRange: [100, -100],
  });

  const moveC = waveC.interpolate({
    inputRange: [0, 1],
    outputRange: [-80, 80],
  });

  return (
    <View pointerEvents="none" style={styles.waterLayer}>
      <Animated.View
        style={[
          styles.waterShine,
          {
            top: '18%',
            opacity: 0.13,
            transform: [{ translateX: moveA }],
          },
        ]}
      />

      <Animated.View
        style={[
          styles.waterShine,
          {
            top: '39%',
            opacity: 0.1,
            transform: [{ translateX: moveB }],
          },
        ]}
      />

      <Animated.View
        style={[
          styles.waterShineSmall,
          {
            top: '60%',
            opacity: 0.12,
            transform: [{ translateX: moveC }],
          },
        ]}
      />

      <Animated.View
        style={[
          styles.waterShineSmall,
          {
            top: '78%',
            opacity: 0.08,
            transform: [{ translateX: moveA }],
          },
        ]}
      />
    </View>
  );
}

function SpecialNightEffects({ enabled }: { enabled: boolean }) {
  const float = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const anim = Animated.loop(
      Animated.timing(float, {
        toValue: 1,
        duration: 14000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    );

    anim.start();

    return () => {
      anim.stop();
    };
  }, [enabled, float]);

  const translateY = float.interpolate({
    inputRange: [0, 1],
    outputRange: [20, -60],
  });

  const opacity = float.interpolate({
    inputRange: [0, 0.25, 0.8, 1],
    outputRange: [0.3, 0.9, 0.8, 0.2],
  });

  if (!enabled) {
    return null;
  }

  return (
    <View pointerEvents="none" style={styles.specialLayer}>
      <View style={styles.brightMoonGlow} />

      {[0.18, 0.33, 0.48, 0.62, 0.76, 0.88].map((leftRatio, index) => (
        <Animated.Text
          key={leftRatio}
          style={[
            styles.skyLantern,
            {
              left: SCREEN_WIDTH * leftRatio,
              top: 118 + index * 32,
              opacity,
              transform: [
                {
                  translateY,
                },
                {
                  translateX: index % 2 === 0 ? -10 : 10,
                },
              ],
            },
          ]}
        >
          🏮
        </Animated.Text>
      ))}
    </View>
  );
}

function LanternSprite({ item }: { item: LanternItem }) {
  const translateX = item.progress.interpolate({
    inputRange: [0, 0.18, 0.36, 0.55, 0.75, 1],
    outputRange: [
      0,
      item.driftX * 0.22,
      item.driftX * -0.12,
      item.driftX * 0.36,
      item.driftX * 0.62,
      item.driftX,
    ],
  });

  const translateY = item.progress.interpolate({
    inputRange: [0, 0.2, 0.42, 0.65, 0.82, 1],
    outputRange: [0, -36, -92, -158, -225, -310],
  });

  const scale = item.progress.interpolate({
    inputRange: [0, 0.25, 0.5, 0.75, 1],
    outputRange: [1, 0.86, 0.66, 0.46, 0.25],
  });

  const opacity = item.progress.interpolate({
    inputRange: [0, 0.78, 0.92, 1],
    outputRange: [1, 1, 0.65, 0],
  });

  const rotate = item.progress.interpolate({
    inputRange: [0, 0.22, 0.45, 0.7, 1],
    outputRange: ['0deg', '-3deg', '4deg', '-2deg', '2deg'],
  });

  const reflectionScale = item.progress.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 0.65, 0.3],
  });

  const reflectionOpacity = item.progress.interpolate({
    inputRange: [0, 0.65, 0.9, 1],
    outputRange: [0.75, 0.42, 0.18, 0],
  });

  return (
    <Animated.View
      pointerEvents="none"
      style={[
        styles.lanternWrap,
        {
          left: item.startX,
          top: item.startY,
          opacity,
          transform: [{ translateX }, { translateY }, { scale }, { rotate }],
        },
      ]}
    >
      <Text style={styles.lanternLabel} numberOfLines={2}>
        {item.label}
      </Text>

      <Animated.Image
        source={item.image}
        resizeMode="contain"
        style={styles.lanternImage}
      />

      <View style={styles.glow} />

      <Animated.View
        style={[
          styles.reflection,
          {
            opacity: reflectionOpacity,
            transform: [{ scaleX: reflectionScale }],
          },
        ]}
      />
    </Animated.View>
  );
}

export default function LanternReleaseScreen() {
  const { t } = useTranslation();

  const idRef = useRef(1);

  const [stats, setStats] = useState<LanternStats>(createDefaultStats());

  const [lanterns, setLanterns] = useState<LanternItem[]>([]);

  const [modalVisible, setModalVisible] = useState(false);

  const [prayerText, setPrayerText] = useState('');

  const [selectedLantern, setSelectedLantern] = useState<LanternKind>('pink');
  const [soundEnabled, setSoundEnabled] = useState(getLanternSoundEnabled());

  const specialNight = useMemo(() => {
    return isSpecialLunarNight();
  }, []);

  useEffect(() => {
    let mounted = true;

    preloadLanternSounds();

    AsyncStorage.getItem(SOUND_STORAGE_KEY).then(value => {
      if (!mounted || value === null) {
        return;
      }

      const enabled = value === 'true';
      setSoundEnabled(enabled);
      setLanternSoundEnabled(enabled);
    });

    scheduleLanternReleaseReminders({
      channelName: t('lanternRelease.reminderChannelName'),
      channelDescription: t('lanternRelease.reminderChannelDescription'),
      firstDayTitle: t('lanternRelease.firstDayReminderTitle'),
      firstDayBody: t('lanternRelease.firstDayReminderBody'),
      fullMoonTitle: t('lanternRelease.fullMoonReminderTitle'),
      fullMoonBody: t('lanternRelease.fullMoonReminderBody'),
    }).catch(error => {
      console.log('Schedule lantern reminders error:', error);
    });

    loadStats().then(value => {
      if (mounted) {
        setStats(value);
      }
    });

    return () => {
      mounted = false;
      releaseLanternSounds();
    };
  }, [t]);

  const prayerPresets = useMemo(() => {
    const value = t('lanternRelease.prayerPresets', {
      returnObjects: true,
    });

    if (Array.isArray(value)) {
      return value.map(item => String(item));
    }

    return DEFAULT_PRAYER_PRESETS;
  }, [t]);

  const countText = useMemo(() => {
    return `${stats.total} ${t('lanternRelease.released')}`;
  }, [stats.total, t]);

  const selectedLanternType = useMemo(() => {
    return (
      LANTERN_TYPES.find(item => item.key === selectedLantern) ||
      LANTERN_TYPES[0]
    );
  }, [selectedLantern]);

  const updateStats = () => {
    const today = getTodayKey();

    setStats(prev => {
      const next: LanternStats = {
        total: prev.total + 1,
        today: prev.lastDate === today ? prev.today + 1 : 1,
        lastDate: today,
      };

      saveStats(next).catch(error => {
        console.log('Save lantern stats error:', error);
      });

      return next;
    });
  };
  const toggleSound = () => {
    setSoundEnabled(prev => {
      const next = !prev;

      setLanternSoundEnabled(next);
      AsyncStorage.setItem(SOUND_STORAGE_KEY, next ? 'true' : 'false').catch(
        error => {
          console.log('Save lantern sound setting error:', error);
        },
      );

      return next;
    });
  };
  const openPrayerModal = () => {
    setPrayerText('');
    setModalVisible(true);
  };

  const releaseLantern = (customPrayer?: string) => {
    const id = idRef.current++;
    const progress = new Animated.Value(0);

    const randomOffsetX = (Math.random() - 0.5) * SCREEN_WIDTH * 0.22;

    const randomDriftX = (Math.random() - 0.5) * SCREEN_WIDTH * 0.5;

    const cleanedPrayer = customPrayer?.trim();

    const fallbackPrayer =
      prayerPresets[id % prayerPresets.length] ||
      t('lanternRelease.defaultPrayer');

    const item: LanternItem = {
      id,
      progress,
      startX: SCREEN_WIDTH * 0.5 - 34 + randomOffsetX,
      startY: SCREEN_HEIGHT * 0.78,
      driftX: randomDriftX,
      label: cleanedPrayer || fallbackPrayer,
      image: selectedLanternType.image,
    };

    setLanterns(prev => [...prev, item]);
    updateStats();

    playLanternWaterSound();

    Animated.timing(progress, {
      toValue: 1,
      duration: specialNight ? 17500 : 15500,
      easing: Easing.inOut(Easing.quad),
      useNativeDriver: true,
    }).start(() => {
      setLanterns(prev => prev.filter(lantern => lantern.id !== id));
    });
  };

  const confirmRelease = () => {
    setModalVisible(false);
    releaseLantern(prayerText);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.captureArea}>
        <ImageBackground
          source={ASSETS.background}
          resizeMode="cover"
          style={styles.background}
        >
          <SpecialNightEffects enabled={specialNight} />

          <View style={styles.topBar}>
            <Pressable style={styles.backButton}>
              <Text style={styles.backText}>‹</Text>
            </Pressable>

            <View style={styles.topRightActions}>
              <Pressable style={styles.soundButton} onPress={toggleSound}>
                <Text style={styles.soundButtonText}>
                  {soundEnabled ? '🔊' : '🔇'}
                </Text>
              </Pressable>

              <View style={styles.counterBadge}>
                <Text style={styles.counterText}>🌸 {countText}</Text>
              </View>
            </View>
          </View>

          <View style={styles.statsPanel}>
            <View style={styles.statItem}>
              <Text style={styles.statLabel}>{t('lanternRelease.today')}</Text>
              <Text style={styles.statValue}>{stats.today}</Text>
            </View>

            <View style={styles.statDivider} />

            <View style={styles.statItem}>
              <Text style={styles.statLabel}>{t('lanternRelease.total')}</Text>
              <Text style={styles.statValue}>{stats.total}</Text>
            </View>
          </View>

          {specialNight ? (
            <View style={styles.specialNotice}>
              <Text style={styles.specialNoticeText}>
                🌕 {t('lanternRelease.specialNightMessage')}
              </Text>
            </View>
          ) : null}

          <MovingWater />

          {lanterns.map(item => (
            <LanternSprite key={item.id} item={item} />
          ))}

          <View style={styles.bottomArea}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.typeSelectorContent}
            >
              {LANTERN_TYPES.map(item => {
                const selected = item.key === selectedLantern;

                return (
                  <Pressable
                    key={item.key}
                    style={[
                      styles.typeChip,
                      selected && styles.typeChipSelected,
                    ]}
                    onPress={() => setSelectedLantern(item.key)}
                  >
                    <Text
                      style={[
                        styles.typeChipText,
                        selected && styles.typeChipTextSelected,
                      ]}
                      numberOfLines={1}
                    >
                      {item.emoji} {t(item.labelKey)}
                    </Text>
                  </Pressable>
                );
              })}
            </ScrollView>

            <View style={styles.actionRow}>
              <Pressable
                style={[styles.compactButton, styles.compactButtonLeft]}
                onPress={() => releaseLantern()}
              >
                <Text style={styles.compactButtonText} numberOfLines={1}>
                  🪷 {t('lanternRelease.releaseButton')}
                </Text>
              </Pressable>

              <Pressable
                style={[styles.compactButton, styles.compactButtonPrimary]}
                onPress={openPrayerModal}
              >
                <Text style={styles.compactButtonPrimaryText} numberOfLines={1}>
                  🌸 {t('lanternRelease.releaseWithPrayer')}
                </Text>
              </Pressable>
            </View>
          </View>
        </ImageBackground>
      </View>

      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>
              {t('lanternRelease.modalTitle')}
            </Text>

            <TextInput
              value={prayerText}
              onChangeText={setPrayerText}
              placeholder={t('lanternRelease.modalPlaceholder')}
              placeholderTextColor="rgba(255,255,255,0.45)"
              multiline
              maxLength={60}
              style={styles.input}
            />

            <View style={styles.presetWrap}>
              {prayerPresets.slice(0, 4).map(item => (
                <Pressable
                  key={item}
                  style={styles.presetChip}
                  onPress={() => setPrayerText(item)}
                >
                  <Text style={styles.presetText}>{item}</Text>
                </Pressable>
              ))}
            </View>

            <View style={styles.modalActions}>
              <Pressable
                style={styles.cancelButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.cancelButtonText}>
                  {t('lanternRelease.cancel')}
                </Text>
              </Pressable>

              <Pressable style={styles.confirmButton} onPress={confirmRelease}>
                <Text style={styles.confirmButtonText}>
                  {t('lanternRelease.release')}
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#081423',
  },

  captureArea: {
    flex: 1,
    backgroundColor: '#081423',
  },

  background: {
    flex: 1,
  },

  specialLayer: {
    ...StyleSheet.absoluteFill,
    zIndex: 1,
  },

  brightMoonGlow: {
    position: 'absolute',
    top: SCREEN_HEIGHT * 0.105,
    left: SCREEN_WIDTH * 0.22,
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: 'rgba(255,245,190,0.16)',
    shadowColor: '#FFF2AA',
    shadowOpacity: 0.9,
    shadowRadius: 34,
    elevation: 2,
  },

  skyLantern: {
    position: 'absolute',
    fontSize: 20,
    textShadowColor: 'rgba(255,160,80,0.85)',
    textShadowOffset: {
      width: 0,
      height: 0,
    },
    textShadowRadius: 10,
  },

  topBar: {
    position: 'absolute',
    top: 18,
    left: 18,
    right: 18,
    zIndex: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  backButton: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: 'rgba(0,0,0,0.32)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.12)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  backText: {
    color: '#FFFFFF',
    fontSize: 44,
    lineHeight: 48,
    fontWeight: '300',
    marginTop: -3,
  },

  counterBadge: {
    backgroundColor: 'rgba(0,0,0,0.42)',
    borderWidth: 1,
    borderColor: 'rgba(255,213,145,0.28)',
    paddingHorizontal: 18,
    paddingVertical: 11,
    borderRadius: 999,
  },

  counterText: {
    color: '#F8DFA5',
    fontSize: 15,
    fontWeight: '900',
  },

  statsPanel: {
    position: 'absolute',
    top: 92,
    right: 18,
    zIndex: 30,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.36)',
    borderWidth: 1,
    borderColor: 'rgba(255,213,145,0.22)',
    borderRadius: 18,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },

  statItem: {
    alignItems: 'center',
    minWidth: 52,
  },

  statLabel: {
    color: 'rgba(255,236,190,0.78)',
    fontSize: 11,
    fontWeight: '700',
  },

  statValue: {
    color: '#FFE6A3',
    marginTop: 2,
    fontSize: 18,
    fontWeight: '900',
  },

  statDivider: {
    width: 1,
    height: 34,
    backgroundColor: 'rgba(255,225,170,0.24)',
    marginHorizontal: 10,
  },

  specialNotice: {
    position: 'absolute',
    top: 178,
    left: 22,
    right: 22,
    zIndex: 26,
    borderRadius: 18,
    paddingHorizontal: 14,
    paddingVertical: 10,
    backgroundColor: 'rgba(0,0,0,0.36)',
    borderWidth: 1,
    borderColor: 'rgba(255,225,160,0.22)',
  },

  specialNoticeText: {
    color: '#FFE9B4',
    fontSize: 12,
    fontWeight: '800',
    textAlign: 'center',
  },

  waterLayer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 90,
    height: SCREEN_HEIGHT * 0.55,
    overflow: 'hidden',
    zIndex: 2,
  },

  waterShine: {
    position: 'absolute',
    left: -80,
    width: SCREEN_WIDTH + 160,
    height: 18,
    borderRadius: 999,
    backgroundColor: 'rgba(255,255,255,0.35)',
  },

  waterShineSmall: {
    position: 'absolute',
    left: -60,
    width: SCREEN_WIDTH + 120,
    height: 10,
    borderRadius: 999,
    backgroundColor: 'rgba(255,220,150,0.25)',
  },

  lanternWrap: {
    position: 'absolute',
    width: 76,
    height: 96,
    alignItems: 'center',
    zIndex: 10,
  },

  lanternLabel: {
    color: '#F9E6B2',
    fontSize: 10,
    fontWeight: '800',
    marginBottom: 2,
    textAlign: 'center',
    textShadowColor: 'rgba(0,0,0,0.75)',
    textShadowOffset: {
      width: 0,
      height: 1,
    },
    textShadowRadius: 3,
  },

  lanternImage: {
    width: 58,
    height: 58,
    zIndex: 2,
  },

  glow: {
    position: 'absolute',
    bottom: 20,
    width: 58,
    height: 26,
    borderRadius: 29,
    backgroundColor: 'rgba(255,180,80,0.2)',
    shadowColor: '#FFB14B',
    shadowOpacity: 0.9,
    shadowRadius: 20,
    elevation: 8,
  },

  reflection: {
    position: 'absolute',
    bottom: 6,
    width: 70,
    height: 16,
    borderRadius: 35,
    backgroundColor: 'rgba(255,170,60,0.35)',
    shadowColor: '#FFB14B',
    shadowOpacity: 0.7,
    shadowRadius: 16,
  },

  bottomArea: {
    position: 'absolute',
    left: 12,
    right: 12,
    bottom: 10,
    zIndex: 40,
  },

  typeSelectorContent: {
    paddingHorizontal: 2,
    paddingBottom: 8,
  },

  typeChip: {
    height: 34,
    borderRadius: 17,
    paddingHorizontal: 12,
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.42)',
    borderWidth: 1,
    borderColor: 'rgba(255,213,145,0.22)',
  },

  typeChipSelected: {
    backgroundColor: 'rgba(223,164,54,0.94)',
    borderColor: 'rgba(255,255,255,0.24)',
  },

  typeChipText: {
    color: '#F8DFA5',
    fontSize: 12,
    fontWeight: '800',
  },

  typeChipTextSelected: {
    color: '#FFFFFF',
  },

  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  compactButton: {
    flex: 1,
    height: 42,
    borderRadius: 21,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },

  compactButtonLeft: {
    marginRight: 6,
    backgroundColor: 'rgba(0,0,0,0.48)',
    borderColor: 'rgba(255,213,145,0.26)',
  },

  compactButtonPrimary: {
    marginLeft: 6,
    backgroundColor: '#DFA436',
    borderColor: 'rgba(255,255,255,0.18)',
    shadowColor: '#000',
    shadowOpacity: 0.18,
    shadowRadius: 6,
    elevation: 4,
  },

  compactButtonText: {
    color: '#F8DFA5',
    fontSize: 12,
    fontWeight: '900',
    textAlign: 'center',
  },

  compactButtonPrimaryText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '900',
    textAlign: 'center',
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
    backgroundColor: 'rgba(13,26,45,0.96)',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(255,213,145,0.28)',
    padding: 18,
  },

  modalTitle: {
    color: '#F8DFA5',
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'center',
  },

  input: {
    minHeight: 92,
    marginTop: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,213,145,0.28)',
    backgroundColor: 'rgba(255,255,255,0.08)',
    paddingHorizontal: 14,
    paddingVertical: 12,
    color: '#FFFFFF',
    fontSize: 15,
    textAlignVertical: 'top',
  },

  presetWrap: {
    marginTop: 14,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  presetChip: {
    backgroundColor: 'rgba(255,213,145,0.14)',
    borderWidth: 1,
    borderColor: 'rgba(255,213,145,0.22)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    margin: 4,
  },

  presetText: {
    color: '#F8DFA5',
    fontSize: 13,
    fontWeight: '800',
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
    backgroundColor: '#DFA436',
    alignItems: 'center',
    justifyContent: 'center',
  },

  confirmButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '900',
  },
  topRightActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  soundButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: 8,
    backgroundColor: 'rgba(0,0,0,0.42)',
    borderWidth: 1,
    borderColor: 'rgba(255,213,145,0.24)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  soundButtonText: {
    fontSize: 18,
  },
});
