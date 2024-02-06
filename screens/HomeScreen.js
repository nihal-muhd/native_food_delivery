import { SafeAreaView } from "react-native-safe-area-context"
import CategoryComponent from "../components/Category"
import SearchComponent from "../components/Search"
import { ScrollView, View } from "react-native"
import { featured } from "../constants"
import FeaturedComponent from "../components/Featured"

const HomeScreen = () => {
    return (
        <SafeAreaView className='bg-white'>
            <SearchComponent />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }}>
                <CategoryComponent />
                <View className='mt-4'>
                    {featured.map((feature, index) => <FeaturedComponent key={index} title={feature.title} description={feature.description} restaurants={feature.restaurants} />)}
                </View>
            </ScrollView >
        </SafeAreaView>
    )
}

export default HomeScreen
