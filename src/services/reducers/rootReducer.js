import initialState from '../initialState';
import {
  ADD_CARD,
  DELETE_CARD,
  TOGGLE_CARD_STATUS
} from '../actions/actionsTypes';

export function rootReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_CARD:
      return { 
        cardsData: [
          ...state.cardsData, 
          action.cardsData
        ] 
      };
    case DELETE_CARD:
      return {
          ...state, 
          cardsData: [
          ...state.cardsData.filter((card) => card.uuid !== action.card.uuid)
        ]
      }; 
    case TOGGLE_CARD_STATUS:
      return {
        ...state,
        cardsData: [
          ...state.cardsData.map((card) => {
            if (card.uuid === action.card.uuid) {
              return {...card, status: !card.status}
            }
            return card
          })
        ]
      }
    default: return state;
  }
}
