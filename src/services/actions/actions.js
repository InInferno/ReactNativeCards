import {
  ADD_CARD,
  DELETE_CARD,
  TOGGLE_CARD_STATUS
} from './actionsTypes'
import uuid from 'react-native-uuid';

export const addCard = (card) => ({
  type: ADD_CARD,
  cardsData: {
    ...card,
    uuid: uuid.v4()
  }
})

export const deleteCard = (card) => ({
  type: DELETE_CARD,
  card
})

export function toggleCardStatus(card) {
  return {
    type: TOGGLE_CARD_STATUS,
    card
  };
}
