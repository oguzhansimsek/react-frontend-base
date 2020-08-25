import { login, logout } from 'redux-store/actions/session';

const mapStateToProps = (state) => ({
  session: state.session.session,
  error: state.session.error,
  loading: state.session.loading,
  isLogin: state.session.isLogin,
});

const mapDispatchToProps = {
  login,
  logout,
};

export default [mapStateToProps, mapDispatchToProps];
