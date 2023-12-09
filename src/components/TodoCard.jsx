import { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "./Modal";
import { ActionTypes } from "../redux/actionTypes/todoTypes";
import { deletetodo, edittodo } from "../redux/actions/todoActions";
import axios from "axios";

const TodoCard = ({ todo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  //store dan todoyo kaldırır
  const handleDelete = () => {

    axios.delete(`/todos/${todo.id}`)
    .then(()=> dispatch(deletetodo(todo.id)))




    //reducera haber ver
  
    
    console.log("nedir bu",todo.id)
  };

  const handelUpdate = () => {
    //todonun güncel halini belirleme
    const updated = { ...todo, is_done: !todo.is_done };

    //store daki todo dizisini güncelle

    dispatch(edittodo(updated));
  };

  return (
    <>
      <div className="border shadow shadow-lg p-4 my-5">
        <h5>{todo.text}</h5>
        <h6>{todo.is_done ? "Tamamlandı" : "Dvam Ediyor"} </h6>
        <p> {new Date( todo.created_at).toLocaleDateString()} </p>
        <button onClick={() => setIsOpen(true)} className="btn btn-warning ">
          Düzenle
        </button>
        <button onClick={handelUpdate} className="btn btn-success mx-4">
          {todo.is_done ? "geri al" : "tamamla"}
        </button>
        <button onClick={handleDelete} className="btn btn-danger">
          Sil
        </button>
      </div>
      {/* modal */}

      {isOpen && (
        <Modal
          close={() => {
            setIsOpen(false);
          }}
          todo={todo}
        />
      )}
    </>
  );
};

export default TodoCard;
