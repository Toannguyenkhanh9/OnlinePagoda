import React, {useEffect, useState} from 'react';
import {
  Alert,
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

const MEDITATION_DURATIONS = [
  5 * 60,
  10 * 60,
  20 * 60,
  30 * 60,
];

export default function MeditationScreen() {
  const {t} = useTranslation();
  const navigation = useNavigation<any>();

  const [selectedDuration, setSelectedDuration] =
    useState(10 * 60);

  const [remainingSeconds, setRemainingSeconds] =
    useState(10 * 60);

  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    const timer = setInterval(() => {
      setRemainingSeconds(current => {
        if (current <= 1) {
          clearInterval(timer);
          setIsRunning(false);

          Alert.alert(
            t('meditation.completedTitle', {
              defaultValue: 'Meditation completed',
            }),
            t('meditation.completedMessage', {
              defaultValue:
                'Take a slow breath and notice how you feel.',
            }),
          );

          return 0;
        }

        return current - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [isRunning, t]);

  const selectDuration = (seconds: number) => {
    setSelectedDuration(seconds);
    setRemainingSeconds(seconds);
    setIsRunning(false);
  };

  const toggleTimer = () => {
    if (remainingSeconds === 0) {
      setRemainingSeconds(selectedDuration);
      setIsRunning(true);
      return;
    }

    setIsRunning(current => !current);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setRemainingSeconds(selectedDuration);
  };

  const handleBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
      return;
    }

    navigation.navigate('Home');
  };

  const minutes = Math.floor(
    remainingSeconds / 60,
  );

  const seconds =
    remainingSeconds % 60;

  const selectedMinutes =
    selectedDuration / 60;

  const timerText = `${String(minutes).padStart(
    2,
    '0',
  )}:${String(seconds).padStart(2, '0')}`;

  const hasTimerStarted =
    remainingSeconds !== selectedDuration ||
    isRunning;

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#FFF9F1"
      />

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}>
        <View style={styles.pageFrame}>
          <View style={styles.header}>
            <Pressable
              hitSlop={12}
              style={({pressed}) => [
                styles.backButton,
                pressed && styles.pressed,
              ]}
              onPress={handleBack}>
              <Text style={styles.backIcon}>‹</Text>
            </Pressable>

            <Text style={styles.headerTitle}>
              {t('meditation.screenTitle', {
                defaultValue: 'Meditation',
              })}
            </Text>

            <View style={styles.headerSpacer} />
          </View>

          <ImageBackground
            source={require('../assets/images/meditation_hero.png')}
            resizeMode="cover"
            imageStyle={styles.heroImage}
            style={styles.heroCard}>
            <View style={styles.heroShade}>
              <Text style={styles.heroTitle}>
                {t('meditation.breathingTitle', {
                  defaultValue:
                    'Breathing Meditation',
                })}
              </Text>

              <Text style={styles.heroTime}>
                {hasTimerStarted
                  ? timerText
                  : t('meditation.heroMinutes', {
                      count: selectedMinutes,
                      defaultValue:
                        `${selectedMinutes} minutes`,
                    })}
              </Text>

              {hasTimerStarted && (
                <View style={styles.heroStatusBadge}>
                  <Text style={styles.heroStatusText}>
                    {isRunning
                      ? t('meditation.running', {
                          defaultValue:
                            'Meditating',
                        })
                      : t('meditation.paused', {
                          defaultValue:
                            'Paused',
                        })}
                  </Text>
                </View>
              )}
            </View>
          </ImageBackground>

          <Text style={styles.sectionTitle}>
            {t('meditation.chooseDuration', {
              defaultValue: 'Choose duration',
            })}
          </Text>

          <View style={styles.durationRow}>
            {MEDITATION_DURATIONS.map(duration => {
              const isSelected =
                selectedDuration === duration;

              const durationMinutes =
                duration / 60;

              return (
                <Pressable
                  key={duration}
                  style={({pressed}) => [
                    styles.durationButton,
                    isSelected &&
                      styles.durationButtonSelected,
                    pressed && styles.pressed,
                  ]}
                  onPress={() =>
                    selectDuration(duration)
                  }>
                  <Text
                    style={[
                      styles.durationNumber,
                      isSelected &&
                        styles.durationTextSelected,
                    ]}>
                    {durationMinutes}
                  </Text>

                  <Text
                    style={[
                      styles.durationUnit,
                      isSelected &&
                        styles.durationTextSelected,
                    ]}>
                    {t('meditation.minuteUnit', {
                      defaultValue: 'min',
                    })}
                  </Text>
                </Pressable>
              );
            })}
          </View>

          <Pressable
            style={({pressed}) => [
              styles.startButton,
              isRunning &&
                styles.startButtonRunning,
              pressed && styles.startButtonPressed,
            ]}
            onPress={toggleTimer}>
            <Text style={styles.startButtonText}>
              {isRunning
                ? t('meditation.pause', {
                    defaultValue:
                      'Pause meditation',
                  })
                : remainingSeconds === 0
                  ? t('meditation.restart', {
                      defaultValue:
                        'Meditate again',
                    })
                  : t('meditation.start', {
                      defaultValue:
                        'Start meditation',
                    })}
            </Text>
          </Pressable>

          {hasTimerStarted && (
            <Pressable
              style={({pressed}) => [
                styles.resetButton,
                pressed && styles.pressed,
              ]}
              onPress={resetTimer}>
              <Text style={styles.resetButtonText}>
                {t('meditation.resetTime', {
                  defaultValue: 'Reset time',
                })}
              </Text>
            </Pressable>
          )}

          <View style={styles.breathCard}>
            <Text style={styles.breathTitle}>
              {t('meditation.breathTitle', {
                defaultValue:
                  'Breathing guide',
              })}
            </Text>

            <View style={styles.breathStep}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>
                  1
                </Text>
              </View>

              <Text style={styles.breathText}>
                {t('meditation.inhale', {
                  defaultValue:
                    'Inhale slowly for 4 seconds',
                })}
              </Text>
            </View>

            <View style={styles.breathStep}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>
                  2
                </Text>
              </View>

              <Text style={styles.breathText}>
                {t('meditation.hold', {
                  defaultValue:
                    'Hold your breath for 2 seconds',
                })}
              </Text>
            </View>

            <View style={styles.breathStep}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>
                  3
                </Text>
              </View>

              <Text style={styles.breathText}>
                {t('meditation.exhale', {
                  defaultValue:
                    'Exhale slowly for 6 seconds',
                })}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const BROWN = '#6A3515';
const BROWN_DARK = '#4F2812';
const GOLD = '#C79558';
const CREAM = '#FFF9F1';
const SOFT_CREAM = '#F6E7D2';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: CREAM,
  },

  content: {
    flexGrow: 1,
    paddingHorizontal: 17,
    paddingTop: 12,
    paddingBottom: 120,
  },

  pageFrame: {
    width: '100%',
    backgroundColor: CREAM,
    borderWidth: 1.4,
    borderColor: GOLD,
    borderRadius: 26,
    paddingHorizontal: 13,
    paddingTop: 4,
    paddingBottom: 18,
  },

  header: {
    minHeight: 58,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  backButton: {
    width: 40,
    height: 40,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  backIcon: {
    color: '#3B291D',
    fontSize: 32,
    lineHeight: 34,
    fontWeight: '300',
  },

  headerTitle: {
    color: '#3B291D',
    fontSize: 17,
    fontWeight: '800',
    textAlign: 'center',
  },

  headerSpacer: {
    width: 40,
  },

  heroCard: {
    width: '100%',
    aspectRatio: 1.12,
    justifyContent: 'flex-start',
    overflow: 'hidden',
    borderRadius: 16,
  },

  heroImage: {
    borderRadius: 16,
  },

  heroShade: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:
      'rgba(85, 42, 18, 0.10)',
    paddingTop: 17,
  },

  heroTitle: {
    color: '#FFF7E8',
    fontSize: 18,
    fontWeight: '800',
    textAlign: 'center',
    textShadowColor:
      'rgba(52, 24, 8, 0.75)',
    textShadowOffset: {
      width: 0,
      height: 1,
    },
    textShadowRadius: 5,
  },

  heroTime: {
    color: '#FFF7E8',
    fontSize: 14,
    fontWeight: '600',
    marginTop: 5,
    textShadowColor:
      'rgba(52, 24, 8, 0.75)',
    textShadowOffset: {
      width: 0,
      height: 1,
    },
    textShadowRadius: 4,
  },

  heroStatusBadge: {
    backgroundColor:
      'rgba(68, 35, 17, 0.72)',
    borderRadius: 12,
    paddingHorizontal: 11,
    paddingVertical: 5,
    marginTop: 8,
  },

  heroStatusText: {
    color: '#FFE6BA',
    fontSize: 11,
    fontWeight: '700',
  },

  sectionTitle: {
    color: '#3F2A1C',
    fontSize: 15,
    fontWeight: '600',
    marginTop: 16,
    marginBottom: 9,
  },

  durationRow: {
    width: '100%',
    flexDirection: 'row',
    columnGap: 8,
  },

  durationButton: {
    flex: 1,
    minHeight: 52,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: SOFT_CREAM,
    borderRadius: 11,
    paddingVertical: 7,
  },

  durationButtonSelected: {
    backgroundColor: BROWN,
    shadowColor: BROWN_DARK,
    shadowOpacity: 0.22,
    shadowRadius: 7,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 4,
  },

  durationNumber: {
    color: '#4B3424',
    fontSize: 15,
    fontWeight: '700',
  },

  durationUnit: {
    color: '#7B624F',
    fontSize: 11,
    marginTop: 1,
  },

  durationTextSelected: {
    color: '#FFF8E9',
  },

  startButton: {
    width: '100%',
    minHeight: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: BROWN,
    borderRadius: 11,
    marginTop: 23,
    paddingHorizontal: 16,

    shadowColor: BROWN_DARK,
    shadowOpacity: 0.18,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 4,
  },

  startButtonRunning: {
    backgroundColor: '#7D4A27',
  },

  startButtonPressed: {
    opacity: 0.78,
    transform: [{scale: 0.985}],
  },

  startButtonText: {
    color: '#FFF8E9',
    fontSize: 14,
    fontWeight: '800',
    textAlign: 'center',
  },

  resetButton: {
    alignSelf: 'center',
    paddingHorizontal: 18,
    paddingVertical: 10,
    marginTop: 4,
  },

  resetButtonText: {
    color: BROWN,
    fontSize: 13,
    fontWeight: '700',
  },

  breathCard: {
    width: '100%',
    backgroundColor: '#FFF4E4',
    borderWidth: 1,
    borderColor: '#E6CDA7',
    borderRadius: 15,
    padding: 15,
    marginTop: 18,
  },

  breathTitle: {
    color: '#4B2E1D',
    fontSize: 15,
    fontWeight: '800',
    marginBottom: 11,
  },

  breathStep: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },

  stepNumber: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: BROWN,
    borderRadius: 12,
    marginRight: 10,
  },

  stepNumberText: {
    color: '#FFF8E9',
    fontSize: 11,
    fontWeight: '800',
  },

  breathText: {
    flex: 1,
    color: '#725640',
    fontSize: 13,
    lineHeight: 19,
  },

  pressed: {
    opacity: 0.65,
  },
});
