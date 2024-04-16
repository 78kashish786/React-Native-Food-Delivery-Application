import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { themeColors } from '../theme';
import Categories from '../components/Categories';
import { featured } from '../Constants';
import FeaturedRow from '../components/FeaturedRow';
const HomeScreen = () => {
    return (
        <SafeAreaView className="bg-white">
            {/* <StatusBar barStyle={"dark-content"} /> */}
            <View className="flex-row items-center space-x-2 px-4 pb-2 mt-10">
                <View className="flex-row items-center flex-1 p-3 rounded-full border border-gray-300">
                    <FontAwesome name="search" size={20} color="black" />
                    <TextInput placeholder='Restaurants' className='ml-3 flex-1' />
                    <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300 ">
                        <Feather name="map-pin" size={20} color="black" />
                        <Text className='text-gray-600 text-[10px]'>New York, NY</Text>
                    </View>
                </View>

                <View style={{ backgroundColor: themeColors.bgColor(1) }} className='p-3   rounded-full'>
                    <Feather name="sliders" size={20} color="black" />
                </View>
            </View>
            <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }}>
                {/* CATEGORIES */}
                <Categories />

                {/* Featured */}
                <View className='mt-5'>
                    {
                        [featured, featured, featured].map((item, index) => {
                            return (
                                <FeaturedRow
                                    key={index}
                                    title={item.title}
                                    restaurants={item.restaurants}
                                    description={item.description}
                                />
                            )
                        })
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})