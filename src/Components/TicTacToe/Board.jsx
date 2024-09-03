import React, { useState } from 'react';
import Box from './Box';
import cross_icon from '../Assets/cross.png';
import circle_icon from '../Assets/circle.png';

const Board = ({ onWin, history, setHistory, stepNumber, setStepNumber,lock,setLock }) => {
    const current = history[stepNumber];


    const toggle = (num) => {
        if (lock || current[num]) return;

        const squares = [...current];
        squares[num] = stepNumber % 2 === 0 ? cross_icon : circle_icon;
        const newHistory = history.slice(0, stepNumber + 1).concat([squares]);
        setHistory(newHistory);
        setStepNumber(newHistory.length - 1);
        checkWin(squares);
    };

    const checkWin = (squares) => {
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                setLock(true);
                onWin(squares[a]);
                return;
            }
        }
    };

    return (
        <div className="board">
            {current.map((value, index) => (
                <Box key={index} value={value} onClick={() => toggle(index)} />
            ))}
        </div>
    );
};

export default Board;
