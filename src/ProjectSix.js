/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, ScrollView} from 'react-native';

const Square = ({text, bgColor = '#AFD198'}) => (
  <View
    style={{
      width: 100,
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: bgColor,
      margin: 20,
    }}>
    <Text>{text}</Text>
  </View>
);

const data = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
function ProjectSix() {
  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      {data.map((item, index) => (
        <Square key={item} text={`Square ${index + 1}`} />
      ))}
    </ScrollView>
  );
}

export default ProjectSix;
