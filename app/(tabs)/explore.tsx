import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, TouchableOpacity, View } from 'react-native';
import { Linking } from 'react-native';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Image
        source={require('@/assets/images/fundo.jpg')} style={styles.fundo}
        
      />}>
        <Image
        source={require('@/assets/images/gatinho.png')} style={styles.profile}
        
      />
      <ThemedView style={styles.titleContainer}>
      
        <ThemedText type="subtitle">Minhas redes sociais</ThemedText>
      </ThemedView>
      <ThemedText>"Os homens foram feitos para serem amados não para serem compreendidos."</ThemedText>
      <View style={styles.logoContainer}>
      <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/your_profile_url')}>
        <Image
          source={require('@/assets/images/1.png')}
          style={styles.logos}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL('https://br.linkedin.com/')}>
        <Image
          source={require('@/assets/images/2.png')}
          style={styles.logos}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL('https://discord.com/')}>
        <Image
          source={require('@/assets/images/7.png')}
          style={styles.logos}
        />
      </TouchableOpacity>
      </View>
      <View style={styles.logoContainer}>
      <TouchableOpacity onPress={() => Linking.openURL('https://web.telegram.org/')}>
        <Image
          source={require('@/assets/images/4.png')}
          style={styles.logos}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL('https://web.whatsapp.com/')}>
        <Image
          source={require('@/assets/images/5.png')}
          style={styles.logos}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL('https://web.whatsapp.com/')}>
        <Image
          source={require('@/assets/images/6.png')}
          style={styles.logos}
        />
      </TouchableOpacity>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  logos: {
    width: 80,
    height:80,
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  fundo:{
    width: 550,
    height:400,
  },
  profile:{
    width: 100, 
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    left:100,
  }
});
