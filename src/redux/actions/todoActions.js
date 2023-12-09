//bu objeyi tanımlayacağız

import { ActionTypes } from "../actionTypes/todoTypes"





//aksiyon oluşturun fonksiyon tanımlama
export const addtodo=(payload) => ({
    type:ActionTypes.ADD_TODO,
    payload
})

 export const edittodo=(payload) => ({
    type:ActionTypes.EDIT_TODO,
    payload,
})


export const deletetodo=(payload) => ({
    type:ActionTypes.TODO_DELETE,
    payload,
})
export const setTodos=(payload) => ({
    type:ActionTypes.SET_TODOS,
    payload,
})


