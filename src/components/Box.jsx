import React from 'react';
import { useSelector } from 'react-redux';

const Box = (props) => {
  /* 각각의 컴포넌트가 해당 결과를 가질 수 있게 props로 보내보려 한다.
  따라서 useSelector는 필요 없게 됐다. */

  return (
    <div className='box'>
      <h1>{props.title}</h1>
      {props.userSelect ? (
        <img className='item-img' src={props.userSelect.img}></img>) :
        ""
      }
      {props.computerSelect ? (
        <img className='item-img' src={props.computerSelect.img}></img>) :
        ""
      }
      {props.result ? <h2>{props.result}</h2> : ""}
      {props.comResult ? <h2>{props.comResult}</h2> : ""}
    </div>
  )
}

export default Box;
