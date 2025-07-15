import { View, Text } from 'react-native'
import { Container } from '~/components/Container'
import { TodayConfessions } from '~/components/mine/FeedTabs'
import Tabs, { Option } from '~/components/mine/Tabs'

const Feed = () => {
    const tabs: Option[] = [
        {
            name: "trending",
            content: <TodayConfessions />
        },
        {
            name: "today",
            content: <TodayConfessions />
        },
        {
            name: "all time",
            content: <TodayConfessions />
        }
    ]

    return (
        <View className="bg-[#102321] min-h-screen">
            <View className='flex w-full flex-col justify-center items-center py-4 mt-8'>
                <Text className='text-white text-xl font-semibold'>Open</Text>
            </View>

            {/* Tabs */}
            <Tabs options={tabs} />
        </View>
    )
}

export default Feed