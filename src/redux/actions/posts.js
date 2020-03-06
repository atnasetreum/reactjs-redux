import { FETCH_POST, ADD_POST, UPDATE_POST, DELETE_POST } from '../action_types';
//import { dispatchDef } from './common';
import request from '../../request/request-axios';

export const reduxGetPost = () => {
  return (dispatch) => {
    return request.get(`/posts`)
      .then(response => {
        dispatch({
          type: FETCH_POST,
          payload: response.data
        })
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const reduxAddPost = data => {
  return (dispatch) => {
    return request.post(`/posts`, data)
      .then(response => {
        dispatch({
          type: ADD_POST,
          payload: response.data
        })
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const reduxUpdatePost = data => {
  return (dispatch) => {
    return request.post(`/posts`, data)
      .then(response => {
        dispatch({
          type: UPDATE_POST,
          payload: response.data
        })
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const reduxDeletePost = data => {
  return (dispatch) => {
    return request.delete(`/posts/${data.id}`)
      .then(response => {
        dispatch({
          type: DELETE_POST,
          payload: data
        })
      })
      .catch(error => {
        throw(error);
      });
  };
};


/*export function reduxGetPost(params) {
  return async (dispatch, getState) => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts').then( resp => (resp.data));
      dispatch(res);
    } catch (error) {
      //throw createApiError(error);
    }
  };
}*/