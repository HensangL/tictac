import { useState } from 'react';
import Confetti from 'react-confetti'

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [isGameOver, setIsGameOver] = useState(false);

  // Check for winner after each move
  const checkWinner = (board) => {
    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (let combo of winningCombinations) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        setIsGameOver(true);
        return;
      }
    }

    // Check for draw
    if (!board.includes(null)) {
      setWinner("draw");
      setIsGameOver(true);
    }
  };

  // Handle player move
  const handleClick = (index) => {
    if (board[index] || isGameOver) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    checkWinner(newBoard);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  // Reset game
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
    setWinner(null);
    setIsGameOver(false);
  };

  // Render each square
  const renderSquare = (index) => (
    <button
      key={index}
      onClick={() => handleClick(index)}
      className={`w-20 h-20 border border-gray-400 flex items-center justify-center text-4xl font-bold 
        ${board[index] === "X" ? "text-red-500" : "text-blue-500"}
        hover:bg-gray-100 transition-colors`}
      disabled={board[index] || isGameOver}
    >
      {board[index]}
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Tic-Tac-Toe</h1>

      {/* Game Status */}
      <div className="mb-4 text-xl font-semibold">
        {winner ? (
          winner === "draw" ? (
            <p className="text-yellow-600">It's a draw!</p>
          ) : (
            <p className="text-green-600">Player {winner}<Confetti/> wins!</p>
          )
        ) : (
          <p className="text-gray-700">Current Player: <span className={currentPlayer === "X" ? "text-red-500" : "text-blue-500"}>{currentPlayer}</span></p>
        )}
      </div>

      {/* Game Board (3x3 Grid) */}
      <div className="grid grid-cols-3 gap-2 mb-6">
        {board.map((_, index) => renderSquare(index))}
      </div>

      {/* Reset Button */}
      <button
        onClick={resetGame}
        className="px-5 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
      >
        Reset Game
      </button>
    </div>
  );
}

export default App;