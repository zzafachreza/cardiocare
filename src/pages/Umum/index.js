import { Alert, StyleSheet, Text, View, Animated, Image, FlatList, ActivityIndicator, Dimensions, ImageBackground, TouchableWithoutFeedback, TouchableNativeFeedback, Linking } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { apiURL, getData, MYAPP, storeData } from '../../utils/localStorage';
import { MyDimensi, colors, fonts, windowHeight, windowWidth } from '../../utils';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { NavigationRouteContext, useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import 'intl';
import 'intl/locale-data/jsonp/en';
import moment from 'moment';
import 'moment/locale/id';
import MyCarouser from '../../components/MyCarouser';
import { Rating } from 'react-native-ratings';
import { MyGap, MyHeader } from '../../components';
import GetLocation from 'react-native-get-location';
import ProgressCircle from 'react-native-progress-circle'
export default function Umum({ navigation, route }) {
    const img = new Animated.Value(0.9);


    const [user, setUser] = useState({});
    const isFocus = useIsFocused();
    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);
    const [comp, setComp] = useState({});
    const [loading, setLoading] = useState(true);




    useEffect(() => {

        Animated.timing(img, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();


        axios.post(apiURL + 'company').then(res => {

            setComp(res.data.data);

        });


        if (isFocus) {

        }
    }, [isFocus]);

    const [lokasi, setLokasi] = useState({
        lat: 0,
        long: 0
    })




    return (

        <View style={{
            flex: 1,
            width: "100%",
            height: "100%",



        }}>

            {/* HEADERS */}
            <View style={{
                flexDirection: "row",
                backgroundColor: colors.secondary,
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
                justifyContent: 'space-between',
                alignItems: 'center'


            }}>

                <View>
                    <Text style={{
                        fontFamily: fonts.primary[800],
                        color: colors.white,
                        fontSize: 16,
                    }}>Selamat datang,</Text>
                    <Text style={{
                        fontFamily: fonts.primary[400],
                        fontSize: 16,
                        color: colors.white,

                    }}>
                        Aplikasi Cardio Care
                    </Text>

                </View>



            </View>


            <View style={{
                flex: 1,
                backgroundColor: colors.white
            }}>
                <MyCarouser />

                <View style={{
                    flex: 1,
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Skrining')} style={{
                        padding: 10,
                        marginVertical: 10,
                        backgroundColor: colors.secondary,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10,
                    }}>
                        <Image source={require('../../assets/a1.png')} style={{
                            width: windowWidth / 3,
                            height: windowWidth / 3,
                            resizeMode: 'contain'
                        }} />
                        <Text style={{
                            fontFamily: fonts.primary[600],
                            fontSize: 20,
                            textAlign: 'center',
                            color: colors.white
                        }}>Screening Serangan Jantung</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Artikel')} style={{
                        marginVertical: 10,
                        padding: 10,
                        backgroundColor: colors.primary,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10,
                    }}>
                        <Image source={require('../../assets/a2.png')} style={{
                            width: windowWidth / 3,
                            height: windowWidth / 3,
                            resizeMode: 'contain'
                        }} />
                        <Text style={{
                            fontFamily: fonts.primary[600],
                            fontSize: 20,
                            textAlign: 'center',
                            color: colors.white
                        }}>Discharge Planning</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    tulisan: {
        fontSize: 14,
        marginBottom: 10,
        fontFamily: fonts.secondary[600],
        color: colors.black,
        textAlign: 'justify'
    },
    tulisanJudul: {
        fontSize: 16,
        marginBottom: 10,
        fontFamily: fonts.secondary[800],
        color: colors.black,
        textAlign: 'justify'
    }
})