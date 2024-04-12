import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function ProjectOne() {
  return (
    <View style={styles.ViewStyle}>
      <Text style={styles.TextStyle}>Hello World</Text>
    </View>
  );
}

export default ProjectOne;

const styles = StyleSheet.create({
  ViewStyle: {
    width: 100,
    height: 100,
    backgroundColor: 'aqua',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextStyle: {
    color: 'black',
  },
});
