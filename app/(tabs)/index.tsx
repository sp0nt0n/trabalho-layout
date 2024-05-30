import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#8EB4AD', dark: '#8EB4AD' }}
      headerImage={
        <Image
          source={require('@/assets/images/chatt.png')}
          style={styles.foto}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Redes sociais</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText>
          Acesse a próxima página para visualizar todas as redes sociais.
        </ThemedText>
      </ThemedView>
      <Image
          source={require('@/assets/images/iconrede.png')}
          style={styles.fotorede}
        />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  foto: {
    width: 200,
    height: 197,
    marginTop: 50,
    marginLeft:110,
  },
  fotorede:{
    width:360,
    height:420,
  }
});
