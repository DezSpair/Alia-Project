import { observer } from "mobx-react-lite";
import * as React from "react";
import { useRootStore } from "../../store/rootStore";

export const Names = observer(() => {
  const { character } = useRootStore();
  function onUserNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    character.userName = e.target.value;
  }
  function onCharacterNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    character.userName = e.target.value;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label>
        Имя игрока:
        <input
          value={character.userName}
          onChange={onUserNameChange}
          id="userName"
        />
      </label>
      <label>
        Имя персонажа:
        <input
          value={character.characterName}
          onChange={onCharacterNameChange}
          id="characterName"
        />
      </label>
    </div>
  );
});