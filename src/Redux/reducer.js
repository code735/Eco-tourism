import { LOGIN_SUCCESS, LOGIN_FAILURE, SEND_TO, LOGOUT} from './actionTypes';

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  user: null,
  error: null,
  privateroute:"/"
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
    case SEND_TO:
      return{
        ...state,
        privateroute:action.payload
      }
    case LOGOUT:
      return{
        ...state,
        isAuthenticated:false,
        privateroute:'/'
      }
    default:
      return state;
  }
};

export default reducer;
