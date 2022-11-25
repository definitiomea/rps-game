import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    userSelect: null,
    computerSelect: null,
    rock: {
        name: "Rock",
        img: "https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-640x514.jpg"
    },
    scissors: {
        name: "Scissors",
        img: "https://cdn.pixabay.com/photo/2017/02/01/10/46/avatar-2029577__480.png"
    },
    paper: {
        name: "Paper",
        img: "https://img.freepik.com/premium-vector/notebook-icon-flat-style-paper-sheet-vector-illustration-isolated-background-page-sign-business-concept_157943-2503.jpg?w=360"
    }
};

const rpsSlice = createSlice({
    name: "rps",
    initialState,
    reducers: {
        setRock(state, action) {
            state.userSelect = state.rock;
        },
        setScissors(state, action) {
            state.userSelect = state.scissors;
        },
        setPaper(state, action) {
            state.userSelect = state.paper;
            console.log(state.paper);
        },
        setRandom(state, action) {
            state.computerSelect = action.payload;
            console.log(action.payload);
        }
    }
});

export const rpsActions = rpsSlice.actions;
export default rpsSlice.reducer;