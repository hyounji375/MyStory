import produce from "immer";

const initialState = {
  info: null,
  loginLoading: false,
  loginDone: false,
  loginError: null,

  logoutLoading: false,
  logoutDone: false,
  logoutError: null,

  signLoading: false,
  signDone: false,
  signError: null,
};

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

export const SIGN_REQUEST = "SIGN_REQUEST";
export const SIGN_SUCCESS = "SIGN_SUCCESS";
export const SIGN_FAILURE = "SIGN_FAILURE";

export const SIGN_DONE_REQUEST = "SIGN_DONE_REQUEST";

const userReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOGIN_REQUEST:
        draft.loginLoading = true;
        draft.loginDone = false;
        draft.loginError = null;
        break;
      case LOGIN_SUCCESS:
        draft.loginLoading = false;
        draft.loginDone = true;
        draft.info = action.data;
        break;
      case LOGIN_FAILURE:
        draft.loginLoading = false;
        draft.loginDone = true;
        draft.loginError = action.error;
        break;

      case LOGOUT_REQUEST:
        draft.logoutLoading = true;
        draft.logoutDone = false;
        draft.logoutError = null;
        break;
      case LOGOUT_SUCCESS:
        draft.logoutLoading = false;
        draft.logoutDone = true;
        draft.info = null;
        break;
      case LOGOUT_FAILURE:
        draft.logoutLoading = false;
        draft.logoutError = action.error;
        break;

      case SIGN_REQUEST:
        draft.signLoading = true;
        draft.signDone = false;
        draft.signError = null;
        break;
      case SIGN_SUCCESS:
        draft.signLoading = false;
        draft.signDone = true;
        break;
      case SIGN_FAILURE:
        draft.signLoading = false;
        draft.signError = action.error;
        break;
      default:
        return state;
    }
  });
export default userReducer;
