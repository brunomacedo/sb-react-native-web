import { StatusBar } from 'expo-status-bar';
import React, { ReactNode } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { theme } from '../../theme/theme';
import { Box } from '../Box';
import type { Theme } from '../../theme/theme';

export function Wrapper({
  children,
  bg = 'gray25',
  fullWidth = false,
  fullHeight = false,
}: {
  bg?: keyof Theme['colors'];
  children: ReactNode;
  fullWidth?: boolean;
  fullHeight?: boolean;
}) {
  return (
    <SafeAreaView style={styles.safearea}>
      <ScrollView contentContainerStyle={styles.grow} bounces={false}>
        <StatusBar style="dark" />
        <Box
          flex={1}
          justifyContent="center"
          backgroundColor={bg}
          paddingVertical={fullHeight ? "spacing-none" : "spacing-s"}
          paddingHorizontal={fullWidth ? "spacing-none" : "spacing-s"}
        >
          <Box>{children}</Box>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  grow: { flexGrow: 1, backgroundColor: theme.colors.ghostWhite },
  safearea: { flex: 1, backgroundColor: theme.colors.ghostWhite },
});
