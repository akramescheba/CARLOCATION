import { StyleSheet, Text, View, ScrollView,  } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Card } from '@rneui/themed';



export default function Home({ }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [text, setText] = useState(false);

    return (
        <ScrollView>
        <View style={styles.container}>

                <Card style={styles.styleCard}>
                    <Card.Title>Home Page</Card.Title>
                    <Card.Divider />

                    <View style={styles.container}>

                        <View style={styles.row}>

                            <View style={styles.column}>
                                <View style={styles.column}>
                                    <View style={styles.row}>
                                        <View style={styles.column}>
                                            
                                            <Text>Col1</Text>
                                        </View>
                                        <View style={styles.column}>
                                            <Text>Col1</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.column}>

                                    <Text>Ligne 2</Text>

                                </View>
                            </View>

                        </View>
                    </View>
                    <Card.Divider />

                    <View style={styles.styleBtn}>
                        <Text style={styles.Home}>👋😎Hey...</Text>
                    </View>
                </Card>

                <StatusBar style="auto" />
                </View>

            </ScrollView>
         );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center',
        flexDirection: 'row',
    },
    row: {
        width: '100%',
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 1,
    },
    column: {
        flex: 1,
        alignItems: 'center',
        textAlign: 'center',
        width: "100%",
        borderWidth: 1,
        borderColor: 'white',
        padding: 20,
    },
    navbar: {
        flexDirection: 'row',
        width: '100%',
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
        width: '100%',
        height: '100%',
        borderWidth: 1,
        borderColor: '#cccccc',
        marginTop: 10,
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
