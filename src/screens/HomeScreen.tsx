import React from 'react';
import {
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { useTranslation } from 'react-i18next';

import type { RootTabParamList } from '../navigation/RootNavigator';
import { colors } from '../theme/colors';

type Props = BottomTabScreenProps<RootTabParamList, 'Home'>;

type MenuRoute =
  | 'Temple'
  | 'Meditation'
  | 'Prayer'
  | 'SpiritualAudio'
  | 'LunarCalendar'
    | 'FortuneStick'
  | 'Settings';

type HomeMenuCardProps = {
  icon: string;
  title: string;
  subtitle: string;
  route: MenuRoute;
  accent: string;
  onPress: (route: MenuRoute) => void;
};

function HomeMenuCard({
  icon,
  title,
  subtitle,
  route,
  accent,
  onPress,
}: HomeMenuCardProps) {
  return (
    <Pressable
      accessibilityRole="button"
      style={({ pressed }) => [
        styles.menuCard,
        pressed && styles.menuCardPressed,
      ]}
      onPress={() => onPress(route)}
    >
      <View
        style={[
          styles.menuIconWrap,
          {
            backgroundColor: accent,
          },
        ]}
      >
        <Text style={styles.menuIcon}>{icon}</Text>
      </View>

      <View style={styles.menuTextWrap}>
        <Text style={styles.menuTitle}>{title}</Text>

        <Text style={styles.menuSubtitle} numberOfLines={3}>
          {subtitle}
        </Text>
      </View>

      <View style={styles.menuArrowWrap}>
        <Text style={styles.menuArrow}>›</Text>
      </View>
    </Pressable>
  );
}

export default function HomeScreen({ navigation }: Props) {
  const { t } = useTranslation();

  const navigateTo = (route: MenuRoute) => {
    navigation.navigate(route);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle="dark-content" backgroundColor={BACKGROUND} />

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.topHeader}>
          <View>
            <Text style={styles.welcomeText}>
              {t('home.welcome', {
                defaultValue: 'Bình an mỗi ngày',
              })}
            </Text>

            <Text style={styles.brandText}>{t('home.title')}</Text>
          </View>

          <View style={styles.lotusBadge}>
            <Text style={styles.lotusIcon}>🪷</Text>
          </View>
        </View>

        <ImageBackground
          source={require('../assets/images/main_hall_background.png')}
          resizeMode="cover"
          imageStyle={styles.heroImage}
          style={styles.hero}
        >
          <View style={styles.heroOverlay}>
            <View style={styles.heroTopBadge}>
              <Text style={styles.heroTopBadgeIcon}>☸</Text>

              <Text style={styles.heroTopBadgeText}>
                {t('home.peacefulSpace', {
                  defaultValue: 'Không gian tĩnh tâm',
                })}
              </Text>
            </View>

            <View style={styles.heroContent}>
              <Text style={styles.heroTitle}>
                {t('home.heroTitle', {
                  defaultValue: 'Trở về với sự an yên',
                })}
              </Text>

              <Text style={styles.heroSubtitle}>{t('home.subtitle')}</Text>

              <Pressable
                style={({ pressed }) => [
                  styles.heroButton,
                  pressed && styles.heroButtonPressed,
                ]}
                onPress={() => navigation.navigate('Temple')}
              >
                <Text style={styles.heroButtonText}>
                  {t('home.enterTemple', {
                    defaultValue: 'Vào chính điện',
                  })}
                </Text>

                <Text style={styles.heroButtonArrow}>›</Text>
              </Pressable>
            </View>
          </View>
        </ImageBackground>

        <View style={styles.sectionHeader}>
          <View>
            <Text style={styles.sectionEyebrow}>
              {t('home.discover', {
                defaultValue: 'Khám phá',
              })}
            </Text>

            <Text style={styles.sectionTitle}>{t('home.activities')}</Text>
          </View>

          <View style={styles.sectionOrnament}>
            <View style={styles.sectionLine} />
            <Text style={styles.sectionLotus}>✦</Text>
            <View style={styles.sectionLine} />
          </View>
        </View>

        <View style={styles.menuGrid}>
          <HomeMenuCard
            icon="🪔"
            title={t('home.templeTitle')}
            subtitle={t('home.templeSubtitle')}
            route="Temple"
            accent="#F6E1C2"
            onPress={navigateTo}
          />

          <HomeMenuCard
            icon="🧘"
            title={t('home.meditationTitle')}
            subtitle={t('home.meditationSubtitle')}
            route="Meditation"
            accent="#E8E5D2"
            onPress={navigateTo}
          />

          <HomeMenuCard
            icon="🙏"
            title={t('home.prayerTitle')}
            subtitle={t('home.prayerSubtitle')}
            route="Prayer"
            accent="#F5E6CF"
            onPress={navigateTo}
          />

          <HomeMenuCard
            icon="🎧"
            title={t('home.spiritualAudioTitle')}
            subtitle={t('home.spiritualAudioSubtitle')}
            route="SpiritualAudio"
            accent="#E3E8DF"
            onPress={navigateTo}
          />
          <HomeMenuCard
            icon="🧧"
            title={t('home.fortuneStickTitle')}
            subtitle={t('home.fortuneStickSubtitle')}
            route="FortuneStick"
            accent="#F3DFC9"
            onPress={navigateTo}
          />

          <HomeMenuCard
            icon="📅"
            title={t('home.lunarCalendarTitle')}
            subtitle={t('home.lunarCalendarSubtitle')}
            route="LunarCalendar"
            accent="#E9DFEF"
            onPress={navigateTo}
          />

          <HomeMenuCard
            icon="⚙️"
            title={t('home.settingsTitle')}
            subtitle={t('home.settingsSubtitle')}
            route="Settings"
            accent="#ECE6DE"
            onPress={navigateTo}
          />
        </View>

        <View style={styles.dailyCard}>
          <View style={styles.dailyIconWrap}>
            <Text style={styles.dailyIcon}>☀</Text>
          </View>

          <View style={styles.dailyContent}>
            <Text style={styles.dailyLabel}>{t('home.dailyTitle')}</Text>

            <Text style={styles.dailyText}>{t('home.dailyText')}</Text>
          </View>
        </View>

        <View style={styles.footerQuote}>
          <Text style={styles.footerQuoteMark}>“</Text>

          <Text style={styles.footerQuoteText}>
            {t('home.footerQuote', {
              defaultValue: 'Tâm tĩnh thì mọi nơi đều là chốn bình an.',
            })}
          </Text>

          <Text style={styles.footerQuoteMarkEnd}>”</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const BACKGROUND = '#FFF9F1';
const SURFACE = '#FFFDF9';
const BROWN = '#4D2C1D';
const BROWN_SOFT = '#6D4D39';
const GOLD = '#C99551';
const GOLD_LIGHT = '#F5D9A4';
const BORDER = '#E8D6BF';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: BACKGROUND,
  },

  content: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 120,
  },

  topHeader: {
    minHeight: 66,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },

  welcomeText: {
    color: '#9A7B62',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.6,
    textTransform: 'uppercase',
  },

  brandText: {
    color: BROWN,
    fontSize: 25,
    fontWeight: '900',
    marginTop: 3,
  },

  lotusBadge: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F7EBD9',
    borderWidth: 1,
    borderColor: '#E6CCA7',
    borderRadius: 24,
  },

  lotusIcon: {
    fontSize: 25,
  },

  hero: {
    width: '100%',
    aspectRatio: 0.96,
    overflow: 'hidden',
    borderRadius: 28,

    shadowColor: '#5C351F',
    shadowOpacity: 0.2,
    shadowRadius: 18,
    shadowOffset: {
      width: 0,
      height: 9,
    },

    elevation: 8,
  },

  heroImage: {
    borderRadius: 28,
  },

  heroOverlay: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'rgba(31, 14, 6, 0.30)',
    padding: 18,
  },

  heroTopBadge: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 248, 234, 0.92)',
    borderWidth: 1,
    borderColor: 'rgba(232, 196, 138, 0.85)',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 7,
  },

  heroTopBadgeIcon: {
    color: GOLD,
    fontSize: 16,
    marginRight: 7,
  },

  heroTopBadgeText: {
    color: BROWN,
    fontSize: 12,
    fontWeight: '800',
  },

  heroContent: {
    backgroundColor: 'rgba(32, 15, 7, 0.68)',
    borderWidth: 1,
    borderColor: 'rgba(239, 204, 145, 0.38)',
    borderRadius: 22,
    padding: 18,
  },

  heroTitle: {
    color: '#FFF4D8',
    fontSize: 27,
    fontWeight: '900',
    lineHeight: 34,
  },

  heroSubtitle: {
    color: '#F4DFC3',
    fontSize: 14,
    lineHeight: 21,
    marginTop: 8,
  },

  heroButton: {
    alignSelf: 'flex-start',
    minHeight: 44,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: GOLD,
    borderRadius: 14,
    paddingHorizontal: 16,
    marginTop: 16,
  },

  heroButtonPressed: {
    opacity: 0.78,
    transform: [{ scale: 0.98 }],
  },

  heroButtonText: {
    color: '#3D2316',
    fontSize: 14,
    fontWeight: '900',
  },

  heroButtonArrow: {
    color: '#3D2316',
    fontSize: 23,
    lineHeight: 24,
    marginLeft: 8,
  },

  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginTop: 28,
    marginBottom: 14,
  },

  sectionEyebrow: {
    color: GOLD,
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 1.2,
    textTransform: 'uppercase',
  },

  sectionTitle: {
    color: BROWN,
    fontSize: 24,
    fontWeight: '900',
    marginTop: 3,
  },

  sectionOrnament: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },

  sectionLine: {
    width: 20,
    height: 1,
    backgroundColor: '#D8B981',
  },

  sectionLotus: {
    color: GOLD,
    fontSize: 13,
    marginHorizontal: 6,
  },

  menuGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  menuCard: {
    width: '48.5%',
    minHeight: 172,
    backgroundColor: SURFACE,
    borderWidth: 1,
    borderColor: BORDER,
    borderRadius: 22,
    padding: 14,
    marginBottom: 12,

    shadowColor: '#6A4027',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 3,
  },

  menuCardPressed: {
    opacity: 0.72,
    transform: [{ scale: 0.985 }],
  },

  menuIconWrap: {
    width: 54,
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
  },

  menuIcon: {
    fontSize: 29,
  },

  menuTextWrap: {
    flex: 1,
    marginTop: 12,
  },

  menuTitle: {
    color: BROWN,
    fontSize: 17,
    fontWeight: '900',
    lineHeight: 21,
  },

  menuSubtitle: {
    color: '#7D6858',
    fontSize: 12,
    lineHeight: 18,
    marginTop: 5,
  },

  menuArrowWrap: {
    position: 'absolute',
    right: 12,
    top: 15,
    width: 26,
    height: 26,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F7EEE3',
    borderRadius: 13,
  },

  menuArrow: {
    color: BROWN_SOFT,
    fontSize: 20,
    lineHeight: 21,
  },

  dailyCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: BROWN,
    borderWidth: 1,
    borderColor: '#8B634A',
    borderRadius: 24,
    padding: 18,
    marginTop: 12,
  },

  dailyIconWrap: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F2D39B',
    borderRadius: 24,
    marginRight: 13,
  },

  dailyIcon: {
    color: BROWN,
    fontSize: 23,
  },

  dailyContent: {
    flex: 1,
  },

  dailyLabel: {
    color: GOLD_LIGHT,
    fontSize: 16,
    fontWeight: '900',
  },

  dailyText: {
    color: '#F4E7D4',
    fontSize: 13,
    lineHeight: 20,
    marginTop: 6,
  },

  footerQuote: {
    alignItems: 'center',
    backgroundColor: '#F8EAD7',
    borderWidth: 1,
    borderColor: '#E6CBA4',
    borderRadius: 20,
    paddingHorizontal: 22,
    paddingVertical: 18,
    marginTop: 14,
  },

  footerQuoteMark: {
    alignSelf: 'flex-start',
    color: GOLD,
    fontSize: 30,
    lineHeight: 25,
  },

  footerQuoteText: {
    color: BROWN_SOFT,
    fontSize: 14,
    lineHeight: 21,
    fontStyle: 'italic',
    textAlign: 'center',
  },

  footerQuoteMarkEnd: {
    alignSelf: 'flex-end',
    color: GOLD,
    fontSize: 30,
    lineHeight: 25,
  },
});
