import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function Card(props) {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                {props.children}
            </View>
        </View>
    )
} 

const styles = StyleSheet.create({
    card: {
      borderRadius: 6,
      elevation: 5,
      backgroundColor: '#fff',
      shadowOffset: { width: 2, height: 2 },
      shadowColor: '#333',
      shadowOpacity: 0.5,
      shadowRadius: 5,
      marginHorizontal: 4,
      marginVertical: 6,
    },
    cardContent: {
      marginHorizontal: 18,
      marginVertical: 20,
    }
  });