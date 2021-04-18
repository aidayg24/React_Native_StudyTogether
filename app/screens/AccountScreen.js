import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import Icon from '../components/Icon';
import ListItemSeparatorComponent from "../components/ListItemSeparator";
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import colors from '../config/colors';

const menuItems = [
    {
        title: " My Questions",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.Coffee
        },
    },

    {
        title: " My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.BlueGray
        }
    }
]
function AccountScreen(props) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>

                <ListItem
                    title="Aidayg24"
                    subTitle="aidarostamee221bb@gmail.com"
                    image={require('../assets/wellcome2.jpg')}
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={(menuItem) => menuItem.title}
                    ItemSeparatorComponent={ListItemSeparatorComponent}
                    renderItem={({ item }) => (
                        <ListItem
                            title={item.title}
                            IconComponent={
                                <Icon
                                    name={item.icon.name}
                                    backgroundColor={item.icon.backgroundColor}
                                />
                            }
                        />
                    )}
                />
            </View>
            <ListItem
                title="Log Out"
                IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
            />
        </Screen>
    );
}
const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    },
    screen: {
        backgroundColor: colors.SeaShell,
    },

})
export default AccountScreen;