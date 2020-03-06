import { FETCH_POST, ADD_POST, UPDATE_POST, DELETE_POST } from '../action_types';

export default function(state = [], action) {
	switch(action.type) {
		case FETCH_POST:
			return action.payload;
		case ADD_POST:
			return [...state, action.payload];
		case UPDATE_POST:
			state = state.filter(_=>_.id !== action.payload.id);
			return [...state, action.payload];
		case DELETE_POST:
      return state.filter(_ => _.id !== action.payload.id);
		default:
			return state;
	}
}