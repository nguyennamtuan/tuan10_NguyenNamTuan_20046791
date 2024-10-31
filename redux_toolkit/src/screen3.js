// components/bai3.js
import { useRoute, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View, TextInput } from 'react-native';
import { useAddTaskMutation } from './apiSlice';

const screen3 = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { name } = route.params;
  const [job, setJob] = useState('');
  const [addTask] = useAddTaskMutation();

  const handleFinish = async () => {
    await addTask({ name: job });
    navigation.navigate('screen2', { name });
  };

  return (
    <View style={styles.view}>
      <Text style={styles.text2}>ADD YOUR JOB</Text>
      <View style={styles.view2}>
        <TextInput
          style={styles.ip}
          placeholder="Enter job here"
          value={job}
          onChangeText={setJob}
        />
      </View>
      <Pressable style={styles.pre1} onPress={handleFinish}>
        <Text style={styles.text3}>Finish</Text>
      </Pressable>
    </View>
  );
};

export default screen3;

const styles = StyleSheet.create({
    view: {
      flex: 1,
      backgroundColor: '#F5F5F5',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    text2: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 20,
    },
    view2: {
      width: '100%',
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 15,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 10,
      elevation: 5,
      marginBottom: 20,
    },
    ip: {
      height: 50,
      backgroundColor: '#EFEFEF',
      borderRadius: 10,
      paddingHorizontal: 15,
      fontSize: 16,
      color: '#333',
      borderWidth: 1,
      borderColor: '#ccc',
    },
    pre1: {
      backgroundColor: '#3498DB',
      borderRadius: 10,
      paddingVertical: 15,
      paddingHorizontal: 25,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowRadius: 5,
      elevation: 3,
    },
    text3: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#FFFFFF',
    },
  });
  
