import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';
import defaultStyles from '../config/styles';



function AppTextInput({ icon, ...otherProps }) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.Gray} style={styles.icon} />}
            <TextInput
                placeholderTextColor={colors.Gray}
                style={defaultStyles.text} {...otherProps} />

        </View>
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


})

export default AppTextInput;