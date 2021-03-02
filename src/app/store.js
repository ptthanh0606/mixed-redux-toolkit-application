import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import userReducer from "../features/crudusers/slices/userSlice";
import ptCounterReducer from "../features/mycounter/PTCounterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    ptcounter: ptCounterReducer,
    users: userReducer,
  },
});
