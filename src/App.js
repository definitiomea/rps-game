import { useDispatch, useSelector } from 'react-redux';
import { rpsAction } from './redux/actions/rpsAction';

import './App.css';

import Box from './components/Box';
import { useEffect } from 'react';

/* 1. 박스 2개, 타이틀, 사진 정보, 결과 값
2. 가위 바위 보 버튼이 있다
3. 버튼을 누르면 클릭한 값이 박스에 보인다.
4. 컴퓨터는 랜덤하게 아이템을 선택한다.
5. 사용자와 컴퓨터의 결과를 따져서 출력한다.
6. 이기면 초록, 지면 빨강, 비기면 초록으로 테두리가 나온다. */

function App() {
  const dispatch = useDispatch();

  /* 페이지 전체가 다룰 state들 정의, 컴포넌트에 props 형태로 가게 된다. */
  const userSelect = useSelector((state) => state.rps.userSelect);
  const computerSelect = useSelector((state) => state.rps.computerSelect);
  
  /* 이쪽도 마찬가지 */
  const result = useSelector((state) => state.rps.result);
  const comResult = useSelector((state) => state.rps.comResult);

  /* useSelector에서 구조 분해 OK
  state의 rps: rpsReducer에 접근해서 요소를 가져왔다. */
  const { rock, scissors, paper } = useSelector((state) => state.rps);

  const choice = [rock, scissors, paper];

  /* 액션 함수: 리듀서로 넘어가기 전에 접근해줄 수 있는 함수
  잘 작성했다면 액션 함수를 통해 리듀서와 해당 메서드로 넘어갈 수 있다.
  (오탈자 등을 방지하는 차원, 선택 사항이다.)
  
  필요한 값은 payload 키에 들어갈 수 있게 객체로 보내주고 있다. */

  /* useEffect의 조건에 의해 공통 state의 값들을 참조해서 액션 함수를 호출할 것이다. */
  useEffect(() => {
    dispatch(rpsAction.judgementAction({userSelect, computerSelect}));
  }, [userSelect, computerSelect]);

  /* 유저가 가위를 설정하는 버튼을 누르면 호출될 메서드
  액션 함수들을 지정하고 setScissorsAction 메서드에 접근한다.

  외부에 만든 randomChoice 메서드를 통해 가위바위보 중 랜덤한 아이템을 반환받고,
  액션 함수들 중에서 setRandomAction 메서드에 접근한다.

  이때 payload 키에 랜덤한 아이템이 들어갈 수 있도록 대입해준다. */
  const setScissorsButton = () => {
    dispatch(rpsAction.setScissorsAction());

    let computerChoice = randomChoice();
    dispatch(rpsAction.setRandomAction(computerChoice));
  }

  /* 바위, 보 버튼도 구조는 같다. */
  const setRockButton = () => {
    dispatch(rpsAction.setRockAction());

    let computerChoice = randomChoice();
    dispatch(rpsAction.setRandomAction(computerChoice));
    }

  const setPaperButton = () => {
    dispatch(rpsAction.setPaperAction());

    let computerChoice = randomChoice();
    dispatch(rpsAction.setRandomAction(computerChoice));
  }

  /* 컴퓨터가 랜덤한 아이템을 가질 수 있게 해주는 메서드

  const choice = [rock, scissors, paper];
  를 통해 state의 바위, 가위, 보를 모두 받아와 한 배열로 만들었다.

  Object.keys() 메서드에는 인수로 배열을 넣을 수 있고,
  '해당 배열의 인덱스를 가져와 새로운 배열로' 만들어줄 수 있다.

  예)
  const anyLang = ["a", "b", "c", "d", "e"];
  < undefined
  let wantKey = Object.keys(anyLang);
  < undefined
  console.log(wantKey);
    > VM234:1 (5) ['0', '1', '2', '3', '4']
  < undefined
  
  이 경우에는 생성된 인덱스 배열의 길이만큼 랜덤한 수를 만들었다.
  
  그렇게 해서 마지막 변수는 인덱스 배열 중에서 랜덤한 인덱스에 접근하는 게 됐고,

  원래 배열에 접근해서 인덱스 배열 중 랜덤한 인덱스에 접근한 값을 대입했다.
  
  (물론, Object.keys가 없이 본래 배열의 길이만큼만 하는 방법도 가능할 것이다.) */

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  }

  /* 만약 액션 함수를 쓰지 않고 바로 reducer에 접근한다고 한다면..

  import { rpsActions } from './redux/reducers/rpsReducer'

  const setScissorsButton = () => {
    dispatch(rpsActions.setRock());
    let computerChoice = randomChoice();
    dispatch(rpsActions.setRandom(computerChoice));
  }
  
  가 되지 않을까 하는데, 나중에 시험해보기 */

  return (
    <>
      <div className="Main">
        <Box title="You" userSelect={userSelect} result={result}></Box>
        <Box title="Computer" computerSelect={computerSelect} comResult={comResult}></Box>
      </div>
      <div className="Main">
        <button onClick={() => setScissorsButton()}>가위</button>
        <button onClick={() => setRockButton()}>바위</button>
        <button onClick={() => setPaperButton()}>보</button>
      </div>
    </>
  );
}

export default App;
