import React from 'react';

interface SquareProps {
  index: number;
  handleClick: (idx: number) => void;
  board: string[];
}

const Square: React.FC<SquareProps> = ({ index, handleClick, board }) => {
  return (
    <div className='cell' onClick={() => handleClick(index)}>
      {board[index]}
    </div>
  );
};

export default Square;
