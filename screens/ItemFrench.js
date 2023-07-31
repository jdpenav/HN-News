import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native';
import { FontAwesome, FontAwesome5, MaterialIcons } from "@expo/vector-icons";

const ItemFrench = ({ route }) => {

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
                                "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2023/07/28/16905399284348.jpg"
                        }}
                        className="w-full h-72 object-cover rounded-2xl top-4"
                    />

                    <View className="absolute flex-row inset-x-0 top-5 justify-between px-6">
                        <TouchableOpacity
                            onPress={() => navigation.navigate("DiscoverFrench", { param: data })}
                            className="w-10 h-10 rounded-md items-center justify-center bg-white">
                            <FontAwesome name="chevron-left" size={24} color="black" />
                        </TouchableOpacity>


                    </View>
                </View>

                <View className="mt-6">
                    <Text className="text-[#428288] text-[24px] font-bold">
                        Résultats des essais libres 1 du GP belge de F1
                    </Text>
                    <View className="flex-row items-center space-x-2 mt-2">
                        <FontAwesome name="map-marker" size={25} color="#8C9EA6" />
                        <Text className="text-[#8C9EA6] text-[20px] font-bold">
                            Bruxelles, Belgique
                        </Text>
                    </View>

                    <View className="flex-row items-center space-x-2 mt-2">
                        <MaterialIcons name="date-range" size={25} color="#8C9EA6" />
                        <Text className="text-[#8C9EA6] text-[20px] font-bold">
                            2023-07-28
                        </Text>
                    </View>

                    <Text className="mt-4 tracking-wide text-[16px] font-semibold text-[#97A6AF]">
                        Max Verstappen a remporté le GP de Belgique après être remonté de la sixième place (pénalité de boîte de vitesses) sans effort apparent, en seulement 16 tours, soit un quart de la distance prévue. Le Néerlandais remporte sa dixième victoire de l'année 2023, sa huitième consécutive, pour réaliser un week-end Sprint complet sur le légendaire circuit de Spa.
                        Checo Pérez et Charles Leclerc, qui l'ont rejoint sur le podium, le suivent respectivement à 22 et 31 secondes. Fernando Alonso a terminé cinquième et Carlos Sainz a abandonné avec un trou sur le côté de sa voiture.
                        Comme prévu, le spectacle a été assuré par Red Bull, qui a pris la tête avec Perez dès le premier tour. Au départ, Sainz est passé de l'extérieur à l'intérieur à La Source, pour tenter de dépasser Piastri et de se hisser à la troisième place. Le contact de la Ferrari avec la McLaren a poussé cette dernière dans la barrière métallique. L'Australien est sorti au deuxième tour et Sainz est sorti après la moitié de la course, avec une SF-23 accidentée sur l'un de ses pontons. Norris est également parti en tête-à-queue au premier tour et l'équipe McLaren a dit adieu à ses chances de podium.
                    </Text>

                </View>





            </ScrollView>
        </SafeAreaView>
    )
}

export default ItemFrench