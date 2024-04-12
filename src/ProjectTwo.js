import React from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function ProjectTwo() {
  return (
    <View style={styles.container}>
      <Button title="Button 1" onPress={() => Alert.alert('Hello button 1')} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert('Hello button 2')}>
        <Text style={styles.text}>Button 2</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ProjectTwo;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'blue',
    marginTop: 10,
    alignItems: 'center',
    padding: 10,
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
});
