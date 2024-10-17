import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { useColorScheme } from '@/hooks/useColorScheme';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const customLightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#0172B2',  // Main theme blue
    background: 'transparent',  // Make the background transparent so gradient shows
    card: '#001645',        // for headers and cards
    text: '#FFFFFF',        //  primary text
    border: '#004E88',      // Darker gray for borders
    notification: '#4650FA', 
  },
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
    <ThemeProvider value={customLightTheme}>
      {/* Apply gradient at root layout */}
      <View style={styles.container}>
        <LinearGradient
          colors={['#0172B2', '#001645']}  // Your gradient stops
          start={{ x: 0, y: 0 }}          // Start at the top
          end={{ x: 0, y: 1 }}            // End at the bottom
          style={StyleSheet.absoluteFillObject}  // Ensure gradient fills the whole screen
        />
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </View>
    </ThemeProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
