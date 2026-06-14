import React, {
  useEffect,
  useState,
} from 'react';

import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';

import {
  initializeI18n,
} from './src/i18n';

import RootNavigator
  from './src/navigation/RootNavigator';

import {
  colors,
} from './src/theme/colors';
import {
  refreshLunarReminders,
} from './src/services/lunarNotifications';
import {
  refreshDailyPracticeReminder,
} from './src/services/dailyPracticeNotifications';

export default function App() {
  const [
    isI18nReady,
    setIsI18nReady,
  ] = useState(false);

useEffect(() => {
  initializeI18n()
    .then(async () => {
      try {
        await refreshLunarReminders();
        await refreshDailyPracticeReminder();
      } catch (error) {
        console.warn(
          'Không thể làm mới lịch thông báo âm lịch:',
          error,
        );
      }
    })
    .catch(error => {
      console.warn(
        'Không thể khởi tạo ngôn ngữ:',
        error,
      );
    })
    .finally(() => {
      setIsI18nReady(true);
    });
}, []);

  if (!isI18nReady) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator
          size="large"
          color={colors.primary}
        />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={
          colors.background
        }
      />

      <RootNavigator />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,

    alignItems: 'center',

    justifyContent: 'center',

    backgroundColor:
      colors.background,
  },
});