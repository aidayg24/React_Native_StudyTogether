import React, { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Modal, Button, FlatList, } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';
import defaultStyles from '../config/styles';
import AppText from './AppText';
import Screen from './Screen';
import PickerItem from './PickerItem';



function AppPicker({ icon, items, onSelectItem, placeholder, selectedItem }) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.Gray} style={styles.icon} />}
                    {selectedItem ? <AppText style={styles.text}>{selectedItem.label}</AppText> : <AppText style={styles.placeholder}>{placeholder}</AppText>}

                    <MaterialCommunityIcons name='chevron-down' size={20} color={colors.Gray} />

                </View>
            </TouchableWithoutFeedback>

            <Modal visible={modalVisible} animationType='slide' >
                <Screen >

                    <Button title='Close' onPress={() => setModalVisible(false)} />

                    <FlatList
                        data={items}
                        keyExtractor={item => item.value.toString()}
                        renderItem={({ item }) => (
                            <PickerItem
                                label={item.label}
                                onPress={() => {
                                    setModalVisible(false);
                                    onSelectItem(item);
                                }}
                            />
                        )}
                    />
                </Screen>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.Platinum,
        borderRadius: 25,
        flexDirection: 'row',
        width: '100%',
        padding: 15,
        marginVertical: 10

    },
    icon: {
        marginRight: 10,
        paddingTop: 4,

    },
    placeholder: {
        color: colors.Gray,
        flex: 1,
    },

    text: {
        flex: 1,
    }


})

export default AppPicker;