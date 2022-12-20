/* 리듀서의 본 함수들을 호출해준다.
(사실, 리듀서에서 rps'Actions'가 아닌 다른 이름으로 내보내는 게 나을 것 같다.) */
import { rpsActions } from "../reducers/rpsReducer";

/* 리덕스 툴킷에서 액션 함수를 적는다면 각각의 액션 함수가
또 다른 함수를 리턴하도록 만들어준다.

리턴할 때의 파라미터 중 첫번째는 페이지나 컴포넌트에서 호출한 dispatch
두번째는 getState이다. (getState는 사용한 적 없다, 자세히 알아볼 것) */
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

/* payload에 해당하는 게 있다면 액션 함수에도 반영해줄 것 */
function setRandomAction(computerChoice) {
    return (dispatch, getState) => {
        dispatch(rpsActions.setRandom(computerChoice));
    }
}

/* 여러 값을 반영해야 한다면 반드시 객체 형태로 감싸줄 것
(문자열이 아니라면 객체로 감싸야 한다.) */
function judgementAction({userSelect, computerSelect}) {
    return (dispatch, getState) => {
        dispatch(rpsActions.judgement({userSelect, computerSelect}));
    }
}

/* 액션 함수를 내보내면 앱 전역에서 받아와줄 수 있다. */
export const rpsAction = { setRockAction, setScissorsAction, setPaperAction, setRandomAction, judgementAction };