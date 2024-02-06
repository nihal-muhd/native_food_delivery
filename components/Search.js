import { Text, TextInput, View } from "react-native"
import { MapPin, Search, Sliders } from "react-native-feather"

const SearchComponent = () => {
    return (
        <View className='flex-row items-center space-x-2 px-4 pb-2'>
            <View className='flex-row flex-1 items-center p-3 rounded-full border border-gray-300'>
                <Search height="25" width="25" stroke="gray" />
                <TextInput placeholder="Restaurants" className='ml-2 flex-1' />
                <View className='flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300'>
                    <MapPin height="20" width="20" stroke="gray" />
                    <Text className='text-gray-600'>Chennai</Text>
                </View>
            </View>
            <View className='p-3 rounded-full'>
                <Sliders height="20" width="20" stroke="gray" />
            </View>
        </View>
    )
}

export default SearchComponent
