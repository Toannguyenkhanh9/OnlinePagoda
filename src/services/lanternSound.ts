import Sound from 'react-native-sound';

Sound.setCategory('Playback');

let lanternWaterSound: Sound | null = null;
let isPreloaded = false;

function loadSound(
  filename: string,
  onLoaded: (sound: Sound) => void,
) {
  const sound = new Sound(filename, Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Lantern sound load error:', filename, error);
      return;
    }

    sound.setVolume(0.75);
    onLoaded(sound);
  });
}

export function preloadLanternSounds() {
  if (isPreloaded) {
    return;
  }

  isPreloaded = true;

  if (!lanternWaterSound) {
    loadSound('lantern_water.mp3', sound => {
      lanternWaterSound = sound;
    });
  }
}

export function releaseLanternSounds() {
  lanternWaterSound?.release();
  lanternWaterSound = null;
  isPreloaded = false;
}

export function playLanternWaterSound() {
  if (!lanternWaterSound) {
    return;
  }

  lanternWaterSound.stop(() => {
    lanternWaterSound?.setCurrentTime(0);
    lanternWaterSound?.play(success => {
      if (!success) {
        console.log('Lantern water sound playback failed');
      }
    });
  });
}