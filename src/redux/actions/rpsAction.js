import { rpsActions } from "../reducers/rpsReducer";

function setRock() {
    return (dispatch, getState) => {
        dispatch(rpsActions.setRock());
    }
}

function setScissors() {
    return (dispatch, getState) => {
        dispatch(rpsActions.setScissors());
    }
}

function setPaper() {
    return (dispatch, getState) => {
        dispatch(rpsActions.setPaper());
    }
}

function setRandom(computerChoice) {
    return (dispatch, getState) => {
        dispatch(rpsActions.setRandom(computerChoice));
    }
}

function judgement({userSelect, computerSelect}) {
    return (dispatch, getState) => {
        dispatch(rpsActions.judgement({userSelect, computerSelect}));
    }
}

export const rpsAction = { setRock, setScissors, setPaper, setRandom, judgement };