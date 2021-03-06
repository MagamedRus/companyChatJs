import { AuthActionTypes } from "../../constants/types/reducerActionTypes";
import { USER_DATA } from "../../constants/localStorageKeys";

export const setAuth = (authData) => {
  //Todo: delete it, and create good jwt access..
  localStorage.setItem(USER_DATA, JSON.stringify(authData));
  return (dispatch) => {
    dispatch({
      type: AuthActionTypes.SET_AUTH_DATA,
      payload: authData,
    });
  };
};
