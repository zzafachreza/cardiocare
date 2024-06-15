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
export default function Home({ navigation, route }) {
  const img = new Animated.Value(0.9);


  const [user, setUser] = useState({});
  const isFocus = useIsFocused();
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [comp, setComp] = useState({});
  const [loading, setLoading] = useState(true);



  const _getTransaction = async () => {



    getData('user').then(u => {
      setUser(u);
      axios.post(apiURL + 'obat', {
        fid_user: u.id
      }).then(res => {
        console.log(res.data);
        setData(res.data);
      })
    })




  }


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
      _getTransaction();
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
        backgroundColor: colors.primary,
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
            {user.nama_lengkap}
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
          padding: 10,
        }}>
          <FlatList data={data} numColumns={3} renderItem={({ item, index }) => {
            return (

              <TouchableWithoutFeedback onPress={() => {
                navigation.navigate('Hitung', item)
              }}>
                <View style={{
                  flex: 1,
                  margin: 5,
                  justifyContent: 'center',
                  alignItems: 'center',

                }}>
                  <View style={{
                    backgroundColor: colors.primary,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                  }}>
                    <Image source={{
                      uri: item.image,

                    }} style={{
                      width: windowWidth / 4,
                      height: windowWidth / 4,

                    }} />
                  </View>
                  <Text style={{
                    marginTop: 5,
                    fontFamily: fonts.primary[600],
                    fontSize: 12,
                  }}>{item.nama_obat}</Text>
                </View>
              </TouchableWithoutFeedback>

            )
          }} />
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