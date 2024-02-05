import { Link } from "expo-router";
import { View, Text, Touchable, TouchableOpacity } from "react-native";
import Animated from "react-native-reanimated";

export default function Page() {
  return (
    <View className="flex flex-1 justify-center items-center">
      <Link href="/shared-element/page2" asChild>
        <TouchableOpacity className="bg-blue-500 p-4 rounded-full">
          <Text className="text-white">Go to Page 2</Text>
        </TouchableOpacity>
      </Link>
      <Animated.View
        sharedTransitionTag="box"
        className="w-full h-40 bg-red-500"
        style={{
          width: "100%",
          height: 160,
        }}
      >
        <Text>Page 1</Text>
      </Animated.View>
    </View>
  );
}
