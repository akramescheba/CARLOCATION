import React, { useState } from 'react';
import { Card } from '@rneui/themed';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';


const Agenda = () => {
  const [agendaData, setAgendaData] = useState([
    { id: '1', title: 'Point Hebdo', nom: 'AKRA MESCHEBA', prenom: 'Jeff', email: 'mesch@mesch', adresse: '586 rue st amour Eldorado', date: '2023-07-21', time: '13:00' },

  ]);
  const [newEventNom, setNewEventNom] = useState('');
  const [newEventPrenom, setNewEventPrenom] = useState('');
  const [newEventAdresse, setNewEventAdresse] = useState('');
  const [newEventEmail, setNewEventEmail] = useState('');


  const [newEventTime, setNewEventTime] = useState('');
  const [newEventTitle, setNewEventTitle] = useState('');
  const [newEventDate, setNewEventDate] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleAddEvent = () => {
    if (newEventTitle && newEventNom && newEventPrenom && newEventEmail && newEventAdresse && newEventDate && newEventTime) {
      const newEvent = {
        id: Date.now().toString(),


        title: newEventTitle,
        nom: newEventNom,
        prenom: newEventPrenom,
        email: newEventEmail,
        adresse: newEventAdresse,

        date: newEventDate,
        time: newEventTime,
      };
      setAgendaData([...agendaData, newEvent]);
      setNewEventNom('')
      setNewEventPrenom('')
      setNewEventEmail('')
      setNewEventAdresse('')
      setNewEventTitle('');
      setNewEventDate('');
      setNewEventTime('');
    }
  };

  const handleEditEvent = () => {
    if (selectedEvent && newEventNom && newEventPrenom &&
      newEventEmail && newEventAdresse && newEventTitle &&
      newEventDate && newEventTime) {
      setAgendaData(prevData =>
        prevData.map(item =>
          item.id === selectedEvent.id
            ? {
              ...item, nom: newEventNom, prenom: newEventPrenom,
              email: newEventEmail, adresse: newEventAdresse,
              title: newEventTitle, date: newEventDate,
              time: newEventTime
            }
            : item
        )
      );
      setSelectedEvent(null);
      setNewEventNom('')
      setNewEventPrenom('')
      setNewEventEmail('')
      setNewEventAdresse('')
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
      <Card style={styles.styleCard}>
        <Card.Title>Récapitulatif de votre réservation</Card.Title>
        <Card.Divider />

        <View style={styles.container}>
          <Text style={styles.boldText}> {item.title}</Text>
          <View style={styles.row}>

            <View style={styles.column}>
              <View style={styles.column}>
                <View style={styles.row}>
                  <View style={styles.column}>

                    <Text style={styles.boldText}>Nom:
                      <Text style={styles.normalText}>
                        Mr/Mme. {item.nom + ' ' + item.prenom}
                      </Text>
                    </Text>

                  </View>

                  <View style={styles.column}>
                 
                  </View>
                </View>
              </View>

              <View style={styles.column}>

              <Text style={styles.boldText}>Adresse :
                      <Text style={styles.normalText}>
                        {item.adresse}
                      </Text>
                    </Text>

                    <Text style={styles.boldText}>Email :
                      <Text style={styles.normalText}>
                         {item.email}
                      </Text>
                    </Text>




              </View>
            </View>

          </View>
        </View>
        <Card.Divider />

        <View style={styles.styleBtn}>
          <Text style={styles.Home}>👋😎Hey...</Text>
        </View>
      </Card>

      <Text>Date: {item.date}</Text>
      <Text>Heure: {item.time}</Text>
      <Text>Heure: {item.time}</Text>
      <Text>Heure: {item.time}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => {
            setSelectedEvent(item);
            setNewEventTitle(item.title);
            setNewEventDate(item.date);
            setNewEventTime(item.time);

            setNewEventNom(item.nom)
            setNewEventPrenom(item.prenom)
            setNewEventEmail(item.email)
            setNewEventAdresse(item.adresse)

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
          placeholder="Nom (Entrez votre nom)"
          value={newEventNom}
          onChangeText={setNewEventNom}
        />

        <TextInput
          style={styles.input}
          placeholder="Prénom (Entrez votre prénom)"
          value={newEventPrenom}
          onChangeText={setNewEventPrenom}
        />



        <TextInput
          style={styles.input}
          placeholder="Adresse postale (Entrez votre adresse postale)"
          value={newEventAdresse}
          onChangeText={setNewEventAdresse}
        />

        <TextInput
          style={styles.input}
          placeholder="Email (Entrez votre adresse mail)"
          value={newEventEmail}
          onChangeText={setNewEventEmail}
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
            <Text style={styles.addButtonText}>Réserver</Text>
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

  normalText: {
    fontWeight: 'normal',
    // fontSize: 10,

  },
  boldText: {
    fontWeight: "bold",


  },
});

export default Agenda;
