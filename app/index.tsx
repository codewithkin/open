import { Stack, Link, router } from 'expo-router';
import { ImageBackground, Text, View } from 'react-native';

import { Button } from '~/components/Button';
import { Container } from '~/components/Container';

// TODO: Add Moti animations to this page

export default function Home() {
  return (
    <>
      <Stack.Screen options={{
        headerShown: false
      }} />
      <ImageBackground
        className="w-full h-full relative"
        source={{
          uri: "https://imgs.search.brave.com/Lc-IBReFhsIKzLbSCIHpmw2RxOVal77eK-5_LqXTcZA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzg2LzQx/L2U3Lzg2NDFlN2Vk/ZGFkNmU3MzFkZjM0/N2I3NjhiN2ZiOGQy/LmpwZw"
        }}>
        {/* Floating dark overlay */}
        <View className="w-full h-full absolute bg-black opacity-70"></View>
        <Container>
          <View className="h-full flex flex-col justify-end gap-12">
            {/* Copy */}
            <View className="flex flex-col">
              <Text className='text-4xl font-semibold text-white mb-2 text-center'>Welcome to Open</Text>
              <Text className='text-md text-gray-400 text-center'>A safe space to let it all out, no cricism, no judgement...completely anonymous</Text>
            </View>

            <Button onPress={() => {
              router.push("/(tabs)/feed")
            }} title="Enter the space">Enter the space</Button>
          </View>
        </Container>
      </ImageBackground>

    </>
  );
}
