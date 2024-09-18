import React, { useEffect, useRef } from 'react';
import { View, Text, Animated } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);

export default function SplashScreen() {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 2000, 
        useNativeDriver: true,
      })
    ).start();
  }, [rotateAnim]);

  const rotateInterpolate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <StyledView className="bg-gradient-to-br from-teal-400 to-indigo-600 flex-1 items-center justify-center">
      <Animated.View
        style={{
          transform: [{ rotate: rotateInterpolate }],
        }}
        className='bg-white rounded-full w-56 h-56 shadow-2xl flex items-center justify-center'
      >
        <StyledView className="bg-white w-44 h-44 rounded-full flex items-center justify-center border-4 border-blue-600">
          <StyledText className="text-3xl font-extrabold text-blue-600 tracking-widest">
            Md Yamin
          </StyledText>
        </StyledView>
      </Animated.View>
    </StyledView>
  );
}
