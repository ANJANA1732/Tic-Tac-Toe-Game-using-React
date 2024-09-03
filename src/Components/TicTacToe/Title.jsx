import React from 'react';
import cross_icon from '../Assets/cross.png';
import circle_icon from '../Assets/circle.png';

const Title = ({ winner }) => {
    return (
        <h1 className="title">
            {winner
                ? (
                    <>
                        Congratulations: <img src={winner === cross_icon ? cross_icon : circle_icon} alt="winner icon"  className="winner-icon"/>
                        {` wins!`}
                    </>
                )
                : 'Tic Tac Toe Game'}
        </h1>
    );
};

export default Title;
