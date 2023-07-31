import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native';
import { FontAwesome, FontAwesome5, MaterialIcons } from "@expo/vector-icons";

const Item = ({ route }) => {

  const navigation = useNavigation();

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
                "https://cope-cdnmed.agilecontent.com/img/brand/cope-redes-sociales.jpg"
            }}
            className="w-full h-72 object-cover rounded-2xl top-4"
          />

          <View className="absolute flex-row inset-x-0 top-5 justify-between px-6">
            <TouchableOpacity
              onPress={() => navigation.navigate("Discover", { param: data })}
              className="w-10 h-10 rounded-md items-center justify-center bg-white">
              <FontAwesome name="chevron-left" size={24} color="black" />
            </TouchableOpacity>


          </View>
        </View>

        <View className="mt-6">
          <Text className="text-[#428288] text-[24px] font-bold">
            Bruselas aplaza sin fecha su decisión sobre la fusión de Orange y MásMóvil y les pide más información
          </Text>
          <View className="flex-row items-center space-x-2 mt-2">
            <FontAwesome name="map-marker" size={25} color="#8C9EA6" />
            <Text className="text-[#8C9EA6] text-[20px] font-bold">
              Bruselas, Belgica
            </Text>
          </View>

          <View className="flex-row items-center space-x-2 mt-2">
            <MaterialIcons name="date-range" size={25} color="#8C9EA6" />
            <Text className="text-[#8C9EA6] text-[20px] font-bold">
              2023-07-28
            </Text>
          </View>

          <Text className="mt-4 tracking-wide text-[16px] font-semibold text-[#97A6AF]">
            La Comisión Europea ha "parado el reloj" en su investigación sobre la fusión entre Orange y MásMóvil en España debido a que las compañías no han facilitado a tiempo determinada "información importante" solicitada por Bruselas, por lo que la decisión definitiva se tomará más allá del 4 de septiembre, fecha inicial fijada para aprobar o no la operación. Según ha señalado a Europa Press la portavoz comunitaria de Competencia, Arianna Podesta, este procedimiento en las investigaciones sobre fusiones se activa si las partes "no facilitan a tiempo una información importante que la Comisión Europea les ha solicitado". "Una vez que las partes facilitan la información que falta, el reloj vuelve a ponerse en marcha y el plazo para la decisión de la Comisión se ajusta en consecuencia", ha añadido. Asimismo, fuentes conocedoras de la situación también han indicado a Europa Press que la decisión de Bruselas busca "disponer de más tiempo para evaluar el impacto que tiene la operación sobre la competencia". Bruselas inició el pasado abril una investigación en profundidad para determinar si la operación, que creará un nuevo líder por clientes en España, podría poner en riesgo la competencia en la oferta de paquetes de servicios múltiples y en el servicio minorista de banda ancha móvil y fija. En ese sentido, a finales del pasado junio Bruselas retiró sus consideraciones sobre el impacto que esta operación podría tener en el mercado mayorista, es decir, en lo referente a que un operador ofrezca sus redes a otros. Sin embargo, señaló que teme que esta operación reduzca el número de operadores de redes en los mercados minoristas españoles de servicios de telecomunicaciones móviles e internet y ello redunde en "grandes subidas de precios" para los clientes finales. La operación fue notificada al Ejecutivo comunitario el pasado 13 de febrero y, tras la investigación abierta en abril y el pliego de cargos notificado a finales de junio el plazo final para tomar una decisión estaba fijado, en principio, para el 4 de septiembre. Sin embargo, tras la decisión de Bruselas de "parar el reloj" ese plazo se ha ampliado, si bien no se ha fijado una nueva fecha para tomar la decisión definitiva sobre esta operación, valorada en unos 18.600 millones de euros. De hecho, el consejero delegado de MásMóvil, Meinrad Spenger, deslizó este viernes durante la conferencia con analistas en el marco de la presentación de los resultados del segundo trimestre que su previsión es que Bruselas tome su decisión en el cuarto trimestre del año. EVITAR CONDICIONES En este contexto, unos de los principales objetivos de Orange y de MásMóvil en las negociaciones mantenidas hasta ahora con Bruselas es evitar la imposición de 'remedies', es decir, que las compañías se tengan que deshacer de determinados activos para cumplir con las reglas de competencia. En ese sentido, son varias las empresas del sector que están pendientes de la resolución para intentar adquirir algunos de esos posibles 'remedies'. El consejero delegado de Orange España, Ludovic Pech, aseguró a finales de junio que uno de los objetivos de la compañía en sus conversaciones con la Comisión Europea es disipar las dudas que mantiene Bruselas sobre el impacto de la operación en el mercado minorista e intentar evitar la imposición de condiciones. En ese sentido, Orange anunció la semana pasada el nombramiento de Jean-François Fallacher como presidente no ejecutivo de la empresa en España en pleno proceso de la operación de fusión con MásMóvil. Fallacher, que fue consejero delegado de Orange España entre septiembre de 2020 y abril de 2023, vuelve así a la compañía en España para lidiar con el proceso de fusión, el cual se anunció cuando él era el 'primer espada' de la empresa en el país.
          </Text>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Item