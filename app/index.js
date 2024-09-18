import { useEffect, useState } from 'react';
import { Text, View, Pressable, StyleSheet } from 'react-native';
import SplashScreen from '../components/SplashScreen';
import { styled } from 'nativewind';
import { useRouter } from 'expo-router';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledPressable = styled(Pressable);

const Home = () => {
  const [isSplashScreen, setIsSplashScreen] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setIsSplashScreen(false);
    }, 3000);
  }, []);

  if (isSplashScreen) {
    return <SplashScreen />;
  }

  return (
    <StyledView className="flex-1 bg-gradient-to-br from-blue-900 to-black justify-center items-center p-4">
      <StyledView className="bg-white rounded-lg shadow-lg p-6">
        <StyledText className="text-2xl font-bold mb-4 text-center text-gray-800">Welcome!</StyledText>
        <StyledText className="text-lg text-gray-600 mb-6 text-center">Click here to scan any QR/Bar code.</StyledText>
        <StyledPressable
          className="bg-blue-600 py-4 px-6 rounded-full shadow-md"
          onPress={() => router.push('/scan')}
        >
          <StyledText className="text-white text-lg font-semibold text-center">Open Scanner</StyledText>
        </StyledPressable>
      </StyledView>
    </StyledView>
  );
};

export default Home;
