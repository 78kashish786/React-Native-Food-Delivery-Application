import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { featured } from '../Constants'
import { useNavigation } from '@react-navigation/native'
import MapView, { Marker } from 'react-native-maps'
import { themeColors } from '../theme'
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux'
import { emptyCart } from '../Slices/CartSlice'
const DeliveryScreen = () => {

    const restaurant = useSelector(state => state.restaurant.restaurant);
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const cancelOrder = ()=>{
        navigation.navigate('home');
        dispatch(emptyCart());
    }
    return (
        <View className='flex-1'>
            <MapView
                initialRegion={{
                    latitude: restaurant.lat,
                    longitude: restaurant.lng,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                }}
                className='flex-1'
                mapType='standard'
            >
                <Marker coordinate={{
                    latitude: restaurant.lat,
                    longitude: restaurant.lng,

                }} title={restaurant.name}
                    description={restaurant.description}
                    pinColor={themeColors.bgColor(1)} />
            </MapView>
            <View className='rounded-t-3xl bg-white -mt-12 relative'>
                <View className='flex-row justify-between px-5 pt-10'>
                    <View>
                        <Text className='text-lg text-gray-700 font-semibold'>
                            Estimated Arrival
                        </Text>
                        <Text className='text-3xl text-gray-700 font-extrabold'>
                            20-30 Minutes
                        </Text>
                        <Text className=' mt-2 text-gray-700 font-semibold'>
                            Your order ison its way
                        </Text>
                    </View>
                    <Image source={require('../assets/images/bikeGuy2.gif')} className='w-24 h-24' />
                </View>
                <View style={{ backgroundColor: themeColors.bgColor(.8) }}
                    className='p-2 flex-row justify-between items-center rounded-full my-5 mx-2'
                >
                    <View className='p-1 flex-1 rounded-full flex-row justify-between items-center' style={{ backgroundColor: 'rgba(255,255,255.4)' }}>
                        {/* <Image className='w-16 h-16 rounded-full' source={require('../assets/images/deliveryGuy.png')} />
                        <View className='flex-1 ml-3'>
                            <Text className='text-lg font-bold text-white'>
                                Kashish
                            </Text>
                            <Text className='text-sm font-semibold text-white'>
                                Your Rider
                            </Text>
                        </View>
                        <View className='flex-row items-center space-x-3 mr-3'>
                            <TouchableOpacity className='bg-white p-2'>
                                <Entypo name="phone" size={24} color="white" />
                            </TouchableOpacity>
                            <TouchableOpacity className='bg-white p-2'>
                                <AntDesign name="close" size={24} color="white" />
                            </TouchableOpacity>
                        </View> */}
                        <TouchableOpacity className='p-3 rounded-full shadow-md  bg-white w-[45%]'>
                            <Text className='text-lg text-center font-semibold' style={{color:themeColors.text}}>
                                Go home
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity className='p-3 rounded-full shadow-md  bg-white w-[45%]'>
                            <Text 
                            onPress={cancelOrder}
                            className='text-lg text-center font-semibold' style={{color:themeColors.text}}>
                                Cancel order
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}
export default DeliveryScreen

