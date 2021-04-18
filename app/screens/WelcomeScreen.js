import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import AppButton from '../components/AppButton';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            blurRadius={2}
            style={styles.background}
            source={require('../assets/wellcome.jpg')}>

            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo.png')}></Image>
                <Text style={styles.logoText}>Solve{"\n"} Problems {"\n"}Together</Text>
            </View>

            <View style={styles.buttonsContainer}>
                <AppButton title="Login" />
                <AppButton title="register" color="Platinum" />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: 'center',

    },

    buttonsContainer: {
        padding: 20,
        width: "100%",
        position: 'absolute',
        bottom: 70,
    },

    logo: {
        height: 150,
        width: 150,
        borderRadius: 75,
    },

    logoContainer: {
        position: 'absolute',
        top: 100,
        alignItems: 'center',
    },

    logoText: {
        color: colors.Black,
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 25,
        textAlign: 'center',
        lineHeight: 50,

    },

})

export default WelcomeScreen;