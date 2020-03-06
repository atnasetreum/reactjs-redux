import { SET_CITY } from '../action_types';

export default function(state = '', action) {
	switch(action.type) {
		case SET_CITY:
			//return {...state, city: action.payload}
			return action.payload
		default:
			return state;
	}
}
