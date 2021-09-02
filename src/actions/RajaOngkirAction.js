/* eslint-disable no-alert */
import axios from 'axios';
import {API_HEADER_RAJAONGKIR, API_RAJAONGKIR, API_TIMEOUT} from '../util';

export const GET_PROVINSI = 'GET_PROVINSI';
export const GET_KOTA = 'GET_KOTA';

export const getProvinsiList = () => {
  console.log('Get prov');
  return dispacth => {
    dispacth({
      type: GET_PROVINSI,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    axios({
      method: 'get',
      url: API_RAJAONGKIR + 'province',
      timeout: API_TIMEOUT,
      headers: API_HEADER_RAJAONGKIR,
    })
      .then(response => {
        console.log('responses', response);
        if (response.status !== 200) {
          dispacth({
            type: GET_PROVINSI,
            payload: {
              loading: true,
              data: false,
              errorMessage: response,
            },
          });
        } else {
          dispacth({
            type: GET_PROVINSI,
            payload: {
              loading: true,
              data: response.data ? response.data.rajaongkir.results : [],
              errorMessage: false,
            },
          });
        }
      })
      .catch(error => {
        dispacth({
          type: GET_PROVINSI,
          payload: {
            loading: true,
            data: false,
            errorMessage: error,
          },
        });
        alert(error);
      });
  };
};
export const getKotaList = provinsi_id => {
  console.log('Get Kota');
  return dispacth => {
    dispacth({
      type: GET_KOTA,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    axios({
      method: 'get',
      url: API_RAJAONGKIR + 'city?province=' + provinsi_id,
      timeout: API_TIMEOUT,
      headers: API_HEADER_RAJAONGKIR,
    })
      .then(response => {
        console.log('responses KOtas', response);
        if (response.status !== 200) {
          dispacth({
            type: GET_KOTA,
            payload: {
              loading: true,
              data: false,
              errorMessage: response,
            },
          });
        } else {
          dispacth({
            type: GET_KOTA,
            payload: {
              loading: true,
              data: response.data ? response.data.rajaongkir.results : [],
              errorMessage: false,
            },
          });
        }
      })
      .catch(error => {
        dispacth({
          type: GET_KOTA,
          payload: {
            loading: true,
            data: false,
            errorMessage: error,
          },
        });
        alert(error);
      });
  };
};
