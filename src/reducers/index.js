import { combineReducers } from 'redux';
import messages from './messages';
import labels from './labels';

export default combineReducers({
  messages,
  labels
});
