import { Image, Text, TouchableOpacity, View } from "react-native"
import { Minus, Plus } from "react-native-feather"

const DishComponent = ({ item }) => {
    return (
        <View className='flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 m'>
            <Image className='rounded-3xl' style={{ height: 100, width: 100 }} source={item.image} />
            <View className='flex flex-1 space-y-3'>
                <View className='pl-3'>
                    <Text className='text-xl'>{item.name}</Text>
                    <Text className='text-gray-700'>{item.description}</Text>
                </View>
                <View className='flex-row justify-between pl-3 items-center'>
                    <Text className='text-gray-700 text-lg'>${item.price}</Text>
                    <View className='flex-row items-center'>
                        <TouchableOpacity className='p-1 rounded-full' style={{ backgroundColor: 'rgb(249 115 22)' }}>
                            <Minus strokeWidth={2} height={20} stroke='white' />
                        </TouchableOpacity>
                        <Text className='px-3'>{2}</Text>
                        <TouchableOpacity className='p-1 rounded-full' style={{ backgroundColor: 'rgb(249 115 22)' }}>
                            <Plus strokeWidth={2} height={20} stroke='white' />
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </View>
    )
}

export default DishComponent
