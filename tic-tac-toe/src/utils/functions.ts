import { WINNER_COMBOS } from "./constans";

// Helper function to get the winner
export const getWinner = (squares: string[]): string | null => {  
    for (const [a, b, c] of WINNER_COMBOS) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
  
    return null;
};

// Helper function to check for a draw
export const checkDraw = (squares: string[]): boolean => {
  return squares.filter(cell => cell === null).length === 0;
}
