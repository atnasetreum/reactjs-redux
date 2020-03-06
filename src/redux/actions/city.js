import { SET_CITY } from '../action_types';
import { dispatchDef } from './common';

export const reduxSetCity = payload => dispatchDef(payload, SET_CITY);

/*export function reduxSetCity(payload) {
	return function (dispatch) {
		return dispatch({
			type: SET_CITY,
			payload: payload
		});
	}
}*/