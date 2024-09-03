import React from 'react'
import { useRef, useState } from "react";
import Title from './Title'
import Board from './Board'
import './TicTacToe.css'
import circle_icon from '../Assets/circle.png'
import cross_icon from '../Assets/cross.png'

const TicTacToe = () => {

    const [history,setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber,setStepNumber] = useState(0);
    const [winner,setWinner] = useState(null);
    const [lock, setLock] = useState(false);

    const reset = () => {
         setHistory([Array(9).fill(null)]);
         setStepNumber(0);
         setWinner(null);
         setLock(false);
        }

    const undo = () => {
        if (winner || stepNumber === 0) {
            return; // Prevent undo if there's a winner or if at the first step
        }
        setStepNumber(stepNumber - 1);
    }


  return (
    <div className='container'>

        <Title winner = {winner}/>

        <Board
            onWin = {setWinner}
            history = {history}
            setHistory ={setHistory}
            stepNumber = {stepNumber}
            setStepNumber = {setStepNumber}
            lock = {lock}
            setLock = {setLock}
        />

        <button className ="reset" onClick={reset}>Reset</button>
        <button className ="reset" onClick={undo} disabled={stepNumber === 0}>Undo</button>

    </div>
  );
};

export default TicTacToe;
