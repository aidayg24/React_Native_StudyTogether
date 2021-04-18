import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import colors from '../config/colors';
import AppText from './AppText';
function AppCard({ title, subTitle, image }) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={Image} />

            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.MilkWhite,
        marginBottom: 20,
        overflow: 'hidden',

    },

    detailsContainer: {
        padding: 20,
    },

    image: {
        width: '100%',
        height: 200,
    },

    subTitle: {
        color: colors.BlueGray,
        fontWeight: 'bold'
    },

    title: {
        marginBottom: 7,
    },
})
export default AppCard;