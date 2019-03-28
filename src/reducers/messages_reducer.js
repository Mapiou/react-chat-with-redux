import { FETCH_MESSAGES, CREATE_MESSAGE, SELECT_CHANNEL } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_MESSAGES:
      return action.payload.messages;

    case CREATE_MESSAGE:
      const copiedState = state.slice(0);
      copiedState.push(action.payload);
      return copiedState;

    case SELECT_CHANNEL:
      return [];

    default:
      return state;
  }
}
