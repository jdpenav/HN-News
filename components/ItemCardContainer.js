import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { FontAwesome, MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const ItemCardContainer = ({ imageSrc, title, location, date, pagina, data }) => {

  const navigation = useNavigation();

  return (
    <TouchableOpacity

      onPress={() => navigation.navigate(pagina, {param: data})}
      className="rounded-md border border-gray-300 space-y-2 px-3 py-2 shadow-md bg-white w-[162px] my-1">
      <Image
        source={{ uri: imageSrc }}
        className="w-full h-40 rounded-md object-cover"
      />
      {title ? (
        <>
          <Text className="text-[#0B646B] text-[14px] font-bold">
            {title?.length > 25 ? `${title.slice(0, 25)}..` : title}
          </Text>

          <View className="flex-row items-center space-x-1">
            <FontAwesome name="map-marker" size={20} color="#EE2B2B" />
            <Text className="text-[#0B646B] text-[14px] font-bold">
              {location?.length > 18 ? `${location.slice(0, 18)}..` : location}
            </Text>
          </View>

          <View className="flex-row items-center space-x-1">
            <MaterialIcons name="date-range" size={20} color="#EE2B2B" />
            <Text className="text-[#0B646B] text-[14px] font-bold">
              {date?.length > 18 ? `${date.slice(0, 18)}..` : date}
            </Text>
          </View>
        </>
      ) : (
        <></>
      )}


    </TouchableOpacity>
  )
}

export default ItemCardContainer