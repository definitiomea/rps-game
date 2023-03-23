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

/* 슬라이스?

기능에 따라 여러 스토어를 작성하고, 나중에 합쳐둘 수 있다

마크다운을 편집할 도구

 */