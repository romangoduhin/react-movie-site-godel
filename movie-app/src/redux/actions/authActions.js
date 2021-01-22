export const SET_USER_DATA = 'SET_USER_DATA';
export const CLEAN_USER_DATA = 'CLEAN_USER_DATA';

export const setAuthUserData = (userId, email) => (
  {
    type: SET_USER_DATA,
    payload: { userId, email },
  }
);

export const cleanAuthUserData = () => (
  {
    type: CLEAN_USER_DATA,
  }
);
