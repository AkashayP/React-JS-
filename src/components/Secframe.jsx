import React from 'react';
import code from "../assets/code.svg";
import Button from './Buttons';
import "./Secframe.css";

function Secframe(props) {
  return (
    <>
    <div className='cont'>
        <div className='left'>
            <h1 className='head'>{props.heading}</h1>
            <p className='content'>{props.content}</p>
            <div className='button-grp'>
            <Button className='primary' label ='Try it Yourself'/>
            <Button className='secondary' label ='Learn More'/>
        </div>
        </div> 
        <div className='right'>
            <img src={code} alt="code" />
        </div>
    </div>
    </>
  )
}

export default Secframe