import RNReactNativeHapticFeedback, {
  HapticFeedbackTypes,
} from 'react-native-haptic-feedback';

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

export class HapticModule {
  public trigger = (type: HapticFeedbackTypes): void => {
    RNReactNativeHapticFeedback.trigger(type, options);
  };
}
