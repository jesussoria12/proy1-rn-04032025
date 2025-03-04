import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function ExploreScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/mental-health-logo.png')}
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bienvenido a Psicomental Salud</ThemedText>
      </ThemedView>
      <ThemedText>
        Nuestra misión es brindarte herramientas para mejorar tu bienestar mental y emocional.
      </ThemedText>

      <Collapsible title="¿Qué es la salud mental?">
        <ThemedText>
          La salud mental es clave para una vida plena. Incluye nuestro bienestar emocional,
          psicológico y social, afectando cómo pensamos, sentimos y actuamos en la vida diaria.
        </ThemedText>
      </Collapsible>

      <Collapsible title="Servicios de la App">
        <ThemedText>
          - Test de bienestar emocional 📊{'\n'}
          - Consejos y ejercicios de relajación 🧘{'\n'}
          - Contacto con especialistas en salud mental 👩‍⚕️{'\n'}
          - Espacios de apoyo y comunidad 🤝
        </ThemedText>
      </Collapsible>

      <Collapsible title="Recursos y artículos">
        <ThemedText>
          Explora artículos y guías sobre manejo del estrés, ansiedad y autoestima. Aprende a
          fortalecer tu salud mental con información basada en evidencia.
        </ThemedText>
        <ExternalLink href="https://www.who.int/es/health-topics/mental-health">
          <ThemedText type="link">Organización Mundial de la Salud</ThemedText>
        </ExternalLink>
      </Collapsible>

      <Collapsible title="Soporte y Contacto">
        <ThemedText>
          ¿Necesitas ayuda? Contáctanos a través de la app para recibir orientación profesional.
        </ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    height: 250,
    width: 250,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
});

