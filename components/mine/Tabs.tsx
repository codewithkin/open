import { ReactNode, useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { Container } from '../Container';

export type Option = {
    name: string,
    content: ReactNode
}

const Tabs = ({ options }: { options: Option[] }) => {
    const [activeTab, setActiveTab] = useState(options[0]);

    return (
        <View className="h-full flex flex-col">
            <View className='my-4 border-b border-gray-400 flex flex-row items-center gap-4 p-4 w-full'>
                {
                    options.map((option: Option, index: number) => {
                        const isActive = option.name === activeTab.name;

                        return (
                            <Pressable key={index} onPress={() => setActiveTab(option)}>
                                <View className={`${isActive ? "border-white" : "border-gray-400"} border rounded-full py-2 px-4`}>
                                    < Text className={` ${isActive ? "text-white" : "text-gray-400"} capitalize text-md font-semibold`
                                    }>
                                        {option.name}
                                    </Text >
                                </View >
                            </Pressable >
                        )
                    })
                }
            </View >

            <View className='px-2 py-4'>
                {activeTab.content}
            </View>
        </View >
    )
}

export default Tabs