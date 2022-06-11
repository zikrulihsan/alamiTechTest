import {
    SafeAreaView,
    View,
    Text,
    StyleSheet
} from "react-native";
import React, { useState } from 'react';

import Icon from "react-native-vector-icons/Ionicons"

export default function Card(props) {

    return (
        <View style = {styles.container}>
            <Icon name="ios-cart" size={150}/>
            { 
                props.totalItems>0 ? 
                    (<View style={styles.roundedCartItem}>
                        <Text style={{color :"white", fontSize:24, fontWeight:"bold"}}>{props.totalItems}</Text>
                    </View>) : (<></>)
            }
        </View>
    )

}


const styles = StyleSheet.create({
    container: {
        alignItems:"center",
        justifyContent: "center",
    },
    roundedCartItem: {
        position: "absolute",
        height: 50,
        justifyContent: "center",
        width: 50,
        top:0,
        left:230,
        borderRadius:50,
        backgroundColor: "red",
        alignItems: "center",
        color: "white"
    }
})


