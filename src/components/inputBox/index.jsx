import React from "react";
import "./index.css";
import {useState} from 'react';

export default function InputBox(props){
    const [emailVal, setEmailVal] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    return(
        <div className="container">
            <div className="box box-column">
                <div className='flexbox box-column'>
                    <h1>SAMPLE TITLE</h1>
                    <h3>Sample Subtitle</h3>
                </div>
                <div className="flexbox box-column">
                    <InputField type='email' placeholder='email' value={emailVal} onChange={setEmailVal}/>
                    <InputField type='password' placeholder='Password' value={password} onChange={setPassword}/>
                    <InputField type='password' placeholder='Confirm Password' value={confirmPassword} onChange={setConfirmPassword}/>
                </div>
                <div className="my-5"></div>
                <div className="my-5"></div>
                <div className="my-5"></div>
                <div className="my-5"></div>
                <div className="flexbox wid-300">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

function InputField({type, placeholder, value, onChange}){
    return(
        <>
            <input type={type} placeholder={placeholder} value={value} onChange={(e)=>onChange(e.target.value)}></input>
        </>
    )
}