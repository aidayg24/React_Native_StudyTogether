import React from 'react';
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import { AppForm, AppFormField, AppFormPicker, SubmitButton } from '../components/forms';
import Screen from '../components/Screen';
import colors from '../config/colors';


const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    hashtag: Yup.string().required().min(1).label("Hashtag"),
    description: Yup.string().label('Description'),
    category: Yup.object().required().nullable().label("Category")
});

const categories = [
    { label: 'Math', value: 1 },
    { label: 'Biology', value: 2 },
    { label: 'Physics', value: 3 },
    { label: 'Chemistry', value: 4 },
    { label: 'Computer', value: 5 },
    { label: 'Other', value: 6 },
];

function ListingEditScreen() {
    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{
                    title: "",
                    hashtag: "",
                    description: "",
                    category: null,
                }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField maxLength={255} name="title" placeholder="Title" />
                <AppFormField
                    maxLength={15}
                    name="hashtag"
                    placeholder="Hashtag" />
                <AppFormPicker
                    items={categories}
                    name="category"
                    placeholder="Category"
                />
                <AppFormField
                    maxLength={500}
                    multiline
                    name="description"
                    numberOfLines={6}
                    placeholder="Description"
                />
                <SubmitButton title="Post" />

            </AppForm>

        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: colors.SeaShell
    },
});

export default ListingEditScreen;
