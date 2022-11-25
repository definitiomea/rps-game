import { useDispatch, useSelector } from 'react-redux';
import { rpsAction } from './redux/actions/rpsAction';

import './App.css';

import Box from './components/Box';

/* 1. 박스 2개, 타이틀, 사진 정보, 결과 값
2. 가위 바위 보 버튼이 있다
3. 버튼을 누르면 클릭한 값이 박스에 보인다.
4. 컴퓨터는 랜덤하게 아이템을 선택한다.
5. 사용자와 컴퓨터의 결과를 따져서 출력한다.
6. 이기면 초록, 지면 빨강, 비기면 초록으로 테두리가 나온다. */

function App() {
  const dispatch = useDispatch();
  const userSelect = useSelector((state) => state.rps.userSelect);
  const computerSelect = useSelector((state) => state.rps.computerSelect);

  /* useSelector에서 구조 분해 OK
  state의 rps: rpsReducer에 접근해서 요소를 가져왔다. */
  const { rock, scissors, paper } = useSelector((state) => state.rps);
  const choice = [rock, scissors, paper];

  const setScissors = () => {
    dispatch(rpsAction.setScissors());

    let computerChoice = randomChoice();
    /* console.log(computerChoice); */
    dispatch(rpsAction.setRandom(computerChoice));
  }

  const setRock = () => {
    dispatch(rpsAction.setRock());

    let computerChoice = randomChoice();
    /* console.log(computerChoice); */
    dispatch(rpsAction.setRandom(computerChoice));
  }

  const setPaper = () => {
    dispatch(rpsAction.setPaper());

    let computerChoice = randomChoice();
    /* console.log(computerChoice); */
    dispatch(rpsAction.setRandom(computerChoice));
  }

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  }

  return (
    <>
      <div className="Main">
        <Box title="You" userSelect={userSelect}></Box>
        <Box title="Computer" computerSelect={computerSelect}></Box>
      </div>
      <div className="Main">
        <button onClick={() => setScissors()}>가위</button>
        <button onClick={() => setRock()}>바위</button>
        <button onClick={() => setPaper()}>보</button>
      </div>
    </>
  );
}

export default App;
