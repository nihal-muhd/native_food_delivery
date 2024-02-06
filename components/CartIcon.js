import { useNavigation } from "@react-navigation/native"
import { Text, TouchableOpacity, View } from "react-native"


const CartIconComponent = () => {
    const navigation = useNavigation()

    return (
        <View className="absolute bottom-5 w-full z-50">
            <TouchableOpacity
                style={{ backgroundColor: 'rgb(249 115 22)' }}
                onPress={() => navigation.navigate('Cart')}
                className="flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg">
                <View className="p-2 px-4 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.3)' }}>
                    <Text className="font-extrabold text-white text-lg">{2}</Text>
                </View>

                <Text className="flex-1 text-center font-extrabold text-white text-lg">View Cart</Text>
                <Text className="font-extrabold text-white text-lg">${2}</Text>

            </TouchableOpacity>

        </View>
    )
}

export default CartIconComponent
