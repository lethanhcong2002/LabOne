import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

function ProjectFour() {
  const [pressCount, setPressCount] = useState(0);
  return (
    <View>
      <Text>Pess the button: {pressCount} time(s)</Text>
      <Button title="Press" onPress={() => setPressCount(pressCount + 1)} />
    </View>
  );
}

export default ProjectFour;
