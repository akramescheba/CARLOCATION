import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Image, StyleSheet } from 'react-native';

const url = 'http://10.74.3.159:3000/ride';  

const CarSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const results = url.filter(
      (car) => car.marque.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  };

  const renderItem = ({ item }) => (
    <View style={styles.carItem}>
      <Image source={{ uri: item.image }} style={styles.carImage} />
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Entrez une marque ..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <Button title="Search" onPress={handleSearch} />
      <FlatList
        data={searchResults}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  carItem: {
    flex: 1,
    margin: 5,
    borderRadius: 8,
    overflow: 'hidden',
  },
  carImage: {
    width: '100%',
    aspectRatio: 16 / 9,
  },
});

export default CarSearch;
