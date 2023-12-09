import { useDispatch } from "react-redux";

const Modal = ({ todo, close }) => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();


  const updated = { ...todo, text: e.target[1].value };

  console.log("bu nedir",e.target[1])

  dispatch({
    type:"EDIT_TODO",
    payload:updated,
  })
  //modal ı kapat
  close();
};

  return (
    <div>
      {" "}
      <div
        className="modal d-block text-black bg-black bg-opacity-50"
        tabindex="-1"
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <form onSubmit={handleSubmit} className="modal-content" action="">
              <div className="modal-header">
                <h5 className="modal-title">Todo'yu Düzenle</h5>
                <button
                  type="button"
                  className="close"
                  onClick={close}
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <label htmlFor="">Yeni İsin Belirle </label>
                <input
                  defaultValue={todo.text}
                  className="form-control"
                  type="text"
                />
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">
                  Kaydet
                </button>
                <button
                  type="button"
                  onClick={close}
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Kapat
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
