import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native';
import { FontAwesome, FontAwesome5, MaterialIcons } from "@expo/vector-icons";

const ItemEnglish = ({ route }) => {

    const navigation = useNavigation();

    const data = route?.params?.param;

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });

    }, []);


    return (
        <SafeAreaView className="flex-1 bg-white relative">
            <ScrollView className="flex-1 px-4 py-6">
                <View className="relative bg-white shadow-lg">
                    <Image
                        source={{
                            uri:
                                "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0728%2Fr1203211_2_1296x729_16%2D9.jpg"
                        }}
                        className="w-full h-72 object-cover rounded-2xl top-4"
                    />

                    <View className="absolute flex-row inset-x-0 top-5 justify-between px-6">
                        <TouchableOpacity
                            onPress={() => navigation.navigate("DiscoverEnglish", { param: data })}
                            className="w-10 h-10 rounded-md items-center justify-center bg-white">
                            <FontAwesome name="chevron-left" size={24} color="black" />
                        </TouchableOpacity>


                    </View>
                </View>

                <View className="mt-6">
                    <Text className="text-[#428288] text-[24px] font-bold">
                        PSG stunned by Cerezo Osaka in second friendly in Japan - ESPN
                    </Text>
                    <View className="flex-row items-center space-x-2 mt-2">
                        <FontAwesome name="map-marker" size={25} color="#8C9EA6" />
                        <Text className="text-[#8C9EA6] text-[20px] font-bold">
                            Japan
                        </Text>
                    </View>

                    <View className="flex-row items-center space-x-2 mt-2">
                        <MaterialIcons name="date-range" size={25} color="#8C9EA6" />
                        <Text className="text-[#8C9EA6] text-[20px] font-bold">
                            2023-07-28
                        </Text>
                    </View>

                    <Text className="mt-4 tracking-wide text-[16px] font-semibold text-[#97A6AF]">
                        In their second friendly on Japanese soil, PSG were stunned by Cerezo Osaka as they lost 3-2 at the Yanmar Stadium Nagai. Luis Enrique's team, which was without Kylian Mbappé and will be without him for the rest of the tour following the dispute over his contract situation, started with a goal by Hugo Ekitike in the 17th minute. Jordy Croux equalized in the 22nd minute, Vitinha scored again for the French in the 49th minute, and Sota Kitano first in the 67th minute, and then Shinji Kagawa in the 79th minute, reversed history for the locals. Uruguayan midfielder Manuel Ugarte started for PSG, being replaced in the 64th minute by Lucas Hernández. Brazil's Neymar was again on the substitutes' bench and continues to see no action.
                        The tour of Japan is proving to be a headache for the last Ligue 1 champions, as they drew 0-0 in their first match against Al-Nassr.
                    </Text>

                </View>





            </ScrollView>
        </SafeAreaView>
    )
}

export default ItemEnglish