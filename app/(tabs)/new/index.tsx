import { View, Text } from 'react-native'
import { Container } from '~/components/Container'
import { TodayConfessions } from '~/components/mine/FeedTabs'
import Tabs, { Option } from '~/components/mine/Tabs'

const Feed = () => {
    const tabs: Option[] = [
        {
            name: "text",
            content: <TodayConfessions />
        },
        {
            name: "audio",
            content: <TodayConfessions />
        }
    ]

    return (
        <View className="bg-[#102321] min-h-screen">
            <View className='flex w-full flex-col justify-center items-center py-4 mt-8'>
                <Text className='text-white text-xl font-semibold'>Upload a new confession</Text>
            </View>

            {/* Tabs */}
            <Tabs options={tabs} />
            <Text className='text-lg text-white mt-4'>You're completely anonymous</Text>
        </View>
    )
}

export default Feed