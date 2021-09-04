import firebase from '../config/FIREBASE';

import {storeData} from '../util';

export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_USER = 'LOGIN_USER';
import SweetAlert from 'react-native-sweet-alert';

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
      .createUserWithEmailAndPassword(data.email, password)
      .then(success => {
        console.log('UID', success.user.uid);
        // Ambil UID, buat dataBaru (data+uid)
        const dataBaru = {
          ...data,
          uid: success.user.uid,
        };
        console.log('data', dataBaru);
        firebase
          .database()
          .ref('users/' + success.user.uid)
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
export const loginUser = (email, passwod) => {
  console.log('Login');
  return dispatch => {
    //Loading
    dispatch({
      type: LOGIN_USER,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, passwod)
      .then(success => {
        firebase
          .database()
          .ref('/users/' + success.user.uid)
          .once('value')
          .then(resDB => {
            if (resDB.val()) {
              console.log('Login data sukses');
              dispatch({
                type: LOGIN_USER,
                payload: {
                  loading: false,
                  data: resDB.val(),
                  errorMessage: false,
                },
              });
              storeData('user', resDB.val());
            } else {
              console.log('Login data failed');
              dispatch({
                type: LOGIN_USER,
                payload: {
                  loading: false,
                  data: false,
                  errorMessage: 'Data User Tidak ditemukan',
                },
              });
              SweetAlert.showAlertWithOptions(
                {
                  title: 'Error',
                  subTitle: 'Data User Tidak ditemukan',
                  confirmButtonTitle: 'OK',
                  confirmButtonColor: '#000',
                  otherButtonTitle: 'Cancel',
                  otherButtonColor: '#dedede',
                  style: 'error',
                  cancellable: true,
                },
                callback => console.log('callback'),
              );
            }
          });
      })
      .catch(error => {
        console.log('Login data error');
        dispatch({
          type: LOGIN_USER,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
        SweetAlert.showAlertWithOptions(
          {
            title: 'Error',
            subTitle: error.message,
            confirmButtonTitle: 'OK',
            confirmButtonColor: '#000',
            otherButtonTitle: 'Cancel',
            otherButtonColor: '#dedede',
            style: 'error',
            cancellable: true,
          },
          callback => console.log('callback'),
        );
      });
  };
};
