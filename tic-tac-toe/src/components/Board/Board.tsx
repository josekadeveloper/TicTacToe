import React from 'react';
import Square from '../Square/Square';
import './board.scss'

interface BoardProps {
    handleClick: (idx: number) => void;
    board: string[];
}

const Board: React.FC<BoardProps> = ({ handleClick, board }) => {
    return (
        <section className='board'>
            {board.map((_, index) => (
                <Square key={index} index={index} handleClick={handleClick} board={board} />
            ))}
        </section>
    );
};

export default Board;
