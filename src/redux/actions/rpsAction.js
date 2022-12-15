import { rpsActions } from "../reducers/rpsReducer";

function setRockAction() {
    return (dispatch, getState) => {
        dispatch(rpsActions.setRock());
    }
}

function setScissorsAction() {
    return (dispatch, getState) => {
        dispatch(rpsActions.setScissors());
    }
}

function setPaperAction() {
    return (dispatch, getState) => {
        dispatch(rpsActions.setPaper());
    }
}

function setRandomAction(computerChoice) {
    return (dispatch, getState) => {
        dispatch(rpsActions.setRandom(computerChoice));
    }
}

function judgementAction({userSelect, computerSelect}) {
    return (dispatch, getState) => {
        dispatch(rpsActions.judgement({userSelect, computerSelect}));
    }
}

export const rpsAction = { setRockAction, setScissorsAction, setPaperAction, setRandomAction, judgementAction };