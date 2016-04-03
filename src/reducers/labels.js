import { CREATE_LABEL } from '../constants/Page'

const initialState = [
  {
    choosen: false,
    text: 'Label1'
  },
  {
    choosen: false,
    text: 'Label2'
  },
  {
    choosen: false,
    text: 'Label3'
  }
];

export default function messages(state = initialState, action) {

  switch (action.type) {
    case CREATE_LABEL:
      return { ...state, year: action.payload }

    default:
      return state;
  }

}
