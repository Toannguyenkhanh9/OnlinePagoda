import AsyncStorage from '@react-native-async-storage/async-storage';

export type TempleSceneMode =
  | 'auto'
  | 'dawn'
  | 'day'
  | 'dusk'
  | 'night';

export type AltarCenterpiece =
  | 'buddha'
  | 'lotus'
  | 'dharmaWheel'
  | 'none';

export type AltarFlower =
  | 'lily'
  | 'lotus'
  | 'orchid'
  | 'none';

export type AltarLamp =
  | 'candle'
  | 'lantern'
  | 'lotusLamp'
  | 'none';

export type AltarAccent =
  | 'amber'
  | 'gold'
  | 'rose'
  | 'jade'
  | 'none';

export type TempleSoundscape =
  | 'none'
  | 'rain'
  | 'forest'
  | 'bell';

export type AltarPreferences = {
  sceneMode: TempleSceneMode;
  centerpiece: AltarCenterpiece;
  flower: AltarFlower;
  lamp: AltarLamp;
  accent: AltarAccent;
  soundscape: TempleSoundscape;
  showFloatingPetals: boolean;
};

const STORAGE_KEY =
  '@online_pagoda/altar_preferences_v1';

export const DEFAULT_ALTAR_PREFERENCES: AltarPreferences = {
  sceneMode: 'auto',
  centerpiece: 'none',
  flower: 'none',
  lamp: 'none',
  accent: 'none',
  soundscape: 'none',
  showFloatingPetals: true,
};

export async function getAltarPreferences(): Promise<
  AltarPreferences
> {
  try {
    const raw = await AsyncStorage.getItem(
      STORAGE_KEY,
    );

    if (!raw) {
      return DEFAULT_ALTAR_PREFERENCES;
    }

    const parsed = JSON.parse(raw);

    return {
      ...DEFAULT_ALTAR_PREFERENCES,
      ...(parsed as Partial<AltarPreferences>),
    };
  } catch (error) {
    console.warn(
      'Unable to read altar preferences:',
      error,
    );

    return DEFAULT_ALTAR_PREFERENCES;
  }
}

export async function saveAltarPreferences(
  preferences: AltarPreferences,
): Promise<void> {
  await AsyncStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(preferences),
  );
}

export async function resetAltarPreferences(): Promise<
  AltarPreferences
> {
  await AsyncStorage.removeItem(STORAGE_KEY);

  return DEFAULT_ALTAR_PREFERENCES;
}
