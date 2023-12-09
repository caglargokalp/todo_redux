import axios from "axios"
import AddForm from "./components/AddForm"
import ListTodos from "./components/ListTodos"
import { v4 } from "uuid"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTodos } from "./redux/actions/todoActions";


axios.defaults.baseURL='http://localhost:4000';

const App = () => {
  const dispatch=useDispatch();

  useEffect(() =>{
    axios.get("todos")
    .then((res) => dispatch(setTodos(res.data)))
  },[])
 
  return (


    <div 

  
    className="container d-flex flex-column">
      <AddForm />
      <ListTodos />
     </div>
  )
}

export default App