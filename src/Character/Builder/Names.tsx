import { observer } from "mobx-react-lite";
import * as React from "react";
import { useRootStore } from "../../store/rootStore";

export const Names = observer(() => {
    const { character } = useRootStore();
    const onParamChange = (e: any) => {
        switch(e.target.id){        
            case "userName":
                character.userName = e.target.value;
                break;
            case "characterName":
                character.characterName = e.target.value;
        }
      };

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <label>
                Имя игрока:
                <input
                    value={character.userName}
                    onChange={onParamChange}
                    id="userName"
                    type="string"
                    />
            </label>
            <label>
                Имя персонажа:
                <input
                    value={character.characterName}
                    onChange={onParamChange}
                    id="characterName"
                    type="string"
                    />
            </label>
        </div>
    );
});