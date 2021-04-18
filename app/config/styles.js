import { Platform } from 'react-native';
import colors from './colors';

export default {
    text: {
        color: colors.DarkGray,
        fontSize: 18,
        fontFamily: Platform.os === 'android' ? 'Roboto' : 'Avenir',
    },
};

