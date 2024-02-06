import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import RestaurantCardComponent from './RestaurantCard'

const FeaturedComponent = ({ title,
    description,
    restaurants }) => {

    return (

        <View>
            <View className="flex-row justify-between items-center px-4">
                <View>
                    <Text className="font-bold text-lg">{title}</Text>
                    <Text className="text-gray-500 text-xs">
                        {description}
                    </Text>
                </View>
                <TouchableOpacity>
                    <Text className="font-semibold text-orange-500">See All</Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 15 }}>
                <View className='flex-row mt-3 mb-3'>
                    {restaurants.map((restaurant, index) => <RestaurantCardComponent key={restaurant.id}
                        id={restaurant.id}
                        imgUrl={restaurant.image}
                        title={restaurant.name}
                        rating={restaurant.rating}
                        type={restaurant.type?.name}
                        address="123 main street"
                        description={restaurant.description}
                        dishes={restaurant.dishes}
                        lng={restaurant.lng}
                        lat={restaurant.lat} />)}
                </View>
            </ScrollView>
        </View>
    )
}

export default FeaturedComponent
