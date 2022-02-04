import {CREATE ,FETCH_ALL,GET_ONE_POST, TOGGLE_FALSE, TOGGLE_TRUE,DELETE,LIKE} from "../type"

const initState={ 
    posts:[],
    post:{},
    update:false
}
const postsReducers =(state=initState,action)=>{
    switch (action.type) {
        case FETCH_ALL:
            return {...state,posts:action.payload.postMessages};
        case CREATE :
            return {...state, posts:[...state.posts,action.payload]};
         case DELETE :
             return {...state,posts:state.posts.filter(post=>post._id !== action.payload)}
         case GET_ONE_POST :
             return {...state,post:action.payload.post}
         case TOGGLE_TRUE : 
             return {...state,update:true}
        case TOGGLE_FALSE :
            return {...state,update:false}
        case LIKE : 
             return state.posts.map((post) => (post._id === action.payload._id ? action.payload : post));
        default:
            return state;
    }
}
export default postsReducers