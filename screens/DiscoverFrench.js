import { View, Text, Image, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';
import { Avatar, Spanish, English, French } from '../assets';
import MenuContainer from '../components/MenuContainer';
import ItemCardContainer from '../components/ItemCardContainer';
import { getPlacesData } from '../api';



const DiscoverFrench = () => {

    const [type, setType] = useState("français");
    const [isLoading, setIsLoading] = useState(false);
    const [mainData, setMainData] = useState([]);
    const [bl_lat, setBl_lat] = useState(null);
    const [bl_lng, setBl_lng] = useState(null);
    const [tr_lat, setTr_lat] = useState(null);
    const [tr_lng, setTr_lng] = useState(null);

    const navigation = useNavigation();



    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });

    }, []);

    useEffect(() => {
        setIsLoading(true);
        getPlacesData(bl_lat, bl_lng, tr_lat, tr_lng, type).then((data) => {
            setMainData(data);
            setInterval(() => {
                setIsLoading(false);
            }, 2000);
        });
    }, [bl_lat, bl_lng, tr_lat, tr_lng, type]);


    return (
        <SafeAreaView className="flex-1 bg-white relative">
            <View className="flex-row items-center justify-between px-8">
                <View>
                    <Text className="text-[40px] text-[#0B646B] font-bold">ACTUALITÉS</Text>
                    <Text className="text-[#527283] text-[32px]">Page Principale</Text>
                </View>

                <View className="w-12 h-12 bg-gray-400 rounded-md items-center justify-center">
                    <Image source={Avatar} className="w-full h-full rounded-md object-cover"></Image>
                </View>

            </View>

            <View className="flex-row items-center bg-whitemx-4 rounded-xl py-1 px-4 shadow-lg mt-4">
                <GooglePlacesAutocomplete
                    GooglePlacesDetailsQuery={{ fields: "geometry" }}
                    placeholder='Recherche'
                    fetchDetails={true}
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        console.log(details?.geometry?.viewport);
                        setBl_lat(details?.geometry?.viewport?.southwest?.lat)
                        setBl_lng(details?.geometry?.viewport?.southwest?.lng)
                        setTr_lat(details?.geometry?.viewport?.northeast?.lat)
                        setTr_lng(details?.geometry?.viewport?.northeast?.lng)
                    }}
                    query={{
                        key: 'AIzaSyDREppjwIscPbvUuAblxCPfa65SEjlIqrw',
                        language: 'en',
                    }}
                />
            </View>

            {/*MENU*/}

            {isLoading ? (
                <View className="flex-1 items-center justify-center">
                    <ActivityIndicator size="large" color="#5DC1B9" />
                </View>) : (
                <ScrollView>
                    <View className=" flex-row items-center justify-between px-8 mt-8">
                        <MenuContainer
                            key={"spanish"}
                            title="Espagnol"
                            imageSrc={Spanish}
                            type={type}
                            setType={setType}
                            pagina={"Discover"}
                        />

                        <MenuContainer
                            key={"english"}
                            title="Anglais"
                            imageSrc={English}
                            type={type}
                            setType={setType}
                            pagina={"DiscoverEnglish"}
                        />

                        <MenuContainer
                            key={"french"}
                            title="Français"
                            imageSrc={French}
                            type={type}
                            setType={setType}
                            pagina={"DiscoverFrench"}
                        />
                    </View>

                    <View>
                        <View className="flex-row items-center justify-between px-4 mt-8">
                            <Text className="text-[#2C7379] text-[28px] font-bold">
                                Nouvelles récentes
                            </Text>
                            <TouchableOpacity className="flex-row items-center justify-center space-x-2">
                                <Text className="text-[#A0C4C7] text-[20px] font-bold">
                                    Explorer
                                </Text>
                                <FontAwesome
                                    name="long-arrow-right"
                                    size={24}
                                    color="#A0C4C7"
                                />
                            </TouchableOpacity>
                        </View>

                        <View className="px-4 mt-8 flex-row items-center justify-evenly flex-wrap">
                            <ItemCardContainer
                                key={1}
                                imageSrc={
                                    "https://cope-cdnmed.agilecontent.com/img/brand/cope-redes-sociales.jpg"
                                }
                                title={'Bruxelles reporte la décision sur la fusion entre Orange et MásMóvil sans fixer de date et demande un complément dinfoormationn'}
                                location={'Bruxelles'}
                                date={'2023-07-28'}
                                pagina={"ItemFrench"}
                                data={'Hola'}
                            />

                            <ItemCardContainer
                                key={2}
                                imageSrc={
                                    "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2023/07/28/16905399284348.jpg"
                                }
                                title={'Résultats des essais libres 1 du GP belge de F1'}
                                location={'Belgique'}
                                date={'2023-07-28'}
                                pagina={"ItemFrench"}
                                data={'Hola'}
                            />

                            <ItemCardContainer
                                key={3}
                                imageSrc={
                                    "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0728%2Fr1203211_2_1296x729_16%2D9.jpg"
                                }
                                title={'Le PSG surpris par le Cerezo Osaka lors de son deuxième match amical au Japon - ESPN'}
                                location={'Japon'}
                                date={'2023-07-28'}
                                pagina={"ItemFrench"}
                                data={'Hola'}
                            />

                            <ItemCardContainer
                                key={4}
                                imageSrc={
                                    "https://agn.gt/wp-content/uploads/2023/07/Otorgaran-mas-5-mil-becas-para-artesanos-durante-2023.jpg"
                                }
                                title={'Plus de 5 000 bourses détudes pour les artisans seront attribuées en 2023'}
                                location={'Guatemala'}
                                date={'2023-07-28'}
                                pagina={"ItemFrench"}
                                data={'Hola'}
                            />

                            <ItemCardContainer
                                key={5}
                                imageSrc={
                                    "https://cdn-3.expansion.mx/dims4/default/0604783/2147483647/strip/true/crop/877x493+0+0/resize/1200x675!/format/webp/quality/60/?url=https%3A%2F%2Fcdn-3.expansion.mx%2Ffd%2F5a%2F283fd30b4b5a9152f08effcc4a09%2Fcarga-refrigerada-mexico.png"
                                }
                                title={'Pourquoi CPKC, Maersk et Traxion investissent-ils dans la logistique frigorifique ? '}
                                location={'Mexique'}
                                date={'2023-07-28'}
                                pagina={"ItemFrench"}
                                data={'Hola'}
                            />

                            <ItemCardContainer
                                key={6}
                                imageSrc={
                                    "https://static.dw.com/image/66376280_6.jpg"
                                }
                                title={'Le général Tiani à la tête de la junte putschiste nigériane - DW'}
                                location={'Le Nigeria'}
                                date={'2023-07-28'}
                                pagina={"ItemFrench"}
                                data={'Hola'}
                            />

                        </View>



                    </View>
                </ScrollView>
            )}
        </SafeAreaView>
    )
}

export default DiscoverFrench