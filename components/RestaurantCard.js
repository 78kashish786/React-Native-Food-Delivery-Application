import { View, Text, TouchableWithoutFeedback, Image } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native'
const RestaurantCard = ({ item }) => {

    const navigation = useNavigation();
    return (
        <TouchableWithoutFeedback
            onPress={() => navigation.navigate('restaurant', {...item})}
        >
            <View style={{
                shadowColor: themeColors.bgColor(0.2),
                shadowRadius: 7,
            }} className='mr-6 bg-white rounded-3xl shadow-4xl border border-gray-200'>
                <Image className='h-36 w-64 rounded-t-3xl' source={item.image} />
                <View className="px-3 pb-4 space-y-2">
                    <Text className="text-lg font-bold pt-2">{item.name}</Text>
                    <View className="flex-row items-center space-x-1"><Image source={require('../assets/images/fullStar.png')} className='h-4 w-4' />
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
            </View>
        </TouchableWithoutFeedback >
    )
}

export default RestaurantCard
