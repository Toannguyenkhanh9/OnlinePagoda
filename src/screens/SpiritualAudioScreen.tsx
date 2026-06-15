import React, {useMemo, useState} from 'react';
import {
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import {useTranslation} from 'react-i18next';
import Video from 'react-native-video';

import {colors} from '../theme/colors';

type AudioCategory = 'sutra' | 'meditation' | 'nature';

type AudioTrack = {
  id: string;
  category: AudioCategory;
  titleKey: string;
  descriptionKey: string;
  durationLabel: string;
  icon: string;
  source: number | {uri: string};
};

const TRACKS: AudioTrack[] = [
  {
    id: 'great-compassion-mantra',
    category: 'sutra',
    titleKey: 'spiritualAudio.tracks.greatCompassion.title',
    descriptionKey: 'spiritualAudio.tracks.greatCompassion.description',
    durationLabel: '21:00',
    icon: '📿',
    source: require('../assets/audio/great_compassion_mantra.mp3'),
  },
  {
    id: 'heart-sutra',
    category: 'sutra',
    titleKey: 'spiritualAudio.tracks.heartSutra.title',
    descriptionKey: 'spiritualAudio.tracks.heartSutra.description',
    durationLabel: '12:30',
    icon: '🪷',
    source: require('../assets/audio/heart_sutra.mp3'),
  },
  {
    id: 'buddha-name',
    category: 'sutra',
    titleKey: 'spiritualAudio.tracks.buddhaName.title',
    descriptionKey: 'spiritualAudio.tracks.buddhaName.description',
    durationLabel: '30:00',
    icon: '🙏',
    source: require('../assets/audio/buddha_name.mp3'),
  },
  {
    id: 'breathing-meditation',
    category: 'meditation',
    titleKey: 'spiritualAudio.tracks.breathing.title',
    descriptionKey: 'spiritualAudio.tracks.breathing.description',
    durationLabel: '10:00',
    icon: '🧘',
    source: require('../assets/audio/breathing_meditation.mp3'),
  },
  {
    id: 'deep-relaxation',
    category: 'meditation',
    titleKey: 'spiritualAudio.tracks.deepRelaxation.title',
    descriptionKey: 'spiritualAudio.tracks.deepRelaxation.description',
    durationLabel: '15:00',
    icon: '🌙',
    source: require('../assets/audio/deep_relaxation.mp3'),
  },
  {
    id: 'singing-bowl',
    category: 'meditation',
    titleKey: 'spiritualAudio.tracks.singingBowl.title',
    descriptionKey: 'spiritualAudio.tracks.singingBowl.description',
    durationLabel: '18:00',
    icon: '🥣',
    source: require('../assets/audio/singing_bowl.mp3'),
  },
  {
    id: 'temple-rain',
    category: 'nature',
    titleKey: 'spiritualAudio.tracks.templeRain.title',
    descriptionKey: 'spiritualAudio.tracks.templeRain.description',
    durationLabel: '20:00',
    icon: '🌧️',
    source: require('../assets/audio/temple_rain.mp3'),
  },
  {
    id: 'forest-birds',
    category: 'nature',
    titleKey: 'spiritualAudio.tracks.forestBirds.title',
    descriptionKey: 'spiritualAudio.tracks.forestBirds.description',
    durationLabel: '25:00',
    icon: '🌿',
    source: require('../assets/audio/forest_birds.mp3'),
  },
  {
    id: 'flowing-stream',
    category: 'nature',
    titleKey: 'spiritualAudio.tracks.flowingStream.title',
    descriptionKey: 'spiritualAudio.tracks.flowingStream.description',
    durationLabel: '22:00',
    icon: '💧',
    source: require('../assets/audio/flowing_stream.mp3'),
  },
];

const CATEGORIES: Array<{
  id: AudioCategory;
  icon: string;
  titleKey: string;
}> = [
  {
    id: 'sutra',
    icon: '📜',
    titleKey: 'spiritualAudio.categories.sutra',
  },
  {
    id: 'meditation',
    icon: '🧘',
    titleKey: 'spiritualAudio.categories.meditation',
  },
  {
    id: 'nature',
    icon: '🌿',
    titleKey: 'spiritualAudio.categories.nature',
  },
];

function formatTime(value: number): string {
  if (!Number.isFinite(value) || value < 0) {
    return '00:00';
  }

  const totalSeconds = Math.floor(value);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

export default function SpiritualAudioScreen() {
  const {t} = useTranslation();

  const [selectedCategory, setSelectedCategory] =
    useState<AudioCategory>('sutra');
  const [searchText, setSearchText] = useState('');
  const [currentTrack, setCurrentTrack] = useState<AudioTrack | null>(null);
  const [isPaused, setIsPaused] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const filteredTracks = useMemo(() => {
    const keyword = searchText.trim().toLocaleLowerCase();

    return TRACKS.filter(track => {
      if (track.category !== selectedCategory) {
        return false;
      }

      if (!keyword) {
        return true;
      }

      return (
        t(track.titleKey).toLocaleLowerCase().includes(keyword) ||
        t(track.descriptionKey).toLocaleLowerCase().includes(keyword)
      );
    });
  }, [searchText, selectedCategory, t]);

  const progress = duration > 0 ? Math.min(1, currentTime / duration) : 0;

  const playTrack = (track: AudioTrack) => {
    if (currentTrack?.id === track.id) {
      setIsPaused(value => !value);
      return;
    }

    setCurrentTrack(track);
    setCurrentTime(0);
    setDuration(0);
    setIsLoading(true);
    setIsPaused(false);
  };

  const stopPlayback = () => {
    setCurrentTrack(null);
    setIsPaused(true);
    setCurrentTime(0);
    setDuration(0);
    setIsLoading(false);
  };

  const findCurrentTrackIndex = () => {
    if (!currentTrack) {
      return -1;
    }

    return TRACKS.findIndex(track => track.id === currentTrack.id);
  };

  const playPrevious = () => {
    const index = findCurrentTrackIndex();

    if (index < 0) {
      return;
    }

    const previousIndex = index === 0 ? TRACKS.length - 1 : index - 1;
    playTrack(TRACKS[previousIndex]);
  };

  const playNext = () => {
    const index = findCurrentTrackIndex();

    if (index < 0) {
      return;
    }

    const nextIndex = index === TRACKS.length - 1 ? 0 : index + 1;
    playTrack(TRACKS[nextIndex]);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <ImageBackground
        source={require('../assets/images/main_hall_background.png')}
        resizeMode="cover"
        style={styles.background}>
        <View style={styles.overlay}>
          <ScrollView
            contentContainerStyle={styles.content}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}>
            <View style={styles.headerCard}>
              <Text style={styles.headerIcon}>🎧</Text>
              <Text style={styles.title}>{t('spiritualAudio.title')}</Text>
              <Text style={styles.subtitle}>{t('spiritualAudio.subtitle')}</Text>
            </View>

            <View style={styles.searchWrap}>
              <Text style={styles.searchIcon}>⌕</Text>
              <TextInput
                value={searchText}
                onChangeText={setSearchText}
                placeholder={t('spiritualAudio.searchPlaceholder')}
                placeholderTextColor="#A48D76"
                style={styles.searchInput}
                returnKeyType="search"
              />

              {!!searchText && (
                <Pressable hitSlop={10} onPress={() => setSearchText('')}>
                  <Text style={styles.clearSearch}>×</Text>
                </Pressable>
              )}
            </View>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.categoryRow}>
              {CATEGORIES.map(category => {
                const selected = selectedCategory === category.id;

                return (
                  <Pressable
                    key={category.id}
                    style={({pressed}) => [
                      styles.categoryButton,
                      selected && styles.categoryButtonSelected,
                      pressed && styles.buttonPressed,
                    ]}
                    onPress={() => setSelectedCategory(category.id)}>
                    <Text style={styles.categoryIcon}>{category.icon}</Text>
                    <Text
                      style={[
                        styles.categoryText,
                        selected && styles.categoryTextSelected,
                      ]}>
                      {t(category.titleKey)}
                    </Text>
                  </Pressable>
                );
              })}
            </ScrollView>

            <Text style={styles.sectionTitle}>
              {t(
                CATEGORIES.find(item => item.id === selectedCategory)?.titleKey ??
                  'spiritualAudio.categories.sutra',
              )}
            </Text>

            {filteredTracks.length === 0 ? (
              <View style={styles.emptyCard}>
                <Text style={styles.emptyIcon}>🔎</Text>
                <Text style={styles.emptyText}>{t('spiritualAudio.empty')}</Text>
              </View>
            ) : (
              filteredTracks.map(track => {
                const active = currentTrack?.id === track.id;
                const playing = active && !isPaused;

                return (
                  <Pressable
                    key={track.id}
                    style={({pressed}) => [
                      styles.trackCard,
                      active && styles.trackCardActive,
                      pressed && styles.buttonPressed,
                    ]}
                    onPress={() => playTrack(track)}>
                    <View
                      style={[
                        styles.trackArtwork,
                        active && styles.trackArtworkActive,
                      ]}>
                      <Text style={styles.trackIcon}>{track.icon}</Text>
                    </View>

                    <View style={styles.trackInfo}>
                      <Text
                        style={[
                          styles.trackTitle,
                          active && styles.trackTitleActive,
                        ]}>
                        {t(track.titleKey)}
                      </Text>

                      <Text style={styles.trackDescription} numberOfLines={2}>
                        {t(track.descriptionKey)}
                      </Text>

                      <View style={styles.trackMetaRow}>
                        <Text style={styles.durationText}>
                          {track.durationLabel}
                        </Text>

                        {active && (
                          <Text style={styles.playingText}>
                            {playing
                              ? t('spiritualAudio.playing')
                              : t('spiritualAudio.paused')}
                          </Text>
                        )}
                      </View>
                    </View>

                    <View
                      style={[
                        styles.cardPlayButton,
                        active && styles.cardPlayButtonActive,
                      ]}>
                      <Text
                        style={[
                          styles.cardPlayIcon,
                          active && styles.cardPlayIconActive,
                        ]}>
                        {playing ? 'Ⅱ' : '▶'}
                      </Text>
                    </View>
                  </Pressable>
                );
              })
            )}
          </ScrollView>

          {!!currentTrack && (
            <View style={styles.playerCard}>
              <View style={styles.playerTopRow}>
                <View style={styles.playerArtwork}>
                  <Text style={styles.playerArtworkIcon}>{currentTrack.icon}</Text>
                </View>

                <View style={styles.playerInfo}>
                  <Text style={styles.playerTitle} numberOfLines={1}>
                    {t(currentTrack.titleKey)}
                  </Text>
                  <Text style={styles.playerSubtitle} numberOfLines={1}>
                    {t(currentTrack.descriptionKey)}
                  </Text>
                </View>

                <Pressable hitSlop={10} onPress={stopPlayback}>
                  <Text style={styles.closePlayer}>×</Text>
                </Pressable>
              </View>

              <View style={styles.progressBackground}>
                <View
                  style={[
                    styles.progressFill,
                    {width: `${progress * 100}%`},
                  ]}
                />
              </View>

              <View style={styles.timeRow}>
                <Text style={styles.timeText}>{formatTime(currentTime)}</Text>
                <Text style={styles.timeText}>{formatTime(duration)}</Text>
              </View>

              <View style={styles.controlsRow}>
                <Pressable
                  style={({pressed}) => [
                    styles.controlButton,
                    pressed && styles.buttonPressed,
                  ]}
                  onPress={playPrevious}>
                  <Text style={styles.controlIcon}>⏮</Text>
                </Pressable>

                <Pressable
                  style={({pressed}) => [
                    styles.mainControlButton,
                    pressed && styles.buttonPressed,
                  ]}
                  onPress={() => setIsPaused(value => !value)}>
                  <Text style={styles.mainControlIcon}>
                    {isLoading ? '…' : isPaused ? '▶' : 'Ⅱ'}
                  </Text>
                </Pressable>

                <Pressable
                  style={({pressed}) => [
                    styles.controlButton,
                    pressed && styles.buttonPressed,
                  ]}
                  onPress={playNext}>
                  <Text style={styles.controlIcon}>⏭</Text>
                </Pressable>
              </View>
            </View>
          )}

          {!!currentTrack && (
            <Video
              key={currentTrack.id}
              source={currentTrack.source}
              paused={isPaused}
              playInBackground
              playWhenInactive
              ignoreSilentSwitch="ignore"
              controls={false}

              /*
               * Phát lặp lại chính bài đang nghe.
               * Khi bài kết thúc, react-native-video tự quay về đầu bài
               * và tiếp tục phát cho đến khi người dùng tạm dừng,
               * chọn bài khác hoặc đóng trình phát.
               */
              repeat

              onLoadStart={() => setIsLoading(true)}
              onLoad={event => {
                setDuration(event.duration ?? 0);
                setIsLoading(false);
              }}
              onProgress={event => setCurrentTime(event.currentTime ?? 0)}
              onEnd={() => {
                // Đồng bộ lại thanh tiến trình khi bài bắt đầu vòng mới.
                setCurrentTime(0);
              }}
              onError={error => {
                console.warn('Cannot play spiritual audio:', error);
                setIsPaused(true);
                setIsLoading(false);
              }}
              style={styles.hiddenVideo}
            />
          )}
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const GOLD = '#D8AA45';
const GOLD_LIGHT = '#FBE2A0';
const BROWN = '#3F2518';
const CARD = 'rgba(255, 249, 239, 0.96)';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(24, 11, 5, 0.42)',
  },
  content: {
    padding: 16,
    paddingBottom: 220,
  },
  headerCard: {
    alignItems: 'center',
    backgroundColor: 'rgba(42, 22, 13, 0.84)',
    borderWidth: 1,
    borderColor: 'rgba(216, 170, 69, 0.55)',
    borderRadius: 24,
    padding: 20,
  },
  headerIcon: {
    fontSize: 44,
  },
  title: {
    color: GOLD_LIGHT,
    fontSize: 28,
    fontWeight: '800',
    textAlign: 'center',
    marginTop: 8,
  },
  subtitle: {
    color: '#E9D3B6',
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
    marginTop: 8,
  },
  searchWrap: {
    minHeight: 52,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: CARD,
    borderWidth: 1,
    borderColor: '#E3D0AD',
    borderRadius: 17,
    paddingHorizontal: 15,
    marginTop: 16,
  },
  searchIcon: {
    color: BROWN,
    fontSize: 25,
    marginRight: 9,
  },
  searchInput: {
    flex: 1,
    color: BROWN,
    fontSize: 15,
    paddingVertical: 0,
  },
  clearSearch: {
    color: '#80654C',
    fontSize: 27,
  },
  categoryRow: {
    paddingVertical: 16,
    paddingRight: 10,
  },
  categoryButton: {
    minWidth: 122,
    minHeight: 46,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 249, 239, 0.90)',
    borderWidth: 1,
    borderColor: '#E3D0AD',
    borderRadius: 16,
    paddingHorizontal: 14,
    marginRight: 10,
  },
  categoryButtonSelected: {
    backgroundColor: BROWN,
    borderColor: GOLD,
  },
  categoryIcon: {
    fontSize: 19,
    marginRight: 7,
  },
  categoryText: {
    color: '#6E543D',
    fontSize: 13,
    fontWeight: '700',
  },
  categoryTextSelected: {
    color: GOLD_LIGHT,
  },
  sectionTitle: {
    color: '#FFE4A9',
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 12,
  },
  trackCard: {
    minHeight: 104,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: CARD,
    borderWidth: 1.5,
    borderColor: 'transparent',
    borderRadius: 20,
    padding: 13,
    marginBottom: 12,
    elevation: 4,
  },
  trackCardActive: {
    borderColor: GOLD,
    backgroundColor: '#FFF5D9',
  },
  trackArtwork: {
    width: 66,
    height: 66,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EFE0C7',
    borderWidth: 1,
    borderColor: '#E0C494',
    borderRadius: 17,
  },
  trackArtworkActive: {
    backgroundColor: BROWN,
    borderColor: GOLD,
  },
  trackIcon: {
    fontSize: 34,
  },
  trackInfo: {
    flex: 1,
    marginLeft: 13,
    marginRight: 9,
  },
  trackTitle: {
    color: BROWN,
    fontSize: 16,
    fontWeight: '800',
  },
  trackTitleActive: {
    color: '#7C4A17',
  },
  trackDescription: {
    color: '#79644F',
    fontSize: 12,
    lineHeight: 17,
    marginTop: 4,
  },
  trackMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  durationText: {
    color: '#A28768',
    fontSize: 11,
  },
  playingText: {
    color: '#AF741D',
    fontSize: 11,
    fontWeight: '800',
    marginLeft: 10,
  },
  cardPlayButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EFE0C7',
    borderRadius: 20,
  },
  cardPlayButtonActive: {
    backgroundColor: BROWN,
  },
  cardPlayIcon: {
    color: BROWN,
    fontSize: 17,
    fontWeight: '800',
  },
  cardPlayIconActive: {
    color: GOLD_LIGHT,
  },
  emptyCard: {
    alignItems: 'center',
    backgroundColor: CARD,
    borderRadius: 20,
    padding: 28,
  },
  emptyIcon: {
    fontSize: 38,
  },
  emptyText: {
    color: '#79644F',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
  },
  playerCard: {
    position: 'absolute',
    left: 12,
    right: 12,
    bottom: 92,
    backgroundColor: 'rgba(38, 20, 11, 0.98)',
    borderWidth: 1,
    borderColor: GOLD,
    borderRadius: 22,
    padding: 14,
    elevation: 12,
  },
  playerTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  playerArtwork: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#63401F',
    borderWidth: 1,
    borderColor: GOLD,
    borderRadius: 14,
  },
  playerArtworkIcon: {
    fontSize: 26,
  },
  playerInfo: {
    flex: 1,
    marginHorizontal: 11,
  },
  playerTitle: {
    color: GOLD_LIGHT,
    fontSize: 15,
    fontWeight: '800',
  },
  playerSubtitle: {
    color: '#D1B896',
    fontSize: 11,
    marginTop: 3,
  },
  closePlayer: {
    color: '#E7CDA9',
    fontSize: 27,
  },
  progressBackground: {
    height: 4,
    backgroundColor: 'rgba(255,255,255,0.16)',
    borderRadius: 2,
    marginTop: 12,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: GOLD,
  },
  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  timeText: {
    color: '#CBB18E',
    fontSize: 10,
  },
  controlsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 6,
  },
  controlButton: {
    width: 42,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainControlButton: {
    width: 52,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: GOLD,
    borderRadius: 26,
    marginHorizontal: 18,
  },
  controlIcon: {
    color: GOLD_LIGHT,
    fontSize: 21,
  },
  mainControlIcon: {
    color: BROWN,
    fontSize: 21,
    fontWeight: '900',
  },
  buttonPressed: {
    opacity: 0.68,
    transform: [{scale: 0.98}],
  },
  hiddenVideo: {
    position: 'absolute',
    width: 1,
    height: 1,
    opacity: 0,
  },
});
