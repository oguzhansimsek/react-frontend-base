import Types from 'redux-store/types/session';

const initialState = {
  user: {},
  error: {},
  loading: false,
  isLogin: false,
};

export default function session(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case Types.USER_AUTH_LOADING:
      return {
        user: null,
        error: null,
        loading: true,
        isLogin: false,
      };
    case Types.USER_AUTH_STATE:
      return {
        user: payload.data,
        error: null,
        loading: false,
        isLogin: true,
      };
    case Types.USER_AUTH_ERROR:
      return {
        user: null,
        error: payload.error,
        loading: false,
        isLogin: false,
      };
    case Types.USER_AUTH_LOGOUT:
      return {
        user: null,
        error: null,
        loading: false,
        isLogin: false,
      };
    default:
      return state;
  }
}
