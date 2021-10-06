import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

export default function HomeScreen() {
  const scale = useSharedValue(1);

  const scaleStyles = useAnimatedStyle(() => ({
    transform: [{scale: scale.value}],
  }));

  useEffect(() => {
    scale.value = withSpring(1.4);
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Animated.View
        style={[
          {
            width: 100,
            height: 100,
            backgroundColor: 'red',
          },
          scaleStyles,
        ]}
      />
      <Text>Home screen</Text>
    </View>
  );
}
