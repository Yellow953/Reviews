import React from 'react';
import { Button, TextInput, View, Text } from 'react-native';
import { globalStyles } from '../styles/global.js';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/button'

const ReviewSchema = yup.object({
    title: yup.string().required().min(3),
    body: yup.string().required().min(5),
    rating: yup.string().required().test('is-numeric-1-5', 'Rating must be a number between 1 and 5', (val) => {
        return parseInt(val) < 6 && parseInt(val) > 0;
    }),
})

export default function ReviewForm({addReview}){
    return (
        <View style={globalStyles.container}>
            <Formik 
                initialValues={{'title':'', 'body':'', 'rating':''}}
                validationSchema={ReviewSchema}
                onSubmit={ (values, actions) => {
                    actions.resetForm();
                    addReview(values);
                    console.log(values);
                }}
            >
                {props => (
                    <View>
                        <TextInput 
                            style={globalStyles.input}
                            onChangeText={props.handleChange('title')}
                            placeholder='Review Title'
                            value={props.values.title}
                            onBlur={props.handleBlur('title')}
                        />
                        <Text style={globalStyles.errorText}>{props.touched.title && props.errors.title}</Text>

                        <TextInput 
                            style={globalStyles.input}
                            onChangeText={props.handleChange('body')}
                            placeholder='Review body'
                            value={props.values.body}
                            multiline
                            onBlur={props.handleBlur('body')}
                        />
                        <Text style={globalStyles.errorText}>{props.touched.body && props.errors.body}</Text>

                        <TextInput 
                            style={globalStyles.input}
                            onChangeText={props.handleChange('rating')}
                            placeholder='Review rating'
                            value={props.values.rating}
                            keyboardType='numeric'
                            onBlur={props.handleBlur('rating')}
                        />
                        <Text style={globalStyles.errorText}>{props.touched.rating && props.errors.rating}</Text>

                        <FlatButton text="Submit" onPress={props.handleSubmit} /> 
                    </View>
                )}
            </Formik>
        </View>
    );
}