export const GET_USER = 'GET_USER';

export const getUser = () => {
  console.log('Masuk AKsi');
  return dispatch => {
    dispatch({
      type: GET_USER,
      payload: {
        nama: 'Afif',
        email: 'afifbasya@gmail.com',
      },
    });
  };
};
