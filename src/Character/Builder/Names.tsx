import { TextField } from "@mui/material";
import { observer } from "mobx-react-lite";
import * as React from "react";
import { SimpleCard } from "../../components/cards/SimpleCard";
import { useRootStore } from "../../store/rootStore";

export const Names = observer(() => {
  const { character } = useRootStore();
  function onUserNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    character.userName = e.target.value;
  }
  function onCharacterNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    character.characterName = e.target.value;
  }

  return (
    <SimpleCard>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <TextField
          id="userName"
          label="Имя игрока:"
          value={character.userName}
          onChange={onUserNameChange}
          variant="standard"
        />
        <TextField
          id="characterName"
          label="Имя персонажа:"
          value={character.characterName}
          onChange={onCharacterNameChange}
          variant="standard"
        />
      </div>
    </SimpleCard>
  );
});
