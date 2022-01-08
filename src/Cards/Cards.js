import React, { useRef, useState } from 'react';
import Card from '../Card/Card'
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addCard } from '../services/actions/actions';
import uuid from 'react-native-uuid';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  input: {
    width: 200,
    height: 40, 
    borderColor: '#ccc', 
    borderWidth: 1,
    marginBottom: 5
  },
  title: {
    marginTop: 10,
    fontSize: 20
  },
  stats: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    minWidth: 200,
    maxWidth: 200
  }
});

const ALL_CARDS = "all";
const ACTIVE_CARDS = "active";
const COMPLETED_CARDS = "completed";

const filter = (cards, status) => {
  switch (status) {
    case ALL_CARDS:
      return cards;
    case ACTIVE_CARDS:
      return cards.filter((card) => card.status);
    case COMPLETED_CARDS:
      return cards.filter((card) => !card.status);
    default:
      throw new Error("Ошибка");
  }
};

const Cards = () => {

  const dispatch = useDispatch();
  const { cardsData } = useSelector(store => store);
  const [status, setStatus] = useState(ALL_CARDS);
  const [titleInput, setTitleInput] = useState(null);
  const [textInput, setTextInput] = useState(null);
  const titleRef = useRef();
  const textRef = useRef();

  const addCardInData = () => {
    dispatch(addCard({title: titleInput, text: textInput, status: false, uuid: uuid.v4()}))
    titleRef.current.clear();
    textRef.current.clear();
    setTitleInput(null);
    setTextInput(null);
  }

  const counter = (status) => {
    let counter = 0;
    cardsData && cardsData.forEach(card => {
      if(card.status === status) {
        counter++
      }
    });
    return counter || 0;
  }

  const filteredСards = filter(cardsData, status);

  return (
    <View style={styles.container}>
      <View>
        <Text>Add Card</Text>
        <TextInput
          maxLength={10}
          clearButtonMode="always"
          ref={titleRef}
          onChangeText={value => setTitleInput(value)}
          style={styles.input} 
          placeholder='Title' />
        <TextInput 
          maxLength={80}
          clearButtonMode="always"
          ref={textRef}
          onChangeText={value => setTextInput(value)}
          style={styles.input} 
          placeholder='Text' />
        <Button
          title="Add Card"
          disabled={titleInput && textInput ? false : true}
          onPress={addCardInData}
        />
      </View>
      <View contentContainerStyle={styles.container}> 
        <Text 
          style={styles.title} 
          onPress={() => setStatus(ALL_CARDS)}
        >Cards</Text>
        <View style={styles.stats}>
          <Text
            onPress={() => setStatus(ACTIVE_CARDS)}
          >Done: {`${counter(true)}`}</Text>
          <Text
            onPress={() => setStatus(COMPLETED_CARDS)}
          >Undone: {`${counter(false)}`}</Text>
        </View>
        {filteredСards && filteredСards.map((card) => {
          return <Card key={card.uuid} title={card.title} status={card.status} text={card.text} uuid={card.uuid}/>
        })}
      </View>
    </View>
  );
};

export default Cards;
