import * as types from "./actionType";
import axios from "axios";

const getUsers=(users)=>({
    type:types.GET_USERS,
    payload:users,
});

export const loadUsers=()=>{
    return function (dispatch){
        axios.get("http://localhost:8080/users").then((res)=>{
            console.log(res.data)
            dispatch(getUsers(res.data));
        })
        .catch((err)=>console.log(err));
    }
}