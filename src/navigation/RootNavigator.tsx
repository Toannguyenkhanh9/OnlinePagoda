import React from 'react';
import { Platform, StyleSheet, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import TempleScreen from '../screens/TempleScreen';
import MeditationScreen from '../screens/MeditationScreen';
import PrayerScreen from '../screens/PrayerScreen';
import AudioLibraryScreen from '../screens/AudioLibraryScreen';
import SettingsScreen from '../screens/SettingsScreen';

import { colors } from '../theme/colors';
import { useTranslation } from 'react-i18next';
import LunarCalendarScreen from '../screens/LunarCalendarScreen';
import SpiritualAudioScreen from '../screens/SpiritualAudioScreen';
import FortuneStickScreen from '../screens/FortuneStickScreen';
import HoroscopeScreen from '../screens/HoroscopeScreen';

export type RootTabParamList = {
  Home: undefined;
  Temple: undefined;
  Meditation: undefined;
  Prayer: undefined;
  AudioLibrary: undefined;
  Settings: undefined;
  LunarCalendar: undefined;
  SpiritualAudio: undefined;
  FortuneStick: undefined;
  Horoscope: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

type TabIconProps = {
  icon: string;
  focused: boolean;
};

function TabIcon({ icon, focused }: TabIconProps) {
  return (
    <Text style={[styles.tabIcon, focused && styles.activeTabIcon]}>
      {icon}
    </Text>
  );
}

export default function RootNavigator() {
  const { t } = useTranslation();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: '#867A6E',
          tabBarStyle: styles.tabBar,
          tabBarLabelStyle: styles.tabBarLabel,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: t('tabs.home'),

            tabBarIcon: ({ focused }) => (
              <TabIcon icon="🏠" focused={focused} />
            ),
          }}
        />

        <Tab.Screen
          name="Temple"
          component={TempleScreen}
          options={{
            title: t('tabs.temple'),

            tabBarIcon: ({ focused }) => (
              <TabIcon icon="🛕" focused={focused} />
            ),
          }}
        />

        <Tab.Screen
          name="Meditation"
          component={MeditationScreen}
          options={{
            title: t('tabs.meditation'),

            tabBarIcon: ({ focused }) => (
              <TabIcon icon="🧘" focused={focused} />
            ),
          }}
        />

        <Tab.Screen
          name="Prayer"
          component={PrayerScreen}
          options={{
            title: t('tabs.prayer'),

            tabBarIcon: ({ focused }) => (
              <TabIcon icon="🙏" focused={focused} />
            ),
          }}
        />

        <Tab.Screen
          name="AudioLibrary"
          component={AudioLibraryScreen}
          options={{
            title: 'Âm thanh',
            tabBarButton: () => null,
            tabBarItemStyle: styles.hiddenTab,
          }}
        />
        <Tab.Screen
          name="LunarCalendar"
          component={LunarCalendarScreen}
          options={{
            title: t('lunarCalendar.title'),
            tabBarButton: () => null,
            tabBarItemStyle: styles.hiddenTab,
          }}
        />
        <Tab.Screen
          name="SpiritualAudio"
          component={SpiritualAudioScreen}
          options={{
            title: t('spiritualAudio.title'),
            tabBarButton: () => null,
            tabBarItemStyle: styles.hiddenTab,
          }}
        />
        <Tab.Screen
          name="FortuneStick"
          component={FortuneStickScreen}
          options={{
            title: t('fortuneStick.title'),
            tabBarButton: () => null,
            tabBarItemStyle: styles.hiddenTab,
          }}
        />
        <Tab.Screen
          name="Horoscope"
          component={HoroscopeScreen}
          options={{
            title: t('horoscope.title'),
            tabBarButton: () => null,
                        tabBarItemStyle: styles.hiddenTab,
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            title: 'Cài đặt',
            tabBarButton: () => null,
            tabBarItemStyle: styles.hiddenTab,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: Platform.OS === 'ios' ? 88 : 70,
    paddingTop: 7,
    paddingBottom: Platform.OS === 'ios' ? 22 : 8,
    backgroundColor: '#FFFAF2',
    borderTopColor: '#EADBC8',
  },

  tabBarLabel: {
    fontSize: 11,
    fontWeight: '700',
  },

  tabIcon: {
    fontSize: 21,
    opacity: 0.6,
  },

  activeTabIcon: {
    fontSize: 23,
    opacity: 1,
  },

  hiddenTab: {
    display: 'none',
  },
});
