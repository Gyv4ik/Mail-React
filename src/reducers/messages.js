import { SET_YEAR } from '../constants/Page'

const initialState = [
	{
		checked: false,
		text: 'First message',
		labels: null
	},
	{
		checked: false,
		text: 'Second message',
		labels: null
	},
	{
		checked: false,
		text: 'Third message',
		labels: null
	}
];

export default function messages(state = initialState, action) {

  switch (action.type) {
    case SET_YEAR:
      return { ...state, year: action.payload }

    default:
      return state;
  }

}
