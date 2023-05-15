// import { getUsers,getPosts,getComments } from "./actions";

const initialState = {
    users: [],
    posts: [],
    comments: []
  };

  const rootReducer = (state =initialState,action) =>{
    switch(action.type){
        case "GET_USERS":
            return {
                ...state,
                users: action.payload
              };
              case 'GET_POSTS':
      return {
        ...state,
        posts: action.payload
      };
    case 'GET_COMMENTS':
      return {
        ...state,
        comments: action.payload
      };
      default:
      return state;
    }
  }
  export default rootReducer;