import { ADD_CAT, UPDATE_CAT, DELETE_CAT } from '../action_types';
import { dispatchDef } from './common';

export const reduxAddCat    = payload => dispatchDef(payload, ADD_CAT);
export const reduxUpdateCat = payload => dispatchDef(payload, UPDATE_CAT);
export const reduxDeleteCat = payload => dispatchDef(payload, DELETE_CAT);

/*export function reduxUpdateCat(payload) {
	return function (dispatch) {
		return dispatch({
			type: UPDATE_CAT,
			payload: payload
		});
	}
}*/

