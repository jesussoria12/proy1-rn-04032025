import { Image, StyleSheet, Platform } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/mental-health-logo.png')} // Cambia esta imagen según tu logo
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bienvenido a Psicomental Salud</ThemedText>
        <HelloWave />
      </ThemedView>
      
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">🌿 Detección temprana con IA</ThemedText>
        <ThemedText>
          Realiza un test de autodiagnóstico basado en inteligencia artificial y recibe orientación personalizada sobre tu salud mental.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">📅 Gestión eficiente de citas</ThemedText>
        <ThemedText>
          Agenda consultas con especialistas de manera rápida y sencilla, optimizando la atención en el consultorio.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">📊 Análisis de datos y predicción</ThemedText>
        <ThemedText>
          Nuestro sistema analiza tendencias para mejorar la intervención y fidelización de pacientes con planes de tratamiento personalizados.
        </ThemedText>
      </ThemedView>
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
  headerImage: {
    height: 250,
    width: 250,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
