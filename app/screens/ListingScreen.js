import React from 'react';
import { FlatList, StyleSheet } from 'react-native';


import Screen from '../components/Screen';
import AppCard from '../components/AppCard';
import colors from '../config/colors';

const listings = [
    {
        id: 1,
        title: 'Math question',
        hashtag: 'Math',
        image: require('../assets/wellcome.jpg')

    },

    {
        id: 2,
        title: 'Bio question',
        hashtag: 'Bio',
        image: require('../assets/backbio2.jpg')

    },
];

function ListingScreen(props) {
    return (
        <Screen style={styles.screen}>
            <FlatList
                data={listings}
                keyExtractor={(listing) => listing.id.toString()}
                renderItem={({ item }) =>
                    <AppCard
                        title={item.title}
                        subTitle={"#" + item.hashtag}
                        image={item.image} />
                }
            />
        </Screen>
    );
}
const styles = StyleSheet.create({
    screen: {
        padding: 10,
        backgroundColor: colors.Platinum
    }

})

export default ListingScreen;