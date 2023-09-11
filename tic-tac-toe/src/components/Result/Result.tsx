import React from 'react';
import './result.scss';

interface ResultProps {
    winner: string | boolean | null;
    resetGame: () => void;
}

const Result: React.FC<ResultProps> = ({ winner, resetGame }) => {
    if (winner === null) return null;

    const winnerText = winner === false ? 'Draw' : 'Winner: ';

    return (
        <section className='winner'>
            <div className='text'>
                <h2>{winnerText}</h2>

                <header className='win'>
                    {winner && <div className='cell'>{winner}</div>}
                </header>

                <footer className='new-game'>
                    <button onClick={resetGame}>New Game</button>
                </footer>
            </div>
        </section>
    );
};

export default Result;
