import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View>
      <Text style={styles.header}>Bài thực hành 1</Text>
      <TouchableOpacity onPress={() => navigation.navigate('1')}>
        <View style={styles.viewButton}>
          <Text style={styles.textButton}>Project 1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('2')}>
        <View style={styles.viewButton}>
          <Text style={styles.textButton}>Project 2</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('3')}>
        <View style={styles.viewButton}>
          <Text style={styles.textButton}>Project 3</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('4')}>
        <View style={styles.viewButton}>
          <Text style={styles.textButton}>Project 4</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('5')}>
        <View style={styles.viewButton}>
          <Text style={styles.textButton}>Project 5</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('6')}>
        <View style={styles.viewButton}>
          <Text style={styles.textButton}>Project 6</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('7')}>
        <View style={styles.viewButton}>
          <Text style={styles.textButton}>Project 7</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('8')}>
        <View style={styles.viewButton}>
          <Text style={styles.textButton}>Project 8</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('9')}>
        <View style={styles.viewButton}>
          <Text style={styles.textButton}>Project Calculator</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    padding: 15,
    fontSize: 20,
    textAlign: 'center',
  },
  viewButton: {
    backgroundColor: '#1C1678',
    padding: 10,
    margin: 5,
  },
  textButton: {
    color: 'white',
    fontSize: 18,
    padding: 5,
  },
});
