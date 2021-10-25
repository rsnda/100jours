import * as React from 'react'
import * as SplashScreen from 'expo-splash-screen'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Home, HowTo, Memory, Themes } from './src/screens'
import useDatabase from './src/database/useDatabase'
import { MemoriesContextProvider } from './src/context/MemoriesContext'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

function StackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeStack"
        component={Home}
        options={{ title: '100 Jours' }}
      />
      <Stack.Screen
        name="Memory"
        component={Memory}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default function App() {
  SplashScreen.preventAutoHideAsync() //don't let the splash screen hide

  const isDBLoadingComplete = useDatabase()
  if (isDBLoadingComplete) {
    SplashScreen.hideAsync()
    return (
      <MemoriesContextProvider>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName

                if (route.name === 'Home') {
                  iconName = focused ? 'home' : 'home-outline'
                } else if (route.name === 'HowTo') {
                  iconName = focused ? 'help-circle' : 'help-circle-outline'
                } else if (route.name === 'Themes') {
                  iconName = focused ? 'color-filter' : 'color-filter-outline'
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />
              },
              tabBarActiveTintColor: 'tomato',
              tabBarInactiveTintColor: 'gray',
            })}
          >
            <Tab.Screen
              name="Themes"
              component={Themes}
              options={{ title: 'Choose a theme' }}
            />
            <Tab.Screen
              name="Home"
              component={StackNav}
              options={{ headerShown: false }}
            />
            <Tab.Screen
              name="HowTo"
              component={HowTo}
              options={{ title: 'How to' }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </MemoriesContextProvider>
    )
  } else {
    return null
  }
}
