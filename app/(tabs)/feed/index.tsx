import { View, Text } from 'react-native'
import { Container } from '~/components/Container'

const Feed = () => {
    return (
        <View className="bg-[#102321] min-h-screen">
            <Container>
                <View className='flex w-full flex-col justify-center items-center py-4'>
                    <Text className='text-white text-xl font-semibold'>Open</Text>
                </View>
            </Container>
        </View>
    )
}

export default Feed