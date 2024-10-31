

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs, deleteJob } from './actions'; // Check this path
import { View, FlatList, Pressable, Text, StyleSheet, Image } from 'react-native';

const screen2 = ({ navigation }) => { // Capitalized component name as convention
  const dispatch = useDispatch();
  const jobs = useSelector(state => state.jobs); // Ensure 'state.jobs' exists in your reducer setup

  useEffect(() => {
    dispatch(fetchJobs()); // Fetch jobs on component mount
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteJob(id)); // Call delete action with job ID
  };

  return (
    <View style={styles.container}>
      <View style={styles.view} >
        <Pressable onPress={()=>{
          navigation.navigate("screen1")
        }}>
          <Image source={require("../assets/images/back.png")}></Image>
        </Pressable>
        <Image style={styles.img} source={require("../assets/images/user.png")}></Image>
        <View style={styles.view1}>
          <Text>Hi Twinkle</Text>
          <Text>Have agrate day a head</Text>
        </View>
      </View>
      <FlatList
        data={jobs}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
            <Pressable onPress={() => handleDelete(item.id)}>
              <Text style={styles.delete}>Delete</Text>
            </Pressable>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()} // Ensure id is a string for keyExtractor
      />

      <Pressable onPress={() => navigation.navigate('screen3')} style={styles.pre}>
        <Image source={require("../assets/images/add.png")} style={styles.img2}></Image>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  delete: {
    color: '#ff3b30',
    fontWeight: '600',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#ffecec',
    borderRadius: 5,
  },
  pre: {
    textAlign: 'center',
    alignItems: 'center'
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  img: {
    borderRadius: 50,
    left: 100
  },
  view1: {
    left: 100,
    fontWeight: "900"
  }

});

export default screen2; 
