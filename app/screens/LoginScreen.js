import React from 'react';
import { Image, StyleSheet } from 'react-native';
import * as Yup from 'yup';



import colors from '../config/colors';
import Screen from '../components/Screen';
import { AppForm, AppFormField, SubmitButton } from '../components/forms'

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
})

function LoginScreen(props) {
    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require('../assets/logo.png')} />

            <AppForm
                initialValues={{ email: "", password: "" }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >

                <AppFormField
                    autoCapitalize='none'
                    autoCorrect={false}
                    icon='email'
                    keyboardType='email-address'
                    name='email'
                    placeholder="Email"
                    textContentType='emailAddress' />

                <AppFormField
                    autoCapitalize='none'
                    autoCorrect={false}
                    icon='lock'
                    secureTextEntry
                    name='password'
                    placeholder="Password"
                    textContentType='password' />

                <SubmitButton title='Login' />

            </AppForm>

        </Screen>
    );
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: colors.SeaShell
    },


    logo: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginTop: 40,
        marginBottom: 20,
        alignSelf: 'center'
    }

})

export default LoginScreen;