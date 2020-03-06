import { combineReducers } from 'redux';
import cityReducer from './city';
import reducerCat from './categorias';
import reducerPost from './posts';

export default combineReducers({
	city: cityReducer,
	categorias: reducerCat,
	post: reducerPost
});
