import React from 'react';
import { View, TextInput } from 'react-native';

const CTwriting = (props) => {
  return (
    <View
      style={{
        width: 285,
        marginTop: 15,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 5,
      }}>
      <TextInput
        underlineColorAndroid="transparent"
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.onChangeText}
        numberOfLines={props.numberOfLines}
        multiline={props.multiline}
        style={props.style}
      />
    </View>
  );
};

export default CTwriting;