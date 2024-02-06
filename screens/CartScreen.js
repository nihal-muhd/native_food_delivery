import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { ArrowLeft, Minus } from 'react-native-feather'
import { SafeAreaView } from 'react-native-safe-area-context'

const CartScreen = () => {
    const navigation = useNavigation()
    return (
        // <SafeAreaView className='bg-white'>
        <View className=" bg-white flex-1 mt-5">
            {/* top button */}
            <View className="relative py-4 shadow-sm">
                <TouchableOpacity onPress={() => navigation.goBack()} className='z-10 absolute top-5 left-4 bg-gray-50 p-2 rounded-full shadow'>
                    <ArrowLeft strokeWidth={3} stroke="orange" />
                </TouchableOpacity>
                <View>
                    <Text className="text-center font-bold text-xl">Your cart</Text>
                    <Text className="text-center text-gray-500">Papa johns</Text>
                </View>

            </View>

            {/* delivery time */}
            <View className="flex-row px-4 items-center bg-orange-200">
                <Image source={require('../assets/images/bikeGuy.png')} className="w-20 h-20 rounded-full" />
                <Text className="flex-1 pl-4">Deliver in 20-30 minutes</Text>
                <TouchableOpacity>
                    <Text className="font-bold text-orange-500">Change</Text>
                </TouchableOpacity>
            </View>

            {/* dishes */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                className="bg-white pt-5"
                contentContainerStyle={{
                    paddingBottom: 50
                }}

            >
                <View
                    className="flex-row items-center space-x-3 py-2 px-4 bg-gray-50 rounded-3xl mx-2 mb-3 shadow-lg">
                    <Text className="font-bold text-orange-500">5 x </Text>
                    <Image className="h-14 w-14 rounded-full" source={require('../assets/images/pizzaDish.png')} />
                    <Text className="flex-1 font-bold text-gray-700">JJJ</Text>
                    <Text className="font-semibold text-base">$70</Text>
                    <TouchableOpacity
                        className="p-1 rounded-full bg-orange-500"
                    >
                        <Minus strokeWidth={2} height={20} width={20} stroke="white" />
                    </TouchableOpacity>
                </View>
                <View
                    className="flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-md">
                    <Text className="font-bold text-orange-500">5 x </Text>
                    <Image className="h-14 w-14 rounded-full" source={require('../assets/images/pizzaDish.png')} />
                    <Text className="flex-1 font-bold text-gray-700">JJJ</Text>
                    <Text className="font-semibold text-base">$70</Text>
                    <TouchableOpacity
                        className="p-1 rounded-full bg-orange-500"
                    >
                        <Minus strokeWidth={2} height={20} width={20} stroke="white" />
                    </TouchableOpacity>
                </View>
            </ScrollView>
            {/* totals */}
            <View style={{ backgroundColor: 'rgba(255,255,255,0.3)' }} className=" p-6 px-8 rounded-t-3xl space-y-4">
                <View className="flex-row justify-between">
                    <Text className="text-gray-700">Subtotal</Text>
                    <Text className="text-gray-700">$20</Text>
                </View>
                <View className="flex-row justify-between">
                    <Text className="text-gray-700">Delivery Fee</Text>
                    <Text className="text-gray-700">$22</Text>
                </View>
                <View className="flex-row justify-between">
                    <Text className="font-extrabold">Order Total</Text>
                    <Text className="font-extrabold">$42</Text>
                </View>
                <View>
                    <TouchableOpacity
                        className="p-3 rounded-full bg-orange-500" onPress={() => navigation.navigate('Preparing')}>

                        <Text className="text-white text-center font-bold text-lg">Place Order</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default CartScreen
