import { useNavigation } from '@react-navigation/native';
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { ArrowLeft, Phone, X } from 'react-native-feather';
import MapView, { Marker } from 'react-native-maps';

const DeliveryScreen = () => {
    const navigation = useNavigation()
    return (
        <View className="flex-1" >
            <TouchableOpacity onPress={() => navigation.navigate('Home')} className='z-10 absolute top-10 left-4 bg-gray-50 p-2 rounded-full shadow'>
                <ArrowLeft strokeWidth={3} stroke="orange" />
            </TouchableOpacity>
            <MapView
                initialRegion={{
                    latitude: 22.3,
                    longitude: 44.2,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
                className="flex-1"
                mapType="standard"
            >
                <Marker
                    coordinate={{
                        latitude: 22.3,
                        longitude: 44.2
                    }}
                    title='PPA Johns'
                    description='Authentic food'
                    pinColor='red'
                />
            </MapView>

            <View className="rounded-t-3xl -mt-12 bg-white relative">
                <TouchableOpacity className="absolute right-4 top-2">

                </TouchableOpacity>
                <View className="flex-row justify-between px-5 pt-10">
                    <View>
                        <Text className="text-lg text-gray-700 font-semibold">Estimated Arrival</Text>
                        <Text className="text-3xl font-extrabold text-gray-700">20-30 Minutes</Text>
                        <Text className="mt-2 text-gray-700 font-semibold">Your Order is own its way</Text>
                    </View>
                    <Image className="h-24 w-24" source={require('../assets/images/bikeGuy2.gif')} />
                </View>

                <View
                    className="p-2 flex-row justify-between items-center rounded-full my-5 mx-2 bg-orange-400">
                    <View style={{ backgroundColor: 'rgba(255,255,255,0.4)' }} className="p-1 rounded-full">
                        <Image style={{ backgroundColor: 'rgba(255,255,255,0.4)' }} className="w-16 h-16 rounded-full" source={require('../assets/images/deliveryGuy.png')} />
                    </View>

                    <View className="flex-1 ml-3">
                        <Text className="text-lg font-bold text-white">Syed Noman</Text>
                        <Text className="text-white font-semibold">Your Rider</Text>
                    </View>
                    <View className="flex-row items-center space-x-3 mr-3">
                        <TouchableOpacity className="bg-white p-2 rounded-full">
                            <Phone fill='gray' stroke='gray' strokeWidth="1" />
                        </TouchableOpacity>

                        <TouchableOpacity className="bg-white p-2 rounded-full">
                            <X stroke={'red'} strokeWidth="5" />
                        </TouchableOpacity>

                    </View>

                </View>
            </View>
        </View>
    )
}

export default DeliveryScreen
