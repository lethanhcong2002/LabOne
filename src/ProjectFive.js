/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';

const Square = ({text, bgColor = '#AFD198'}) => (
  <View
    style={{
      width: 100,
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: bgColor,
    }}>
    <Text>{text}</Text>
  </View>
);
function ProjectFive() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}>
      <Square text="Square 1" />
      <Square text="Square 2" bgColor="#1C1678" />
      <Square text="Square 3" bgColor="#E9C874" />
    </View>
  );
}

export default ProjectFive;
