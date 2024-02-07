import { useNavigation } from "@react-navigation/native"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { MapPin } from "react-native-feather"

const RestaurantCardComponent = ({ ...item }) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Restaurant', { ...item })}>
            <View className="mr-6 bg-white rounded-3xl shadow-lg shadow-orange-500">
                <Image className="h-36 w-64 rounded-t-3xl" source={item.imgUrl} />

                <View className="px-3 pb-4 space-y-2">

                    <Text className="text-lg font-bold pt-2">{item.title}</Text>
                    <View className="flex-row items-center space-x-1">
                        <Image source={require('../assets/images/fullStar.png')} className="h-4 w-4" />
                        <Text className="text-xs">
                            <Text className="text-green-700">{item.rating}</Text>
                            <Text className="text-gray-700"> ({item.reviews} review)</Text> · <Text className="font-semibold text-gray-700">{item.type}</Text>
                        </Text>
                    </View>
                    <View className="flex-row items-center space-x-1">
                        <MapPin color="gray" width={15} height={15} />
                        <Text className="text-gray-700 text-xs"> Nearby · {item.address}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default RestaurantCardComponent
