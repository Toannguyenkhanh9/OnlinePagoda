import {Platform} from 'react-native';

let soundEnabled = true;

export function setReleaseLifeSoundEnabled(enabled: boolean) {
  soundEnabled = enabled;
}

export function getReleaseLifeSoundEnabled() {
  return soundEnabled;
}

export function playFishReleaseSound() {
  if (!soundEnabled) {
    return;
  }

  // Tạm thời để trống để không cần cài thêm thư viện.
  // Sau này có thể nối với audio service hiện tại của iPagoda.
  console.log('play fish release sound');

  if (Platform.OS === 'ios') {
    // Có thể nối tiếng nước bắn ở đây.
  }
}

export function playBirdReleaseSound() {
  if (!soundEnabled) {
    return;
  }

  // Tạm thời để trống để không cần cài thêm thư viện.
  // Sau này có thể nối với audio service hiện tại của iPagoda.
  console.log('play bird release sound');

  if (Platform.OS === 'ios') {
    // Có thể nối tiếng chim bay ở đây.
  }
}