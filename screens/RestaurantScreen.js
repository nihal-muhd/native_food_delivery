import { useNavigation, useRoute } from "@react-navigation/native"
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { ArrowLeft, MapPin } from "react-native-feather";
import DishComponent from "../components/Dish";
import CartIconComponent from "../components/CartIcon";

const RestaurantScreen = () => {
    const { params } = useRoute()
    const navigation = useNavigation()
    return (
        <View>
            <CartIconComponent />
            <ScrollView>
                <View className='relative'>
                    <Image className='w-full h-72' source={params?.imgUrl} />
                    <TouchableOpacity onPress={() => navigation.goBack()} className='absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow'>
                        <ArrowLeft strokeWidth={3} stroke="orange" />
                    </TouchableOpacity>
                </View>
                <View style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }} className='bg-white -mt-12 pt-6'>
                    <View className='px-5'>
                        <Text className='text-3xl font-bold'>{params.title}</Text>
                        <View className='flex-row space-x-2 my-1'>
                            <View className="flex-row items-center space-x-1">
                                <Image source={require('../assets/images/fullStar.png')} className="h-4 w-4" />
                                <Text className="text-xs">
                                    <Text className="text-green-700">{params.rating}</Text>
                                    <Text className="text-gray-700"> ({params.reviews} review)</Text> · <Text className="font-semibold text-gray-700">{params.type}</Text>
                                </Text>
                            </View>
                            <View className="flex-row items-center space-x-1">
                                <MapPin color="gray" width={15} height={15} />
                                <Text className="text-gray-700 text-xs"> Nearby · {params.address}</Text>
                            </View>
                        </View>
                        <Text className='text-gray-500 mt-1'>{params.description}</Text>
                    </View>
                </View>
                <View className='pb-36 bg-white'>
                    <Text className='px-4 py-4 text-2xl font-bold' ></Text>
                    {/* dishes */}
                    {
                        params?.dishes.map((dish, index) => <DishComponent item={{ ...dish }} key={index} />)
                    }
                </View>
            </ScrollView>
        </View>

    )
}

export default RestaurantScreen
