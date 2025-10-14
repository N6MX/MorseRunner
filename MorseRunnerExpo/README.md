# MorseRunner Mobile - Expo Version

This is the Expo version of MorseRunner Mobile for easy testing with Expo Go.

## Quick Start

1. **Install Expo Go** on your mobile device:
   - [iOS App Store](https://apps.apple.com/app/expo-go/id982107779)
   - [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

2. **Start the development server**:
   ```bash
   npm start
   ```

3. **Scan the QR code** with Expo Go to run the app on your device

## Features

- ✅ **Morse Code Generation**: Ported from original Pascal code
- ✅ **Contest Simulation**: Multiple contest types supported
- ✅ **Touch-Optimized UI**: Mobile-friendly interface
- ✅ **Audio Playback**: Using Expo AV for cross-platform audio
- ✅ **Real-time Testing**: Instant updates with Expo Go

## Testing

The app includes a simple test component that allows you to:
- Test Morse code audio generation
- Verify audio playback works
- Check basic functionality

## Development

- **TypeScript**: Full type safety
- **Expo AV**: Cross-platform audio support
- **Hot Reload**: Instant updates during development
- **Expo Go**: No need for device-specific builds

## Next Steps

1. Test basic functionality with Expo Go
2. Implement real-time audio generation
3. Add haptic feedback
4. Implement contest logging
5. Add more contest types

## Troubleshooting

- **Audio not playing**: Check device volume and permissions
- **App not loading**: Make sure you're connected to the same network
- **Build errors**: Run `npm install` to ensure dependencies are installed
