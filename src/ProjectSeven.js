/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Button, Text, TextInput, View, Alert} from 'react-native';

function ProjectSeven() {
  const [name, setName] = useState('');
  return (
    <View style={{padding: 20}}>
      <Text style={{fontWeight: 'bold', fontSize: 18}}>
        What's your full name ?
      </Text>
      <TextInput
        style={{
          marginTop: 10,
          backgroundColor: 'rgba(0,0,0,0.1)',
          padding: 10,
          borderRadius: 5,
        }}
        placeholder="Mr.Z"
        placeholderTextColor="rgba(0,0,0,0.5)"
        onChangeText={text => setName(text)}
        value={name}
      />
      <Button
        title="Say Hello"
        onPress={() => {
          Alert.alert(`Hello ${name}!`);
          setName('');
        }}
      />
    </View>
  );
}

export default ProjectSeven;
