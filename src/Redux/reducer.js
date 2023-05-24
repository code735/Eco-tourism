import { LOGIN_SUCCESS, LOGIN_FAILURE} from './actionTypes';

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  user: null,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload,
        error: null
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
