import '../global.css';
import 'expo-dev-client';

import 'react-native-reanimated'
import 'react-native-gesture-handler'

import { StatusBar } from 'expo-status-bar';

import { Stack } from 'expo-router';
import { ThemeProvider as NavThemeProvider } from '@react-navigation/native';

import { useColorScheme, useInitialAndroidBarSync } from '~/lib/useColorScheme';
import { NAV_THEME } from '~/theme';

export default function Layout() {
  useInitialAndroidBarSync();
  const { colorScheme, isDarkColorScheme } = useColorScheme();

  return (
    <>
      <StatusBar
        key={`root-status-bar-${isDarkColorScheme ? 'light' : 'dark'}`}
        style={isDarkColorScheme ? 'light' : 'dark'}
      />

      <NavThemeProvider value={NAV_THEME[colorScheme]}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{
            headerShown: false
          }} />
        </Stack>
      </NavThemeProvider>
    </>

  )
}
