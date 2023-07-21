import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, ScrollView, Image, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Card } from '@rneui/themed';
import { Button } from '@rneui/themed';


export default function Home({ }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [text, setText] = useState(false);

    return (
        <View style={styles.container}>

            <ScrollView>


                <Card style={styles.styleCard}>
                    <Card.Title>ADMIN</Card.Title>
                    <Card.Divider />

                    <TextInput
                        style={styles.TextInput}

                        placeholder="login"

                    />
                    <TextInput
                        style={styles.TextInput}

                        placeholder="Mot de passe"

                    />

                    <Card.Divider />

                    <Button style={styles.styleBtn}>Connexion</Button>
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
    Home: {
        textAlign: 'center',
        width: '100%',
    },
    IconStyle: {
        padding: 14,
    },

    container: {
        flex: 1,
        backgroundColor: ' black',
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
