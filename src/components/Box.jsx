import React from 'react';

const Box = (props) => {
  return (
    <div className='box'>
      <h1>{props.title}</h1>
      {props.userSelect ? (
        <img className='item-img' src={props.userSelect.img}></img>) :
        <img className='item-img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/800px-Question_mark_%28black%29.svg.png"></img>
      }
      {props.computerSelect ? (
        <img className='item-img' src={props.computerSelect.img}></img>) :
        <img className='item-img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/800px-Question_mark_%28black%29.svg.png"></img>
      }
      <h2>WIN</h2>
    </div>
  )
}

export default Box;
