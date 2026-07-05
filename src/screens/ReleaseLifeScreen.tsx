import React, { useEffect, useMemo, useRef, useState } from 'react';

import {
  Alert,
  Animated,
  Dimensions,
  Easing,
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  getReleaseLifeSoundEnabled,
  playBirdReleaseSound,
  playFishReleaseSound,
  preloadReleaseLifeSounds,
  releaseReleaseLifeSounds,
  setReleaseLifeSoundEnabled,
} from '../services/releaseLifeSound';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const STORAGE_KEY = 'IPAGODA_RELEASE_LIFE_STATS';

const RELEASE_ASSETS = {
  sceneBg: require('../assets/images/release/release_scene_bg.png'),
  fish: require('../assets/images/release/fish.png'),
  bird: require('../assets/images/release/bird.png'),
  fishBowl: require('../assets/images/release/fish_bowl.png'),
  birdCage: require('../assets/images/release/bird_cage.png'),
};

const isSmallScreen = SCREEN_HEIGHT < 760;

const objectSize = Math.min(SCREEN_WIDTH * 0.38, isSmallScreen ? 132 : 162);

const previewIconSize = isSmallScreen ? 21 : 24;

type ReleaseStats = {
  totalFish: number;
  totalBirds: number;
  todayFish: number;
  todayBirds: number;
  lastDate: string;
};

type FishItem = {
  id: number;
  x: number;
  y: number;
  progress: Animated.Value;
};

type BirdItem = {
  id: number;
  x: number;
  y: number;
  progress: Animated.Value;
};

function getTodayKey() {
  return new Date().toISOString().slice(0, 10);
}

function createDefaultStats(): ReleaseStats {
  return {
    totalFish: 0,
    totalBirds: 0,
    todayFish: 0,
    todayBirds: 0,
    lastDate: getTodayKey(),
  };
}

async function loadStats(): Promise<ReleaseStats> {
  const today = getTodayKey();

  try {
    const raw = await AsyncStorage.getItem(STORAGE_KEY);

    if (!raw) {
      return createDefaultStats();
    }

    const parsed = JSON.parse(raw) as ReleaseStats;

    if (parsed.lastDate !== today) {
      return {
        ...parsed,
        todayFish: 0,
        todayBirds: 0,
        lastDate: today,
      };
    }

    return parsed;
  } catch {
    return createDefaultStats();
  }
}

async function saveStats(stats: ReleaseStats) {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
}

function FishSprite({item}: {item: FishItem}) {
  const translateX = item.progress.interpolate({
    inputRange: [0, 0.16, 0.32, 0.5, 0.66, 0.82, 1],
    outputRange: [0, 40, 92, 132, 95, 150, 190],
  });

  const translateY = item.progress.interpolate({
    inputRange: [0, 0.22, 0.42, 0.58, 0.75, 1],
    outputRange: [0, -70, -18, 10, 22, 48],
  });

  const rotate = item.progress.interpolate({
    inputRange: [0, 0.16, 0.32, 0.5, 0.66, 0.82, 1],
    outputRange: [
      '-18deg',
      '16deg',
      '-12deg',
      '18deg',
      '-16deg',
      '10deg',
      '0deg',
    ],
  });

  const scale = item.progress.interpolate({
    inputRange: [0, 0.25, 0.5, 0.75, 1],
    outputRange: [1, 1.18, 1.02, 0.72, 0.35],
  });

  const scaleX = item.progress.interpolate({
    inputRange: [0, 0.12, 0.24, 0.36, 0.48, 0.6, 0.72, 0.84, 1],
    outputRange: [1, 0.72, 1.18, 0.78, 1.14, 0.82, 1.1, 0.9, 0.7],
  });

  const opacity = item.progress.interpolate({
    inputRange: [0, 0.72, 0.9, 1],
    outputRange: [1, 1, 0.55, 0],
  });

  return (
    <Animated.Image
      source={RELEASE_ASSETS.fish}
      resizeMode="contain"
      style={[
        styles.fishReleased,
        {
          left: item.x,
          top: item.y,
          opacity,
          transform: [
            {translateX},
            {translateY},
            {rotate},
            {scale},
            {scaleX},
          ],
        },
      ]}
    />
  );
}

function BirdSprite({item}: {item: BirdItem}) {
  const translateX = item.progress.interpolate({
    inputRange: [0, 0.12, 0.25, 0.38, 0.52, 0.68, 0.84, 1],
    outputRange: [0, -90, 70, -120, 95, -55, 135, 210],
  });

  const translateY = item.progress.interpolate({
    inputRange: [0, 0.15, 0.32, 0.5, 0.68, 0.84, 1],
    outputRange: [0, -65, -145, -210, -285, -360, -430],
  });

  const rotate = item.progress.interpolate({
    inputRange: [0, 0.15, 0.32, 0.5, 0.68, 0.84, 1],
    outputRange: [
      '0deg',
      '-22deg',
      '18deg',
      '-18deg',
      '16deg',
      '-8deg',
      '6deg',
    ],
  });

  const scale = item.progress.interpolate({
    inputRange: [0, 0.25, 0.5, 0.75, 1],
    outputRange: [1, 1.12, 1.02, 0.9, 0.72],
  });

  const scaleY = item.progress.interpolate({
    inputRange: [
      0,
      0.08,
      0.16,
      0.24,
      0.32,
      0.4,
      0.48,
      0.56,
      0.64,
      0.72,
      0.8,
      0.88,
      1,
    ],
    outputRange: [
      1,
      0.72,
      1.18,
      0.76,
      1.16,
      0.78,
      1.12,
      0.82,
      1.08,
      0.86,
      1.04,
      0.9,
      0.78,
    ],
  });

  const opacity = item.progress.interpolate({
    inputRange: [0, 0.9, 1],
    outputRange: [1, 1, 0],
  });

  return (
    <Animated.Image
      source={RELEASE_ASSETS.bird}
      resizeMode="contain"
      style={[
        styles.birdReleased,
        {
          left: item.x,
          top: item.y,
          opacity,
          transform: [
            {translateX},
            {translateY},
            {rotate},
            {scale},
            {scaleY},
          ],
        },
      ]}
    />
  );
}
function StatBox({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <View style={styles.statBox}>
      <Text style={styles.statTitle}>{title}</Text>
      <View style={styles.statBody}>{children}</View>
    </View>
  );
}

export default function ReleaseLifeScreen() {
  const idRef = useRef(1);

  const [fishCount, setFishCount] = useState(12);
  const [birdCount, setBirdCount] = useState(8);

  const [fishItems, setFishItems] = useState<FishItem[]>([]);
  const [birdItems, setBirdItems] = useState<BirdItem[]>([]);

  const [soundEnabled, setSoundEnabled] = useState(
    getReleaseLifeSoundEnabled(),
  );

  const [stats, setStats] = useState<ReleaseStats>(createDefaultStats());

  useEffect(() => {
    let mounted = true;

    preloadReleaseLifeSounds();

    loadStats().then(value => {
      if (mounted) {
        setStats(value);
      }
    });

    return () => {
      mounted = false;
      releaseReleaseLifeSounds();
    };
  }, []);

  const fishPreview = useMemo(
    () => Array.from({ length: Math.min(fishCount, 8) }),
    [fishCount],
  );

  const birdPreview = useMemo(
    () => Array.from({ length: Math.min(birdCount, 8) }),
    [birdCount],
  );

  const totalReleased = stats.totalFish + stats.totalBirds;

  const updateStats = async (type: 'fish' | 'bird') => {
    const today = getTodayKey();

    const next: ReleaseStats = {
      ...stats,
      lastDate: today,
      todayFish: type === 'fish' ? stats.todayFish + 1 : stats.todayFish,
      todayBirds: type === 'bird' ? stats.todayBirds + 1 : stats.todayBirds,
      totalFish: type === 'fish' ? stats.totalFish + 1 : stats.totalFish,
      totalBirds: type === 'bird' ? stats.totalBirds + 1 : stats.totalBirds,
    };

    setStats(next);
    await saveStats(next);
  };

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    setReleaseLifeSoundEnabled(next);
  };

  const releaseFish = () => {
    if (fishCount <= 0) {
      Alert.alert('Đã hết cá', 'Bạn có thể bấm Đặt lại hôm nay để tiếp tục.');
      return;
    }

    const id = idRef.current++;
    const progress = new Animated.Value(0);

const item: FishItem = {
  id,
  x: SCREEN_WIDTH * 0.21,
  y: SCREEN_HEIGHT * 0.52,
  progress,
};

    setFishItems(prev => [...prev, item]);
    setFishCount(prev => Math.max(0, prev - 1));

    void updateStats('fish');

    setTimeout(() => {
      playFishReleaseSound();
    }, 700);

Animated.timing(progress, {
  toValue: 1,
  duration: 2600,
  easing: Easing.inOut(Easing.quad),
  useNativeDriver: true,
}).start(() => {
      setFishItems(prev => prev.filter(fish => fish.id !== id));
    });
  };

  const releaseBird = () => {
    if (birdCount <= 0) {
      Alert.alert('Đã hết chim', 'Bạn có thể bấm Đặt lại hôm nay để tiếp tục.');
      return;
    }

    const id = idRef.current++;
    const progress = new Animated.Value(0);


const item: BirdItem = {
  id,
  x: SCREEN_WIDTH * (0.48 + Math.random() * 0.28),
  y: SCREEN_HEIGHT * (0.48 + Math.random() * 0.08),
  progress,
};

    setBirdItems(prev => [...prev, item]);
    setBirdCount(prev => Math.max(0, prev - 1));

    void updateStats('bird');
    playBirdReleaseSound();

Animated.timing(progress, {
  toValue: 1,
  duration: 5200,
  easing: Easing.inOut(Easing.sin),
  useNativeDriver: true,
}).start(() => {
      setBirdItems(prev => prev.filter(bird => bird.id !== id));
    });
  };

  const resetToday = () => {
    Alert.alert(
      'Đặt lại hôm nay',
      'Bạn muốn thêm lại cá và chim để tiếp tục phóng sinh?',
      [
        {
          text: 'Hủy',
          style: 'cancel',
        },
        {
          text: 'Đặt lại',
          onPress: () => {
            setFishCount(12);
            setBirdCount(8);
            setFishItems([]);
            setBirdItems([]);
          },
        },
      ],
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={RELEASE_ASSETS.sceneBg}
        resizeMode="cover"
        style={styles.background}
        imageStyle={styles.backgroundImage}
      >
        <View style={styles.overlay}>
          <View style={styles.header}>
            <Text style={styles.title}>
              Phóng sinh
              <Text style={styles.leafText}> ❧</Text>
            </Text>

            <Text style={styles.subtitle}>
              Nuôi dưỡng tâm từ bi với muôn loài
            </Text>
          </View>

          <View style={styles.statsRow}>
            <StatBox title="Hôm nay">
              <View style={styles.todayRow}>
                <Image
                  source={RELEASE_ASSETS.fish}
                  resizeMode="contain"
                  style={styles.statIcon}
                />
                <Text style={styles.todayFishText}>{stats.todayFish}</Text>

                <View style={styles.statDivider} />

                <Image
                  source={RELEASE_ASSETS.bird}
                  resizeMode="contain"
                  style={styles.statIcon}
                />
                <Text style={styles.todayBirdText}>{stats.todayBirds}</Text>
              </View>
            </StatBox>

            <StatBox title="Tổng phóng sinh">
              <View style={styles.totalRow}>
                <Text style={styles.totalLotus}>🪷</Text>
                <Text style={styles.totalText}>
                  {totalReleased.toLocaleString('vi-VN')}
                </Text>
              </View>
            </StatBox>
          </View>

          <View style={styles.prayerCard}>
            <View style={styles.prayerIconWrap}>
              <Text style={styles.prayerIcon}>🪷</Text>
            </View>

            <View style={styles.prayerContent}>
              <Text style={styles.prayerTitle}>Lời nguyện</Text>
              <Text style={styles.prayerText}>
                Nguyện cho muôn loài được an lành, xa lìa khổ nạn, gặp duyên
                lành và sống trong bình an.
              </Text>
            </View>
          </View>

          <View style={styles.mainRow}>
            <View style={styles.itemColumn}>
              <Pressable
                onPress={releaseFish}
                style={({ pressed }) => [
                  styles.touchArea,
                  pressed && styles.objectPressed,
                ]}
              >
                <Image
                  source={RELEASE_ASSETS.fishBowl}
                  resizeMode="contain"
                  style={styles.mainObjectImage}
                />
              </Pressable>

              <View style={styles.previewPanel}>
                {fishPreview.map((_, index) => (
                  <Image
                    key={`fish-${index}`}
                    source={RELEASE_ASSETS.fish}
                    resizeMode="contain"
                    style={styles.previewImage}
                  />
                ))}
              </View>

              <View style={styles.remainingBadge}>
                <Text style={styles.remainingText}>Còn lại: {fishCount}</Text>
              </View>
            </View>

            <View style={styles.itemColumn}>
              <Pressable
                onPress={releaseBird}
                style={({ pressed }) => [
                  styles.touchArea,
                  pressed && styles.objectPressed,
                ]}
              >
                <Image
                  source={RELEASE_ASSETS.birdCage}
                  resizeMode="contain"
                  style={styles.mainObjectImage}
                />
              </Pressable>

              <View style={styles.previewPanel}>
                {birdPreview.map((_, index) => (
                  <Image
                    key={`bird-${index}`}
                    source={RELEASE_ASSETS.bird}
                    resizeMode="contain"
                    style={styles.previewImage}
                  />
                ))}
              </View>

              <View style={styles.remainingBadge}>
                <Text style={styles.remainingText}>Còn lại: {birdCount}</Text>
              </View>
            </View>
          </View>

          <View style={styles.bottomButtons}>
            <Pressable
              style={[
                styles.soundButton,
                !soundEnabled && styles.soundButtonOff,
              ]}
              onPress={toggleSound}
            >
              <Text style={styles.bottomButtonIcon}>🔊</Text>
              <Text style={styles.bottomButtonText}>
                {soundEnabled ? 'Âm thanh: Bật' : 'Âm thanh: Tắt'}
              </Text>
            </Pressable>

            <Pressable style={styles.resetButton} onPress={resetToday}>
              <Text style={styles.bottomButtonIcon}>↻</Text>
              <Text style={styles.bottomButtonText}>Đặt lại hôm nay</Text>
            </Pressable>
          </View>

          {fishItems.map(item => (
            <FishSprite key={item.id} item={item} />
          ))}

          {birdItems.map(item => (
            <BirdSprite key={item.id} item={item} />
          ))}
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D7EEF7',
  },

  background: {
    flex: 1,
  },

  backgroundImage: {
    width: '100%',
    height: '100%',
  },

  overlay: {
    flex: 1,
    paddingHorizontal: 18,
    paddingTop: isSmallScreen ? 4 : 10,
    paddingBottom: 16,
  },

  header: {
    alignItems: 'center',
    marginTop: isSmallScreen ? 0 : 4,
  },

  title: {
    textAlign: 'center',
    fontSize: isSmallScreen ? 31 : 37,
    fontWeight: '900',
    color: '#0D6B49',
    textShadowColor: 'rgba(255,255,255,0.98)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 10,
  },

  leafText: {
    fontSize: isSmallScreen ? 22 : 26,
    color: '#3C8D38',
  },

  subtitle: {
    textAlign: 'center',
    fontSize: isSmallScreen ? 11.5 : 13.5,
    color: '#2F5737',
    fontWeight: '800',
    marginTop: 0,
    textShadowColor: 'rgba(255,255,255,0.9)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4,
  },

  statsRow: {
    marginTop: isSmallScreen ? 10 : 14,
    paddingHorizontal: SCREEN_WIDTH * 0.11,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  statBox: {
    width: SCREEN_WIDTH * 0.32,
    backgroundColor: 'rgba(249,243,230,0.94)',
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: '#D9C08A',
    paddingVertical: isSmallScreen ? 7 : 9,
    paddingHorizontal: 10,
    shadowColor: '#765B2A',
    shadowOpacity: 0.12,
    shadowRadius: 7,
    elevation: 3,
  },

  statTitle: {
    textAlign: 'center',
    fontSize: isSmallScreen ? 11 : 12,
    fontWeight: '900',
    color: '#34502D',
  },

  statBody: {
    marginTop: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },

  todayRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  totalRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  statIcon: {
    width: isSmallScreen ? 21 : 24,
    height: isSmallScreen ? 21 : 24,
    marginRight: 4,
  },

  statDivider: {
    width: 1,
    height: 22,
    backgroundColor: '#C9B98D',
    marginHorizontal: 8,
  },

  todayFishText: {
    fontSize: isSmallScreen ? 18 : 21,
    fontWeight: '900',
    color: '#156BC3',
  },

  todayBirdText: {
    fontSize: isSmallScreen ? 18 : 21,
    fontWeight: '900',
    color: '#C47A17',
  },

  totalLotus: {
    fontSize: isSmallScreen ? 18 : 21,
    marginRight: 6,
  },

  totalText: {
    fontSize: isSmallScreen ? 20 : 24,
    fontWeight: '900',
    color: '#3B7D1F',
  },

  prayerCard: {
    marginTop: isSmallScreen ? 12 : 16,
    marginHorizontal: SCREEN_WIDTH * 0.04,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(247,244,228,0.93)',
    borderRadius: 18,
    borderWidth: 1.3,
    borderColor: '#B9AE78',
    paddingHorizontal: 12,
    paddingVertical: isSmallScreen ? 8 : 10,
    shadowColor: '#655125',
    shadowOpacity: 0.12,
    shadowRadius: 7,
    elevation: 3,
  },

  prayerIconWrap: {
    width: isSmallScreen ? 42 : 48,
    height: isSmallScreen ? 42 : 48,
    borderRadius: isSmallScreen ? 21 : 24,
    backgroundColor: '#3E8154',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 11,
    borderWidth: 2,
    borderColor: '#D8D49D',
  },

  prayerIcon: {
    fontSize: isSmallScreen ? 20 : 23,
    color: '#FFFFFF',
  },

  prayerContent: {
    flex: 1,
  },

  prayerTitle: {
    fontSize: isSmallScreen ? 14 : 16,
    fontWeight: '900',
    color: '#206B44',
    marginBottom: 2,
  },

  prayerText: {
    fontSize: isSmallScreen ? 10.5 : 11.5,
    lineHeight: isSmallScreen ? 15 : 17,
    color: '#4E4F38',
    fontWeight: '700',
  },

  mainRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: isSmallScreen ? 26 : 34,
    paddingHorizontal: 4,
  },

  itemColumn: {
    width: '47.5%',
    alignItems: 'center',
  },

  touchArea: {
    width: '100%',
    alignItems: 'center',
  },

  objectPressed: {
    transform: [{ scale: 0.97 }],
    opacity: 0.9,
  },

  mainObjectImage: {
    width: objectSize,
    height: objectSize,
  },

  previewPanel: {
    marginTop: isSmallScreen ? 12 : 16,
    minHeight: isSmallScreen ? 38 : 44,
    width: '100%',
    backgroundColor: 'rgba(255,247,222,0.95)',
    borderRadius: 12,
    borderWidth: 1.2,
    borderColor: '#D6C08D',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingHorizontal: 6,
    paddingVertical: 6,
  },

  previewImage: {
    width: previewIconSize,
    height: previewIconSize,
    marginHorizontal: 3,
    marginVertical: 2,
  },

  remainingBadge: {
    marginTop: -2,
    minWidth: 118,
    backgroundColor: 'rgba(247,243,222,0.96)',
    borderRadius: 12,
    borderWidth: 1.2,
    borderColor: '#CBB983',
    paddingVertical: 5,
    paddingHorizontal: 14,
    alignItems: 'center',
  },

  remainingText: {
    fontSize: isSmallScreen ? 11 : 12,
    fontWeight: '900',
    color: '#5D652F',
  },

  bottomButtons: {
    marginTop: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  soundButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D59712',
    borderRadius: 18,
    borderWidth: 1.4,
    borderColor: '#A56F05',
    paddingHorizontal: isSmallScreen ? 10 : 14,
    paddingVertical: isSmallScreen ? 8 : 10,
    minWidth: SCREEN_WIDTH * 0.38,
  },

  soundButtonOff: {
    backgroundColor: '#9A9A9A',
    borderColor: '#727272',
  },

  resetButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2F7E33',
    borderRadius: 18,
    borderWidth: 1.4,
    borderColor: '#1D5E27',
    paddingHorizontal: isSmallScreen ? 10 : 14,
    paddingVertical: isSmallScreen ? 8 : 10,
    minWidth: SCREEN_WIDTH * 0.42,
    justifyContent: 'center',
  },

  bottomButtonIcon: {
    fontSize: isSmallScreen ? 15 : 18,
    color: '#FFF',
    marginRight: 7,
  },

  bottomButtonText: {
    color: '#FFFFFF',
    fontSize: isSmallScreen ? 11.5 : 13,
    fontWeight: '900',
  },
fishReleased: {
  position: 'absolute',
  width: 52,
  height: 42,
  zIndex: 50,
},

birdReleased: {
  position: 'absolute',
  width: 58,
  height: 52,
  zIndex: 50,
},
});
