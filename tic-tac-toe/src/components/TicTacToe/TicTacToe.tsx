import React, { useState, useEffect } from 'react';
import { TURNS } from '../../utils/constans';
import { checkDraw, getWinner } from '../../utils/functions';
import Result from '../Result/Result';
import confetti from 'canvas-confetti';
import Board from '../Board/Board';
import Options from '../Options/Options';
import Timer from '../Timer/Timer';
import Turn from '../Turn/Turn';
import './tictactoe.scss';

const TicTacToe: React.FC = () => {
  // Define the game states
  const [board, setBoard] = useState<string[]>(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState<string | boolean | null>(null);
  const [timer, setTimer] = useState(30);
  const [isPulsating, setIsPulsating] = useState(false);
  const [shouldContinueTimer, setShouldContinueTimer] = useState(false);
  const [disabledBoard, setDisabledBoard] = useState(true);

  useEffect(() => {
    // Start the countdown timer
    const countdown = setInterval(() => {
      if (!shouldContinueTimer) {
        // If shouldContinueTimer is false, clear the interval and stop the timer
        clearInterval(countdown);
        return;
      }

      setTimer((prevTimer) => prevTimer - 1);

      // Check if the timer has finished
      if (timer === 0) {
        const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
        setTurn(newTurn);
        setTimer(30); // Reset the timer to 30 seconds
      }

      // Check if the timer is in the last 10 seconds
      if (timer <= 10) {
        setIsPulsating(true);
      } else {
        setIsPulsating(false);
      }
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(countdown);
  }, [timer, shouldContinueTimer, turn]);

  // Function to start the game
  const startGame = () => {
    setDisabledBoard(false);
    setShouldContinueTimer(true);

    if (timer <= 10) {
      setIsPulsating(true);
    }
  }

  // Function to stop the game
  const stopGame = () => {
    setDisabledBoard(true);
    setShouldContinueTimer(false);

    if (timer <= 10) {
      setIsPulsating(false);
    }
  }

  // Function to reset the game
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
    setShouldContinueTimer(true);
    setDisabledBoard(false);

    if (timer <= 10) {
      setIsPulsating(true);
    }
  }

  // Handle click event on a square
  const handleClick = (index: number) => {
    if (board[index] || winner || disabledBoard) return;

    setTimer(30);

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
      setShouldContinueTimer(false);
    } else if (draw) {
      setWinner(false);
      setShouldContinueTimer(false);
    }
  };

  return (
    <main className='tic-tac-toe'>
      <Options startGame={startGame} stopGame={stopGame} resetGame={resetGame} />

      <Board handleClick={handleClick} board={board} />

      <Timer isPulsating={isPulsating} timer={timer} />

      <Turn turn={turn} />

      <Result winner={winner} resetGame={resetGame} />
    </main>
  );
};

export default TicTacToe;
