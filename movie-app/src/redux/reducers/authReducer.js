import { SET_USER_DATA, CLEAN_USER_DATA } from '../actions/authActions';

const initialState = {
  userId: '',
  email: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };

    case CLEAN_USER_DATA:
      return {
        ...state,
        userId: '',
        email: '',
      };

    default:
      return state;
  }
};

export default authReducer;
