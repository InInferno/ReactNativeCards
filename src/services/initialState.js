import uuid from 'react-native-uuid';

const initialState = {
  cardsData: [
    {
      title: 'Title',
      status: true,
      text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, quam!',
      uuid: uuid.v4()
    },
    {
      title: 'Title',
      status: false,
      text: 'Lorem ipsum dolor sit amet',
      uuid: uuid.v4()
    },
  ]
};

export default initialState;
