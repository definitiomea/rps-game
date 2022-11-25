import { configureStore } from "@reduxjs/toolkit";

import rpsReducer from "./reducers/rpsReducer";

const store = configureStore({
    reducer: {
        rps: rpsReducer
    }
});

export default store;