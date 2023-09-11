import React from 'react';
import './options.scss'

interface OptionsProps {
    startGame: () => void;
    stopGame: () => void;
    resetGame: () => void;
}

const Options: React.FC<OptionsProps> = ({ startGame, stopGame, resetGame }) => {
    return (
        <section className='game-options'>
            <button className='start-game' onClick={startGame}>Start Game</button>
            <button className='stop-game' onClick={stopGame}>Stop Game</button>
            <button className='reset-game' onClick={resetGame}>Reset Game</button>
        </section>
    );
};

export default Options;
