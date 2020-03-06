import { ADD_CAT, UPDATE_CAT, DELETE_CAT } from '../action_types';

export default function(state = [], action) {
	switch(action.type) {
		case ADD_CAT:
			//return {...state, categorias: [...state.categorias, action.payload]}
			return [...state, action.payload]
		case UPDATE_CAT:
			let categorias = state.filter(_=>_.id !== action.payload.id);
			categorias.push(action.payload);
			return [...categorias]
		case DELETE_CAT:
			let categoriasD = state.filter(_=>_.id !== action.payload.id);
			return [...categoriasD]
		default:
			return state;
	}
}