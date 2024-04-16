import { ScrollView, Image, StyleSheet, Text, View, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { FontAwesome6 } from '@expo/vector-icons';
import { themeColors } from '../theme';
import { FontAwesome5 } from '@expo/vector-icons';
import DishRow from '../components/DishRow';
import CartIcon from '../components/CartIcon';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../Slices/RestaurantSlice';
const RestaurantScreen = () => {
  const { params } = useRoute();
  let item = params;
  console.log("Restaurants, ", item);

  const dispatch = useDispatch();

  useEffect(() => {
    if( item && item.id){
      dispatch(setRestaurant({...item}))
    }
  }, [])

  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <CartIcon />
      <StatusBar style='light' />
      <ScrollView >
        <View className="relative">
          <Image className='w-full h-72' source={item.image} />
          <TouchableOpacity
            className='absolute top-5 left-5 bg-gray-50 p-2 rounded-full shadow'
            onPress={() => navigation.goBack()}
          >
            <FontAwesome6 name="arrow-left-long" size={24} color={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>
        <View style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
          className='bg-white -mt-12  pt-6'
        >
          <View className='px-5'>
            <Text className='text-2xl font-bold'>{item.name}</Text>
            <View className='flex-row space-x-4 py-2 '>


              <View className="flex-row items-center space-x-4"><Image source={require('../assets/images/fullStar.png')} className='h-4 w-4' />
                <Text className='text-xs'>
                  <Text className='text-green-700'>{item.stars}</Text>
                  <Text className='text-gray-500'>  ({item.reviews})</Text>
                  <Text className='font-semibold'>{item.category}</Text>
                </Text>
              </View>
              <View className='flex-row items-center space-x-1'>
                <FontAwesome5 name="map-marked-alt" size={16} color="gray" />
                <Text className='text-gray-500 text-xs'>  Nearby{item.address}</Text>
              </View>

            </View>
            <Text className='text-gray-500 mt-2'>{item.description}</Text>
          </View>
        </View>
        {/* Menu */}
        <View className='pb-3 bg-white'>
          <Text className='px-4 py-4 text-2xl font-bold'>Menu</Text>
          {/* Dishes */}
          {
            item.dishes.map((dish, index) => <DishRow item={{ ...dish }} key={index} />)
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default RestaurantScreen
