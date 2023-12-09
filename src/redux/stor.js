/* stor oluşturma
1. redux kütüphanesinden "createStore" metodu import edilir
2. store içerisimde tutulan veriler katagorize edilir ve her bir katagori için reducr oluşturulur.
3.oluşturulan reducerlar"combineReducers Methodu ile birleştirilir
4.store a oluşturulan birleşmiş reducerlar tanıtılır
5. oluştrula  store projeye tanıtılır
 */

import { createStore, combineReducers } from "redux";
import todoReducer from "./reducers/todoReducer";
import { userReducer } from "react";

/* birden fazla stor varsa birlestirme  */
const rootReducer = combineReducers({
  todoReducer,
  userReducer,
});

/* storu oluşturma ve  reducerları tanıtma */
const store = createStore(rootReducer);

export default store;
