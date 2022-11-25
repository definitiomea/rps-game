import { rpsActions } from "../reducers/rpsReducer";

function setRock() {
    return (dispatch, getState) => {
        console.log("choose rock");
        dispatch(rpsActions.setRock());
    }
}

function setScissors() {
    return (dispatch, getState) => {
        console.log("choose Scissors");
        dispatch(rpsActions.setScissors());
    }
}

function setPaper() {
    return (dispatch, getState) => {
        console.log("choose paper");
        dispatch(rpsActions.setPaper());
    }
}

function setRandom(computerChoice) {
    return (dispatch, getState) => {
        console.log(computerChoice);
        dispatch(rpsActions.setRandom(computerChoice));
    }
}

export const rpsAction = { setRock, setScissors, setPaper, setRandom };