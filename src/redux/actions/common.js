export const dispatchDef = (payload, type) => function (dispatch) {
	return dispatch({
		type: type,
		payload: payload
	});
}