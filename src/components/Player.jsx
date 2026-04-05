import { useState } from "react";

const Player = ({ defaultName, symbol, isActive, onChangeName }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(defaultName);

  const handleOnClick = () => {
    setIsEditing((prev) => !prev);
    if (isEditing) {
      onChangeName(symbol, name);
    }
  };

  const handleOnChange = (e) => {
    setName(e.target.value);
  };

  let playerName = (
    <span className="w-full py-1.5 px-2 uppercase tracking-wide font-semibold">
      {name}
    </span>
  );

  if (isEditing) {
    playerName = (
      <input
        type="text"
        className="w-full bg-gray-700 py-1.5 px-2 outline-none"
        value={name}
        required
        autoFocus
        onChange={handleOnChange}
        onFocus={(e) => e.target.select()}
      />
    );
  }

  return (
    <li
      className={`text-amber-50 w-full flex justify-between ${isActive && "active"}`}
    >
      <span className="w-full flex items-center justify-between">
        {playerName}
        <span className="px-2 py-1.5 font-serif font-bold">{symbol}</span>
      </span>
      <button
        onClick={handleOnClick}
        className="w-16 px-2 py-1.5 text-xs font-sans text-amber-200 cursor-pointer text-center"
      >
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
};

export default Player;
