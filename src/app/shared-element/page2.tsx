import { View, Text } from "react-native";
import Animated from "react-native-reanimated";

export default function Page() {
  return (
    <View className="flex flex-1">
      <Animated.View
        sharedTransitionTag="box"
        className="w-full h-80 bg-red-500 z-10"
      >
        <Text>Page 2</Text>
      </Animated.View>
    </View>
  );
}
