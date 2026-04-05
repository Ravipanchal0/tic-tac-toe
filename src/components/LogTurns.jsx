const LogTurns = ({ board }) => {
  return (
    <ol className="w-40 text-white list-none text-center">
      {board.map((turn) => {
        return (
          <li
            key={`${turn.square.row}${turn.square.col}`}
            className="rounded m-3 animate-slide-in"
          >
            {turn.player} selected {turn.square.row}, {turn.square.col}
          </li>
        );
      })}
    </ol>
  );
};

export default LogTurns;
