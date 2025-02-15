import { FlatList, Image, Linking, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { MyDimensi, colors, fonts, windowHeight, windowWidth } from '../../utils'
import { MyButton, MyGap, MyHeader, MyInput, MyPicker } from '../../components'
import axios from 'axios';
import { apiURL, webURL } from '../../utils/localStorage'
import { showMessage } from 'react-native-flash-message'
import RenderHtml from 'react-native-render-html';
import moment from 'moment'
import { Icon } from 'react-native-elements'
export default function ArtikelDetail({ navigation, route }) {

    const item = route.params;
    console.log(item)
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.white,
            // padding: 10,
        }}>

            <ScrollView showsVerticalScrollIndicator={false} style={{
                position: 'relative'
            }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{
                    padding: 5,
                    borderWidth: 1,
                    borderRadius: 20,
                    borderColor: colors.white,
                    position: 'absolute',
                    top: 10,
                    left: 10,
                    zIndex: 99
                }}>
                    <Icon type='ionicon' name='chevron-back-outline' size={MyDimensi / 2} color={colors.white} />
                </TouchableOpacity>
                <Image source={{
                    uri: item.image
                }} style={{
                    // flex: 1,
                    width: '100%',
                    height: 250,
                }} />
                <View style={{
                    flexDirection: 'row',
                    padding: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: colors.primary,
                    marginBottom: 10,
                    justifyContent: 'center',
                    alignItems: 'center',

                }}>


                    <Text style={{
                        flex: 1,
                        fontFamily: fonts.secondary[600],
                        fontSize: MyDimensi / 3,
                        color: colors.black,
                        textAlign: 'center'
                    }}>{item.judul}</Text>
                </View>

                <View style={{
                    padding: 10
                }}>


                    <RenderHtml style={{
                        width: windowWidth
                    }} source={{
                        html: item.keterangan
                    }} />
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})