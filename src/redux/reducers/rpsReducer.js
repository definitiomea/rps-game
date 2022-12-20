/* 리듀서를 만들 때는 createSlice를 호출해준다. */
import { createSlice } from "@reduxjs/toolkit";

/* 초기 값들이 여기에 담긴다. */
let initialState = {
    /* 객체를 담아올 공간을 null로 지정했다.
    특정 리듀서에서 state.userSelect, 혹은 state.computerSelect로 지정되고,
    state.(바위 or 가위 or 보)가 대입되거나, 혹은 가위바위보 중 랜덤한 것을 대입받는다. */
    userSelect: null,
    computerSelect: null,

    /* 바위, 가위, 보 각 객체를 뜻한다. */
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
    /* 결과를 뜻하는 자리들, state.result와 같이 다뤄질 것이다.

    컴퓨터가 갖는 결과를 리듀서가 아닌 다른 영역에서 다룰 수 있을까 생각해봤다.
    (result가 win인지 draw인지 lose인지에 따라 반응하면 되니까)
    
    일단, judgement를 통해 comResult 값을 다루는 걸 먼저 해보도록 한다. */
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
            /* userSelect 값이 있는지 한번 확인하려면 이렇게 했었다.
            console.log(action.payload.userSelect?.name); */

            /* !! action.payload.userSelect와 state.rock는
            비교가 성립되지 않는 것을 알게 됨.

            console.log(state.rock); 

            기대와는 달리 state.rock이 프록시 취급 받고 있기 때문에
            action.payload를 통해 받아왔던 배열과 형태가 같을 수 없게 되었다. */
            
            /* state 변경과 렌더링에 차이가 생겨버려서
            한 차례 전에 선택한 결과가 화면에 출력되었던 것은 생명주기에 의한 것으로,
            useEffect Hook으로 해결할 수 있었다. */
            
            if(action.payload.userSelect?.name == "Rock") {
                if(action.payload.userSelect?.name == action.payload.computerSelect?.name) {
                    /* 유저 결과 */
                    state.result = "DRAW";
                    /* 컴퓨터 결과 */
                    state.comResult = "DRAW";
                }
                else if (action.payload.computerSelect?.name == "Paper") {
                    state.result = "LOSE";
                    state.comResult = "WIN";
                }
                else if (action.payload.computerSelect?.name == "Scissors") {
                    state.result = "WIN";
                    state.comResult = "LOSE";
                }
            }
            else if(action.payload.userSelect?.name == "Paper") {
                if(action.payload.userSelect?.name == action.payload.computerSelect?.name) {
                    state.result = "DRAW";
                    state.comResult = "DRAW";
                }
                else if (action.payload.computerSelect?.name == "Scissors") {
                    state.result = "LOSE";
                    state.comResult = "WIN";
                }
                else if (action.payload.computerSelect?.name == "Rock") {
                    state.result = "WIN";
                    state.comResult = "LOSE";
                }
            }
            else if(action.payload.userSelect?.name == "Scissors") {
                if(action.payload.userSelect?.name == action.payload.computerSelect?.name) {
                    state.result = "DRAW";
                    state.comResult = "DRAW";
                }
                else if (action.payload.computerSelect?.name == "Rock") {
                    state.result = "LOSE";
                    state.comResult = "WIN";
                }
                else if (action.payload.computerSelect?.name == "Paper") {
                    state.result = "WIN";
                    state.comResult = "LOSE";
                }
            }
        }
    }
});

export const rpsActions = rpsSlice.actions;
export default rpsSlice.reducer;