import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, ScrollView, Image, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Card } from '@rneui/themed';
import { Button } from '@rneui/themed';

export default function Home({ }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Replace these with your actual authentication logic
        const correctLogin = 'admin';
        const correctPassword = 'password';

        if (login === correctLogin && password === correctPassword) {
            setModalVisible(true);
        } else {
            Alert.alert('Authentication Error', 'Incorrect login or password.');
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <Card style={styles.styleCard}>
                    <Card.Title>ADMIN</Card.Title>
                    <Card.Divider />

                    <TextInput
                        style={styles.TextInput}
                        placeholder="login"
                        onChangeText={(text) => setLogin(text)}
                    />
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Mot de passe"
                        secureTextEntry={true}
                        onChangeText={(text) => setPassword(text)}
                    />

                    <Card.Divider />

                    <Button style={styles.styleBtn} onPress={handleLogin}>
                        Connexion
                    </Button>
                </Card>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Authentication successful!</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(false)}
                        >
                            <Text style={styles.textStyle}>OK</Text>
                        </Pressable>
                    </View>
                </Modal>

                <StatusBar style="auto" />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    // ... (your existing styles)
styleCard:{
    flexWrap:'wrap',
    flex:1,
},
    modalView: {
        
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});
