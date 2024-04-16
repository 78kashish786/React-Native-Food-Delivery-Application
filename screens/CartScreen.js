import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { themeColors } from '../theme'
import { FontAwesome6 } from '@expo/vector-icons';
import { featured } from '../Constants';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons'
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, selectCartItems, selectTotal } from '../Slices/CartSlice';
const CartScreen = () => {

  const restaurant = useSelector(state => state.restaurant.restaurant);
  const navigation = useNavigation();
  const deliveryfee = 20;

  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectTotal);
  const [groupedItems, setGroupedItem] = useState({});

  useEffect(()=>{
    if(cartItems.length ==0){
      navigation.goBack();
    }
  },[cartItems])

  const dispatch = useDispatch();
  useEffect(() => {
    const items = cartItems.reduce((group, item) => {
      if (group[item.id]) {
        group[item.id].push(item);
      } else {
        group[item.id] = [item];
      }
      return group;
    }, {})

    setGroupedItem(items);
  }, [cartItems])
  return (
    <View className='flex-1 bg-white '>
      <View className='relative py-4 shadow-sm'>
        <TouchableOpacity style={{ backgroundColor: themeColors.bgColor(1) }}
          className='absolute z-10 rounded-full p-2 shadow  top-5 left-3'
          onPress={() => navigation.goBack()}
        >
          <FontAwesome6 name="arrow-left-long" size={24} color={"white"} />

        </TouchableOpacity>
        <View>
          <Text className='text-center font-bold text-xl'>Your Cart</Text>
          <Text className='text-center text-gray-500'>{restaurant.name}</Text>
        </View>
      </View>
      {/* Delivery time */}
      <View style={{ backgroundColor: themeColors.bgColor(.2) }} className='flex-row px-4 items-center'>
        <Image source={require('../assets/images/bikeGuy.png')} className='w-20 h-20 rounded-full' />
        <Text className='flex-1 pl-4'>Deliver in 20 to 30 minutes </Text>
        <TouchableOpacity>
          <Text className='font-bold ' style={{ color: themeColors.text }}>Change</Text>
        </TouchableOpacity>

      </View>
      {/* Dishes */}
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 50
        }}
        className='bg-white pt-5 '
      >
        {
          Object.entries(groupedItems).map(([key, items]) => {
            let dish = items[0];
            return (
              <View key={key} className='flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-md'>
                <Text className='font-bold ' style={{ color: themeColors.text }}>
                  {items.length} x
                </Text>
                <Image className='h-14 w-14 rounded-full' source={dish.image} />
                <Text className='flex-1 font-bold text-gray-700'>{dish.name}
                </Text>
                <Text className='font-semibold text-base'>$ {dish.price}
                </Text>
                <TouchableOpacity
                  onPress={() => dispatch(removeFromCart({id:dish.id}))}
                  style={{ backgroundColor: themeColors.bgColor(1) }} className='p-1 rounded-full'>
                  <Entypo name='minus' color={'white'} size={20} />
                </TouchableOpacity>
              </View>
            )
          })
        }

      </ScrollView>
      {/* Totals*/}
      <View className='p-6 px-8 rounded-t-3xl space-y-4' style={{ backgroundColor: themeColors.bgColor(.2) }}>
        <View className='flex-row justify-between'>
          <Text className='text-gray-700'>SubTotlal</Text>
          <Text className='text-gray-700'>{cartTotal}</Text>
        </View>
        <View className='flex-row justify-between'>
          <Text className='text-gray-700'>Delivery Fee</Text>
          <Text className='text-gray-700'>{'$20'}</Text>
        </View>
        <View className='flex-row justify-between'>
          <Text className='text-gray-700 font-extrabold'>Total</Text>
          <Text className='text-gray-700 font-extrabold'>{cartTotal+deliveryfee}</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('orderpreparing')}
            style={{ backgroundColor: themeColors.bgColor(1) }} className='p-3 rounded-full'>
            <Text className='text-white text-center font-bold'>Place Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({})