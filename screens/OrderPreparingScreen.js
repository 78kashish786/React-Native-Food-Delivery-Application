import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { themeColors } from '../theme';

const OrderPreparingScreen = () => {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('delivery');
        }, 3000)
    }, [])
    return (
        <View className=' bg-white flex-1 justify-center items-center'>
            <Image source={require('../assets/images/delivery.gif')} className='h-80 w-80' />
            <Text className='font-bold py-4' style={{ color: themeColors.text }}>Your Order is being prepared</Text>
        </View>
    )
}

export default OrderPreparingScreen