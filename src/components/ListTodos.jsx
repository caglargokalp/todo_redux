import { useSelector } from "react-redux";
import TodoCard from "./TodoCard";
import todoReducer from "../redux/reducers/todoReducer";

const ListTodos = () => {
 
  
    //todoreducer da tutulan verilere abone olma işlemi
  const state = useSelector((store) => store.todoReducer);
  console.log(state)
  return ( 
    
    <div>
             
        
      { state.todos.length === 0 ? (
      
        <h5>herhangi bir yapılacak eklenemedi</h5>
      ) : (
        state.todos.map((todo) => (<TodoCard key={todo.id} todo={todo} />))
      )
         }
     
    </div>
  );
};

export default ListTodos;
