import Sound from 'react-native-sound';

Sound.setCategory('Playback');

let soundEnabled = true;

let fishSplashSound: Sound | null = null;
let birdChirpSound: Sound | null = null;

function loadSound(
  filename: string,
  onLoaded: (sound: Sound) => void,
) {
  const sound = new Sound(filename, Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('Release life sound load error:', filename, error);
      return;
    }

    sound.setVolume(1);
    onLoaded(sound);
  });
}

export function preloadReleaseLifeSounds() {
  if (!fishSplashSound) {
    loadSound('fish_splash.mp3', sound => {
      fishSplashSound = sound;
    });
  }

  if (!birdChirpSound) {
    loadSound('bird_chirp.mp3', sound => {
      birdChirpSound = sound;
    });
  }
}

export function releaseReleaseLifeSounds() {
  if (fishSplashSound) {
    fishSplashSound.release();
    fishSplashSound = null;
  }

  if (birdChirpSound) {
    birdChirpSound.release();
    birdChirpSound = null;
  }
}

export function setReleaseLifeSoundEnabled(enabled: boolean) {
  soundEnabled = enabled;
}

export function getReleaseLifeSoundEnabled() {
  return soundEnabled;
}

function playSound(sound: Sound | null) {
  if (!soundEnabled || !sound) {
    return;
  }

  sound.stop(() => {
    sound.setCurrentTime(0);
    sound.play(success => {
      if (!success) {
        console.log('Release life sound playback failed');
      }
    });
  });
}

export function playFishReleaseSound() {
  playSound(fishSplashSound);
}

export function playBirdReleaseSound() {
  playSound(birdChirpSound);
}