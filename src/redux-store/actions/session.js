import types from 'redux-store/types/session';

export const login = (data) => async (dispatch) => {
  console.log({ data });
  dispatch({
    type: types.USER_AUTH_LOADING,
    payload: { user: false, loading: true, error: false, isLogin: false },
  });
  try {
    dispatch({
      type: types.USER_AUTH_STATE,
      payload: { user: {}, loading: false, error: false, isLogin: true },
    });
  } catch (error) {
    dispatch({
      type: types.USER_AUTH_ERROR,
      payload: { user: false, loading: false, error, isLogin: false },
    });
  }
};

export const logout = () => async (dispatch) => {
  dispatch({
    type: types.USER_AUTH_LOADING,
    payload: { user: null, loading: true, error: false, isLogin: false },
  });

  try {
    dispatch({
      type: types.USER_AUTH_LOGOUT,
      payload: { user: null, loading: false, error: false, isLogin: false },
    });
  } catch (error) {
    dispatch({
      type: types.USER_AUTH_ERROR,
      payload: { user: false, loading: false, error, isLogin: false },
    });
  }
};

export default {};
