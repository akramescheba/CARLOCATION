import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';


const Agenda = (navigation) => {
  const [agendaData, setAgendaData] = useState([
    { id: '1', title: 'Point Hebdo', date: '2023-07-21', time: '13:00' },

  ]);

  const [newEventTitle, setNewEventTitle] = useState('');
  const [newEventDate, setNewEventDate] = useState('');
  const [newEventTime, setNewEventTime] = useState('');

  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleAddEvent = () => {
    if (newEventTitle && newEventDate && newEventTime) {
      const newEvent = {
        id: Date.now().toString(),
        title: newEventTitle,
        date: newEventDate,
        time: newEventTime,
      };
      setAgendaData([...agendaData, newEvent]);
      setNewEventTitle('');
      setNewEventDate('');
      setNewEventTime('');
    }
  };

  const handleEditEvent = () => {
    if (selectedEvent && newEventTitle && newEventDate && newEventTime) {
      setAgendaData(prevData =>
        prevData.map(item =>
          item.id === selectedEvent.id
            ? { ...item, title: newEventTitle, date: newEventDate, time: newEventTime }
            : item
        )
      );
      setSelectedEvent(null);
      setNewEventTitle('');
      setNewEventDate('');
      setNewEventTime('');
    }
  };

  const handleDeleteEvent = () => {
    if (selectedEvent) {
      setAgendaData(prevData => prevData.filter(item => item.id !== selectedEvent.id));
      setSelectedEvent(null);
    }
  };

  const renderAgendaItem = ({ item }) => (
    <View style={styles.agendaItem}>
      <Text style={styles.agendaItemTitle}>{item.title}</Text>
      <Text>Date: {item.date}</Text>
      <Text>Heure: {item.time}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => {
            setSelectedEvent(item);
            setNewEventTitle(item.title);
            setNewEventDate(item.date);
            setNewEventTime(item.time);
          }}
        >
          <Text style={styles.buttonText}>Modifier</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => handleDeleteEvent(item)}
        >
          <Text style={styles.buttonText}>Supprimer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (

    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Titre de l'événement"
          value={newEventTitle}
          onChangeText={setNewEventTitle}
        />
        <TextInput
          style={styles.input}
          placeholder="Date (AAAA-MM-JJ)"
          value={newEventDate}
          onChangeText={setNewEventDate}
        />
        <TextInput
          style={styles.input}
          placeholder="Heure (HH:MM)"
          value={newEventTime}
          onChangeText={setNewEventTime}
        />
        {selectedEvent ? (
          <TouchableOpacity style={styles.addButton} onPress={handleEditEvent}>
            <Text style={styles.addButtonText}>Modifier</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.addButton} onPress={handleAddEvent}>
            <Text style={styles.addButtonText}>Ajouter</Text>
          </TouchableOpacity>
        )}
      </View>

      <FlatList
        data={agendaData}
        renderItem={renderAgendaItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  agendaItem: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  agendaItemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  editButton: {
    backgroundColor: 'green',
    padding: 8,
    borderRadius: 6,
    width: '48%',
    alignItems: 'center',
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 8,
    borderRadius: 6,
    width: '48%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Agenda;
