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
    },
    result: "",
    comResult: ""
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
        },
        setRandom(state, action) {
            state.computerSelect = action.payload;
        },
        judgement(state, action) {
            /* userSelect 값이 있는지 한번 확인하려면 이렇게
            console.log(action.payload.userSelect?.name); */

            /* console.log(state.rock); 
            
            state.rock과 비교가 성립되지 않는 것을 알게 됨.
            기대와는 달리 state.rock이 프록시 취급 받고 있기 때문에
            action.payload를 통해 받아왔던 배열과 형태가 같을 수 없게 되었다.
            
            그런데, state 변경과 렌더링에 차이가 생겨버려서
            한 차례 전에 선택한 결과가 화면에 출력되고 있다. */
            
            if(action.payload.userSelect?.name == "Rock") {
                if(action.payload.userSelect?.name == action.payload.computerSelect?.name) {
                    state.result = "DRAW";
                    console.log("DRAW");
                }
                else if (action.payload.computerSelect?.name == "Paper") {
                    state.result = "LOSE";
                    console.log("LOSE");
                }
                else if (action.payload.computerSelect?.name == "Scissors") {
                    state.result = "WIN";
                    console.log("WIN");
                }
            }
            else if(action.payload.userSelect?.name == "Paper") {
                if(action.payload.userSelect?.name == action.payload.computerSelect?.name) {
                    state.result = "DRAW";
                    console.log("DRAW");
                }
                else if (action.payload.computerSelect?.name == "Scissors") {
                    state.result = "LOSE";
                    console.log("LOSE");
                }
                else if (action.payload.computerSelect?.name == "Rock") {
                    state.result = "WIN";
                    console.log("WIN");
                }
            }
            else if(action.payload.userSelect?.name == "Scissors") {
                if(action.payload.userSelect?.name == action.payload.computerSelect?.name) {
                    state.result = "DRAW";
                    console.log("DRAW");
                }
                else if (action.payload.computerSelect?.name == "Rock") {
                    state.result = "LOSE";
                    console.log("LOSE");
                }
                else if (action.payload.computerSelect?.name == "Paper") {
                    state.result = "WIN";
                    console.log("WIN");
                }
            }
        }
    }
});

export const rpsActions = rpsSlice.actions;
export default rpsSlice.reducer;