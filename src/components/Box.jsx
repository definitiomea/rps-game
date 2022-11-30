import React from 'react';
import { useSelector } from 'react-redux';

const Box = (props) => {
  const result = useSelector((state) => state.rps.result);

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
      {result ? <h2>{result}</h2> : ""}
    </div>
  )
}

export default Box;
