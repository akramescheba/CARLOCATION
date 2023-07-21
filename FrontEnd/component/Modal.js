import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, ScrollView, Image, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Card } from '@rneui/themed';
import { Button } from '@rneui/themed';


export default function Accueil({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [text, setText] = useState(false);

    const ListeLivres = () => {
        navigation.navigate('ListeLivre', { name: 'ListeLivre' });
    };

    return (
        <View style={styles.container}>
         
            <ScrollView>
                <Modal visible={modalVisible} animationType='fade'>
                    <Card style={styles.styleCard}>
                        <Card.Title>Liste des objectifs</Card.Title>
                        <Card.Divider />
                        <Text visible={text}>Se familiariser avec react native</Text>
                        <Card.Divider />
                        <View style={styles.styleBtn}>
                            <Button onPress={() => setText(true)}>AJOUTER</Button>
                            <Button onPress={() => setModalVisible(false)}>ANNULER</Button>
                        </View>
                    </Card>
                </Modal>

                <Card style={styles.styleCard}>
                    <Card.Title>Liste des objectifs</Card.Title>
                    <Card.Divider />
                    <TextInput placeholder='saisir votre tache' style={styles.TextInput} />
                    <Card.Divider />
                    <View style={styles.styleBtn}>
                        <Button onPress={() => setModalVisible(true)}>AJOUTER</Button>

                    </View>
                </Card>

            
                <StatusBar style="auto" />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        width: '90%',
        backgroundColor: 'grey',
        justifyContent: 'space-evenly',
        borderRadius: 40,
    },
    IconStyle: {
        padding: 14,
    },

    container: {
        flex:1,
        backgroundColor: ' #808080',
        alignItems: 'center',
        flexDirection: 'row',
    },

    TextInput: {
        flex: 1,
        borderWidth: 1,
        padding: 5,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 2,
    },
    styleCard: {
        backgroundColor: 'grey',
        width: 100,
        height: 100,
        borderWidth: 1,
        borderColor: '#cccccc',
        marginTop: 10,
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 15,
        marginRight: 12,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    styleBtn: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});
