import React, { useState } from 'react';
import { calculateWinner } from '../utils/functions';
import Square from './Square';

const TicTacToe: React.FC = () => {
  // Define the game state
  const [board, setBoard] = useState<string[]>(Array(9).fill(''));
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const winner = calculateWinner(board);

  // Handle click event on a square
  const handleClick = (index: number) => {
    if (winner || board[index]) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = xIsNext ? 'X' : 'O';

    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <div className="tic-tac-toe">
      <div className="status">{status}</div>
      {board.map((value, index) => (
        <Square key={index} index={index} handleClick={handleClick} board={board} />
      ))}
    </div>
  );
};

export default TicTacToe;
