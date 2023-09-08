import {GET_POST} from "../actionType/actionType"

const initialState={
    post:[]
}
 const postReducer=(state=initialState,{type,payload})=>{
    switch (type) {
        case GET_POST: 
        return {...state,post:payload}
        default:
            return state
          
    }
 }
 export default postReducer

