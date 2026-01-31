import { Tabs } from 'expo-router'
import { View, Text } from 'react-native'
import IonIcons from '@expo/vector-icons/Ionicons'

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{}}
    >
      <Tabs.Screen name="index" options={{
        title: "Todos",
        tabBarIcon: ({ color, size }) => (
          <IonIcons name='flash-outline' />
        )
      }}/>

      <Tabs.Screen name="settings" options={{
        title: "Todos",
        tabBarIcon: ({ color, size }) => (
          <IonIcons name='settings' />
        )
      }}/>

    </Tabs>
  )
}

export default TabsLayout