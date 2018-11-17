import React from 'react';
import axios from 'axios';
import { setFlash } from './flash';
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const USER = 'USER'

export const login = (user) => {
  return { type: LOGIN, user };
}

const logout = () => {
  return { type: LOGOUT };
}

export const updateUser = (id, user) => {
  return (dispatch) => {
    let data = new FormData()
    data.append('file', user.file)
    axios.put(`/api/users/${id}?name=${user.name}&email=${user.email}`, data)
      .then(res => dispatch({ type: USER, user: res.data }))
  }
}

export const registerUser = (user, history) => {
  return (dispatch) => {
    axios.post('/api/auth', user)
    .then( (res) => {
      const { data: { data: user } } = res;
      dispatch(login(user));
      history.push('/')
    })
    .catch( res => {
      const messages =
        res.response.data.errors.full_messages.map(message =>
          <div>{message}</div>);
        dispatch(setFlash(messages, 'red'));
    })
  }
}

export const handleLogout = history => {
  return (dispatch) => {
    axios.delete('/api/auth/sign_out')
      .then(res => {
        dispatch(logout());
        dispatch(setFlash('Logged out successfully!', 'green'));
        history.push('/login');
      })
      .catch(res => {
        let errors = res.response.data.errors ? res.response.data.errors : ['Something went wrong']
        if (!Array.isArray(errors))
          errors = [errors]
        const messages =
          errors.map( (message, i) =>
            <div key={i}>{message}</div>);
        dispatch(setFlash(messages, 'red'));
      });
  };
};

export const handleLogin = (user, history) => {
  return (dispatch) => {
    axios.post('/api/auth/sign_in', user)
      .then(res => {
        const { data: { data: user } } = res;
        dispatch(login(user));
        history.push('/');
      })
      .catch(res => {
        let errors = res.response.data.errors ? res.response.data.errors : ['Something went wrong']
        if (!Array.isArray(errors))
          errors = [errors]
        const messages =
          errors.map( (message, i) =>
            <div key={i}>{message}</div>);
        dispatch(setFlash(messages, 'red'));
      });
  };
};

export default (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
    return action.user;
    case LOGOUT:
    return {};
    case USER:
      return action.user;
    default:
    return state;
  }
};