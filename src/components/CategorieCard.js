import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const CategorieCard = ({ categorie, onNavigate }) => (
    <TouchableOpacity
        onPress={onNavigate}
        style={styles.container}>
        <View style={styles.card}>
            <View style={styles.containerText}>
                <View style={styles.textBox}>
                    <Text style={styles.cardTitle}>{categorie.title}</Text>
                </View>
                <View style={styles.iconBox}>
                    <Icon name="laptop" color="#F0141E" style={styles.icon}/>
                </View>
            </View>
            <View style={styles.containerDescription}>
                <View style={styles.descriptionBox}>
                    <Text style={styles.cardDescription}>{categorie.description}</Text>
                </View>
            </View>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        padding: 5,
        borderRadius: 50,
        width: 290,
        height: 136,
    },
    card: {
        flex: 1,
        flexDirection: 'column',
        borderRadius: 10,
        backgroundColor: '#00AFD9',
        justifyContent: 'center'
    },
    containerText: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center'
    },
    textBox: {
        flex: 0.6,
    },
    cardTitle: {
        color: 'white',
        fontFamily: "Roboto-Medium",
        fontSize: 20,
        flex: 1,
        paddingTop: 10,
        paddingLeft: 10
    },
    containerDescription: {
        flex: 1,
        alignItems: 'center',
    },
    descriptionBox: {
        alignItems: 'center',
    },
    cardDescription: {
        color: 'white',
        fontSize: 14,
        fontFamily: "Roboto-Regular",
        paddingTop: 10,
        paddingLeft: 33,
        paddingRight: 33,
    },
    firstColumn: {
        paddingLeft: 10
    },
    lastColumn: {
        paddingRight: 10
    },
    iconBox: {
        paddingTop: 10,
        flex: 0.2,
    },
    icon: {
        color: 'white',
        fontSize: 50,
        justifyContent: 'flex-end'
    }
});

export default CategorieCard;