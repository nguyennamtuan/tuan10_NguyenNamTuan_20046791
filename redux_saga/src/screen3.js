import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addJob } from './actions';
import { View, TextInput, Pressable, Text, StyleSheet, Image } from 'react-native';

const screen3 = ({ navigation }) => {
  const [job, setJob] = useState('');
  const dispatch = useDispatch();

  const handleAddJob = () => {
    dispatch(addJob(job));
    navigation.navigate('screen2');
  };

  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Image style={styles.img} source={require("../assets/images/user.png")}></Image>
        <View>
          <Text>Hi Hoang</Text>
          <Text>Have agrate  day a head</Text>
        </View>
        <Pressable onPress={()=>{
          navigation.navigate("screen2")
        }}>
          <Image style={styles.img1} source={require("../assets/images/back1.png")}></Image>
        </Pressable>
      </View>
      <Text style={styles.text}>ADD YOUR JOB</Text>
      <TextInput
        value={job}
        onChangeText={setJob}
        placeholder="Enter Job"
        style={styles.input}
      />
      <Pressable onPress={handleAddJob}>
        <Text style={styles.text1}>Finish</Text>
      </Pressable>
      <Image style={styles.img2} source={require("../assets/images/book.png")}></Image>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,

    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 8,
    backgroundColor: '#ffffff',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#007bff',
    borderRadius: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '600',
    textAlign: 'center',
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  img: {
    borderRadius: 20
  },
  img1: {
    width: 30,
    height: 30
  },
  text:{
    fontSize:40,
    padding:20
  },
  text1:{
    fontSize:20,
    backgroundColor:'blue',
    width:80,
    height:40,
    color:"white",
    borderRadius:10,
   left:120,
   textAlign:'center'
  },
  img2:{
    left:80,
    top:50
  }
});

export default screen3