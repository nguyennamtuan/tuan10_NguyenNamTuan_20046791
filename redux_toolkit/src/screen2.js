// components/bai2.js
import { StyleSheet, Text, View, Image, TextInput, FlatList, Pressable } from 'react-native';
import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { useGetTasksQuery, useDeleteTaskMutation } from './apiSlice';
import { useNavigation } from '@react-navigation/native';
const screen2 = () => {
  const route = useRoute();
  const { name } = route.params;
  const { data: tasks = [], refetch } = useGetTasksQuery();
  const [deleteTask] = useDeleteTaskMutation();
  const [search, setSearch] = useState('');
  const navigation = useNavigation();
  const handleDelete = async (id) => {
    await deleteTask(id);
    refetch();
  };

  return (
    <View style={styles.view}>
      <View style={styles.view1}>
        <Text style={styles.text}>Hi {name}</Text>
        <Text style={styles.text1}>Have a great day ahead</Text>
      </View>
      <View style={styles.view3}>
        <TextInput
          style={styles.ip}
          placeholder="Search"
          value={search}
          onChangeText={setSearch}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Pressable onPress={() => handleDelete(item.id)}>
                <Text style={styles.text2}>Delete</Text>
              </Pressable>
              <Text style={styles.itemText}>{item.name}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      <Pressable onPress={()=>{
        navigation.navigate("screen3",{name})
      }}>
        <Text style={styles.text3}>trang tiep</Text>
      </Pressable>
    </View>
  );
};

export default screen2;

const styles = StyleSheet.create({
    view: {
      flex: 1,
      backgroundColor: '#F5F5F5',
      padding: 20,
    },
    view1: {
      flexDirection: 'column',
      alignItems: 'center',
      paddingVertical: 20,
      marginBottom: 20,
      backgroundColor: '#fff',
      borderRadius: 15,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 10,
      elevation: 5,
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 5,
    },
    text1: {
      fontSize: 16,
      color: '#555',
    },
    view3: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
      backgroundColor: '#fff',
      borderRadius: 15,
      padding: 10,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 10,
      elevation: 5,
    },
    ip: {
      flex: 1,
      height: 50,
      backgroundColor: '#EFEFEF',
      borderRadius: 10,
      paddingHorizontal: 15,
      fontSize: 16,
      color: '#333',
    },
    container: {
      flex: 1,
      width: '100%',
    },
    item: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 15,
      marginVertical: 5,
      backgroundColor: '#fff',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 2,
    },
    itemText: {
      fontSize: 18,
      color: '#333',
      flex: 1,
    },
    text2: {
      fontSize: 16,
      color: '#E74C3C',
      fontWeight: 'bold',
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 5,
      backgroundColor: '#FDEDEC',
    },
    text3:{
        fontSize:20,
        textAlign:'center',
        fontWeight:"bold",
        borderWidth:1,
        backgroundColor:'blue',
        color:"white"
    }
  });
  
