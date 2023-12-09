import { ActionTypes } from "../actionTypes/todoTypes";

const initialState = {
  todos: [],
  length: 0,
  isEmpty: true,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {


    case ActionTypes.SET_TODOS:
      return{...state,todos: action.payload}




    case "ADD_TODO":
      const tempTodos = state.todos.concat(action.payload);
      console.log("TEMP_TODOS", tempTodos);
      return { ...state, todos: action.payload };

      
    case "TODO_DELETE":
      //payload'la gelen id'li todoyu diziden çıkart
      const filteredTodos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
      return { ...state, todos: filteredTodos };
    case "EDIT_TODO":
      console.log("edit todo", action);
      const updatedTodos = state.todos.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      return { ...state, todos: updatedTodos };

    default:
      return state;
  }
};

export default todoReducer;
