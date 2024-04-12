/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity, View, Alert} from 'react-native';

const CustomButton = props => (
  <TouchableOpacity
    onPress={props.onPress}
    style={{
      backgroundColor: '#5BBCFF',
      alignSelf: 'center',
      padding: 10,
      margin: 10,
      ...props.buttonStyle,
    }}>
    <Text style={{color: '#fff'}}>{props.text}</Text>
  </TouchableOpacity>
);

function ProjectThree() {
  return (
    <View>
      <CustomButton text="Say hello" onPress={() => Alert.alert('Hello!')} />
      <CustomButton
        text="Say goodbye"
        onPress={() => Alert.alert('Bye!')}
        buttonStyle={{backgroundColor: '#DBA979'}}
      />
    </View>
  );
}

export default ProjectThree;
