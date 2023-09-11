import React, { useState } from 'react';
import { TURNS } from '../utils/constans';
import { checkDraw, getWinner } from '../utils/functions';
import Result from './Result';
import confetti from 'canvas-confetti';
import Board from './Board';

const TicTacToe: React.FC = () => {
  // Define the game state
  const [board, setBoard] = useState<string[]>(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState<string | boolean | null>(null);

  // Function to reset the game
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
  }

  // Handle click event on a square
  const handleClick = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    const newWinner = getWinner(newBoard);
    const draw = checkDraw(newBoard);

    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (draw) {
      setWinner(false);
    }
  };

  return (
    <main className='tic-tac-toe'>
      <button className='reset-game' onClick={resetGame}>Reset Game</button>

      <Board handleClick={handleClick} board={board} />

      <section className='turn'>{`Next player: ${turn}`}</section>

      <Result winner={winner} resetGame={resetGame} />
    </main>
  );
};

export default TicTacToe;
