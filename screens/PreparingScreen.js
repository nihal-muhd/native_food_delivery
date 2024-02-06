import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react'
import { Image, View } from 'react-native'

const PreparingScreen = () => {
    const navigation = useNavigation();
    useEffect(() => {
        // setTimeout(() => {
        navigation.navigate('Delivery');
        // }, 3000);
    }, [])
    return (
        <View className="flex-1 bg-white justify-center items-center">
            <Image source={require('../assets/images/delivery.gif')} className="h-80 w-80" />
        </View>
    )
}

export default PreparingScreen
