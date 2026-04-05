const GameBoard = ({ onSelectSquare, board }) => {
  return (
    <ol className="flex flex-col gap-6">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol className="flex gap-6">
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex} className="w-24 h-24 rounded">
                <button
                  className="w-full h-full bg-amber-200 rounded hover:bg-amber-200/80 text-gray-900 text-5xl font-bold font-serif disabled:cursor-not-allowed animate-popup"
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol && (
                    <span className="animate-popup inline-block">
                      {playerSymbol}
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
