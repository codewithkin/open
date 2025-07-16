import { View, Text } from 'react-native'
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Tabs } from 'expo-router'

const TabsLayout = () => {
    return (
        <Tabs screenOptions={{
            tabBarActiveBackgroundColor: "#183431",
            tabBarInactiveBackgroundColor: "#183431",
        }}>
            <Tabs.Screen
                name="feed"
                options={{
                    headerShown: false,
                    tabBarLabel: "",
                    tabBarIcon: ({ size }) => (
                        <Feather name="book-open" size={size} color={"white"} />
                    )
                }}
            />

            <Tabs.Screen
                name="new"
                options={{
                    headerShown: false,
                    tabBarLabel: "",
                    tabBarIcon: ({ size }) => (
                        <AntDesign name="pluscircleo" size={size} color="white" />
                    )
                }}
            />
        </Tabs>
    )
}

export default TabsLayout