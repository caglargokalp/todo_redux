import { v4 } from "uuid";
import { useDispatch } from "react-redux";
import { ActionTypes } from "../redux/actionTypes/todoTypes";
import { addtodo } from "../redux/actions/todoActions";
import axios from "axios";

const AddForm = () => {
  //dispatch kurulum
  const dispatch = useDispatch();

  //form gönderilmesi
  const handleSubmit = (e) => {
    e.preventDefault();

    //todo ojesi oluşturma
    const newTodo = {
      id: v4(),
      text: e.target[0].value,
      is_done: false,
      created_at: new Date(),
    };
    //veritabanına ekle

    axios
      .post("todos", newTodo)
      //veritabanına aklendiyse:storu güncelle
      .then(dispatch(addtodo(newTodo)))
      //veritabanına eklenmediyse: haber ver
      .catch(() => alert("üzgünüz bir sorun oluştu"));

    //todoyu store a ekleme
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="d-flex gap-2 justify-content-center"
      >
        <input className="form-control" type="text" />
        <button className="btn btn-lg btn-outline-light">Ekle</button>
      </form>
    </div>
  );
};

export default AddForm;
