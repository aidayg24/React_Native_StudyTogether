import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name="close" size={30} />
            </View>
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons name="trash-can-outline" size={30} />
            </View>
            <Image
                resizeMode="contain"
                style={styles.image}
                source={require('../assets/background.jpg')}>
            </Image>
        </View>
    );
}

const styles = StyleSheet.create({
    closeIcon: {
        position: 'absolute',
        top: 50,
        left: 30,

    },

    container: {
        backgroundColor: colors.SeaShell,
        flex: 1,

    },

    deleteIcon: {
        position: 'absolute',
        top: 50,
        right: 30,

    },

    image: {
        width: '100%',
        height: '100%',

    },

})

export default ViewImageScreen;