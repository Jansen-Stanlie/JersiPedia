import firebase from '../config/FIREBASE';
require('firebase/auth');

import {storeData} from '../util';

export const REGISTER_USER = 'REGISTER_USER';

export const registerUser = (data, password) => {
  return dispatch => {
    dispatch({
      type: REGISTER_USER,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    firebase
      .auth()
      .signInWithEmailAndPassword(data, password)
      .then(success => {
        const dataBaru = {
          ...data,
          uid: success.user.uid,
        };

        firebase
          .database()
          .ref('users' + success.user.uid)
          .set(dataBaru);
        dispatch({
          type: REGISTER_USER,
          payload: {
            loading: false,
            data: dataBaru,
            errorMessage: false,
          },
        });

        storeData('user', dataBaru);
      })
      .catch(error => {
        var errorCode = error.code;
        var errorMessage = error.message;

        dispatch({
          type: REGISTER_USER,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
        alert(error.message);
      });
  };
};
