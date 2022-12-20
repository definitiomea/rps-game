/* configureStore import 하기 */
import { configureStore } from "@reduxjs/toolkit";

/* rpsReducer.reducer를 import 해오게 된다. */
import rpsReducer from "./reducers/rpsReducer";

/* store를 만들 때 reducer 객체를 만들 수 있다.
이때 키는 해당 state, 값은 해당 reducer들이 된다. */
const store = configureStore({
    reducer: {
        rps: rpsReducer
    }
});

export default store;