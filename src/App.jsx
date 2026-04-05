import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import GameOver from "./components/GameOver";
// import LogTurns from "./components/LogTurns";
import {
  deriveActivePlayer,
  deriveGameBoard,
  deriveWinner,
  PLAYERS,
} from "./components/utilitiesFunc";

const App = () => {
  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState(PLAYERS);

  const currentActivePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);
  let hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((preTurn) => {
      const curActivePlayer = deriveActivePlayer(preTurn);

      const updatedGameTurns = [
        { square: { row: rowIndex, col: colIndex }, player: curActivePlayer },
        ...preTurn,
      ];

      return updatedGameTurns;
    });
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers((prev) => {
      return {
        ...prev,
        [symbol]: newName,
      };
    });
  }

  function handleGameOver() {
    setGameTurns([]);
  }

  return (
    <div className="h-full">
      <header>
        <h1 className="text-center text-4xl font-bold text-white p-8">
          Tic Tac Toe
        </h1>
      </header>
      <main className="flex items-center justify-center gap-8">
        <div className="w-lg p-6 bg-gray-800 ">
          <ol className="w-full flex-center gap-3">
            <Player
              defaultName={PLAYERS.X}
              symbol="X"
              isActive={currentActivePlayer === "X"}
              onChangeName={handlePlayerNameChange}
            />
            <Player
              defaultName={PLAYERS.O}
              symbol="O"
              isActive={currentActivePlayer === "O"}
              onChangeName={handlePlayerNameChange}
            />
          </ol>
          {(winner || hasDraw) && (
            <GameOver winner={winner} onRestart={handleGameOver} />
          )}
          <div className="game-board w-full my-8 flex items-center justify-center">
            <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
          </div>
        </div>
        {/* <LogTurns board={gameTurns} /> */}
      </main>
    </div>
  );
};

export default App;
