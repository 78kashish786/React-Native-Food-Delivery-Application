import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from './screens/HomeScreen'
import RestaurantScreen from './screens/RestaurantScreen'
import CartScreen from './screens/CartScreen'
import OrderPreparingScreen from './screens/OrderPreparingScreen'
import DeliveryScreen from './screens/DeliveryScreen'

const RNNavigation = () => {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen
          name='home'
          component={HomeScreen}

        />
        <Stack.Screen
          name='restaurant'
          component={RestaurantScreen}

        />
        <Stack.Screen
          name='cartscreen'
          component={CartScreen}
          screenOptions={{
            presentation: "modal"
          }}

        />
        <Stack.Screen name='orderpreparing' component={OrderPreparingScreen}
          screenOptions={{
            presentation: 'fullScreenModal'
          }}
        />
        <Stack.Screen name='delivery' component={DeliveryScreen}
          screenOptions={{
            presentation: 'fullScreenModal'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RNNavigation

const styles = StyleSheet.create({})