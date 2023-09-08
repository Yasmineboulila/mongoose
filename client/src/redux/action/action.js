import axios from "axios"
import { GET_POST } from "../actionType/actionType"

const path_url="http://localhost:5666"

export const get_post=()=>(dispatch)=>{
    try {
        axios.get(`${path_url}/api/getPoste`).then((res)=>{
            dispatch({
                type:GET_POST,
                payload:res.data.data
            })

        })
    } catch (error) {
        console.log(error)
        
    }
}