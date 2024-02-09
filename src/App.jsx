import { useState } from "react";

import "./App.css";

function App() {
  const [isXNext, setIsXNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  function Square({ value, onSquareClick }) {
    return (
      <button className="square" onClick={onSquareClick}>
        {value}
      </button>
    );
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
    s;
  }

  function handleOnClick(i) {
    let copySquares = squares.slice();
    if (copySquares[i] || calculateWinner(copySquares)) {
      return;
    }
    if (isXNext) {
      copySquares[i] = "X";
    } else {
      copySquares[i] = "O";
    }
    setIsXNext(!isXNext);
    setSquares(copySquares);
  }

  let win = calculateWinner(squares);
  let status;
  if (win) {
    status = "The winner is " + win;
  } else {
    status = `The next player is ${isXNext ? "X" : "O"}`;
  }

  return (
    <>
      <div>{status}</div>
      <div className="line">
        <Square value={squares[0]} onSquareClick={() => handleOnClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleOnClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleOnClick(2)} />
      </div>
      <div className="line">
        <Square value={squares[3]} onSquareClick={() => handleOnClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleOnClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleOnClick(5)} />
      </div>
      <div className="line">
        <Square value={squares[6]} onSquareClick={() => handleOnClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleOnClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleOnClick(8)} />
      </div>
    </>
  );
}

export default App;
