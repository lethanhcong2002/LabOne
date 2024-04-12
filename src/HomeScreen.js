/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('1')}>
        <View style={{backgroundColor: 'blue', padding: 10, margin: 5}}>
          <Text style={{color: 'white'}}>Go to Screen 1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('2')}>
        <View style={{backgroundColor: 'blue', padding: 10, margin: 5}}>
          <Text style={{color: 'white'}}>Go to Screen 2</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('3')}>
        <View style={{backgroundColor: 'blue', padding: 10, margin: 5}}>
          <Text style={{color: 'white'}}>Go to Screen 3</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('4')}>
        <View style={{backgroundColor: 'blue', padding: 10, margin: 5}}>
          <Text style={{color: 'white'}}>Go to Screen 4</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('5')}>
        <View style={{backgroundColor: 'blue', padding: 10, margin: 5}}>
          <Text style={{color: 'white'}}>Go to Screen 5</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('6')}>
        <View style={{backgroundColor: 'blue', padding: 10, margin: 5}}>
          <Text style={{color: 'white'}}>Go to Screen 6</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('7')}>
        <View style={{backgroundColor: 'blue', padding: 10, margin: 5}}>
          <Text style={{color: 'white'}}>Go to Screen 7</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('8')}>
        <View style={{backgroundColor: 'blue', padding: 10, margin: 5}}>
          <Text style={{color: 'white'}}>Go to Screen 8</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen;
