import {GET_KOTA, GET_PROVINSI} from '../../actions/RajaOngkirAction';

const initialState = {
  getProvinsiLoading: false,
  getProvinsiResult: false,
  getProvinsiError: false,

  getKotaLoading: false,
  getKotaResult: false,
  getKotaError: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PROVINSI:
      console.log('masuk rediucer', action);
      return {
        ...state,
        getProvinsiLoading: action.payload.loading,
        getProvinsiResult: action.payload.data,
        getProvinsiError: action.payload.error,
      };
    case GET_KOTA:
      console.log('masuk rediucer kota', action);
      return {
        ...state,
        getKotaLoading: action.payload.loading,
        getKotaResult: action.payload.data,
        getKotaError: action.payload.error,
      };
    default:
      return state;
  }
}
