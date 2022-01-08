import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { useDispatch } from 'react-redux';
import { deleteCard, toggleCardStatus } from '../services/actions/actions';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 10,
    borderWidth: 2,
    padding: 5,
    borderColor: '#ccc',
    minWidth: 200,
    maxWidth: 200
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  text: {
    marginBottom: 10
  },
});

const Card = ({title, status, text, uuid}) => {

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text 
        onPress={() => {
          dispatch(toggleCardStatus({title, status, text, uuid}))
        }} 
        style={styles.title}
      >{title}</Text>
      <Text style={styles.text}>{text}</Text>
      <Text 
        style={{
          position: 'absolute', top: 5, right: 5,
          color: status ? 'green' : 'red',
        }} 
      >{status ? 'done' : 'undone'}</Text>
      <Button
        title="Remove Card"
        onPress={() => {
          dispatch(deleteCard({title, status, text, uuid}))
        }}
      />
    </View>
  );
};

export default Card;
