import { LOGIN_SUCCESS, LOGIN_FAILURE, SEND_TO, LOGOUT, SEND_DATA, BOOKING_DATA, WISHLIST_ARRAY} from './actionTypes';

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  user: null,
  error: null,
  privateroute:"/",
  cityData:undefined,
  booking_place:undefined,
  wishlistArray:[]
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
    case SEND_DATA:
      return{
        ...state,
        cityData:action.payload
      }
    case BOOKING_DATA:
      return{
        ...state,
        booking_place:action.payload
      }
    case WISHLIST_ARRAY:
      return{
        ...state,
        wishlistArray:action.payload
      }
    default:
      return state;
  }
};

export default reducer;
