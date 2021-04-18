import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

import colors from '../config/colors';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';
function ListingDetailsScreen(props) {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/backbio.jpg')}></Image>
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>title</AppText>
                <AppText style={styles.hashtag}>subTitle</AppText>
                <View style={styles.userContainer}>
                    <ListItem
                        image={require("../assets/backbio2.jpg")}
                        title="Aidayg24"
                        subTitle="#biology"
                    />
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20,

    },

    hashtag: {
        color: colors.BlueGray,
        fontSize: 20,

    },

    image: {
        width: '100%',
        height: 300,
    },


    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 7,
    },

    userContainer: {
        marginVertical: 40,
    },
})
export default ListingDetailsScreen;