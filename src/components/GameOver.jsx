const GameOver = ({ winner, onRestart }) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 flex-center bg-black/50">
      <div className="modal w-lg h-72 bg-black/90 shadow-xl flex-center flex-col rounded-lg space-y-6 animate-popup">
        <h2 className="text-5xl font-bold text-amber-400 tracking-wider">
          Game Over!
        </h2>

        <p className="text-white text-xl tracking-wide">
          {winner ? `${winner} won!` : "Match Draw!!"}
        </p>
        <p>
          <button
            onClick={onRestart}
            className="px-5 py-1.5 border-2 border-amber-300 text-amber-300 font-semibold cursor-pointer rounded-md transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-amber-300 hover:text-black hover:shadow-lg shadow-amber-300/50"
          >
            Rematch
          </button>
        </p>
      </div>
    </div>
  );
};

export default GameOver;
