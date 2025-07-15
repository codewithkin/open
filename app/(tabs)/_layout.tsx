import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const TabsLayout = () => {
    return (
        <Tabs screenOptions={{
            tabBarActiveBackgroundColor: "#183431"
        }}>
            <Tabs.Screen name="feed" options={{
                headerShown: false,
                tabBarLabel: "Feed"
            }} />
        </Tabs>
    )
}

export default TabsLayout