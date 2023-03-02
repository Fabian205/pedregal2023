import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import icon from '../assets/calendar.png';

const BotonImg = (props) => {
    const {onPress, text}= props
    return(
        <TouchableOpacity 
            style={styles.buttonContainer}
            onPress = {onPress}
        >
            <Image
                source={icon}
            />
        </TouchableOpacity>
    )
}

export default BotonImg

const styles = StyleSheet.create({

    buttonContainer:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:8,
        borderRadius:6,
        alignSelf:'flex-end',
        textAlign: 'center',       
        width:'12%',
        flexDirection: "row",          
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
})