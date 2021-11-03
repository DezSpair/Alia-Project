import { observer } from "mobx-react-lite";
import * as React from "react";
import { useRootStore } from "../../store/rootStore";

export const Characteristics = observer(() => {
  const { character } = useRootStore();

  const onParamChange = (e: any) => {
    character.setBaseCharacteristics({
      [e.target.id]: +e.target.value
    });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label>
        str
        <input
          value={character.strength.base}
          onChange={onParamChange}
          id="strength"
          type="number"
        />
      </label>
      <label>
        dex
        <input
          value={character.dextrity.base}
          onChange={onParamChange}
          id="dextrity"
          type="number"
        />
      </label>
      <label>
        vit
        <input
          value={character.vitality.base}
          onChange={onParamChange}
          id="vitality"
          type="number"
        />
      </label>
      <label>
        int
        <input
          value={character.intelligence.base}
          onChange={onParamChange}
          id="intelligence"
          type="number"
        />
      </label>
      <label>
        cha
        <input
          value={character.charisma.base}
          onChange={onParamChange}
          id="charisma"
          type="number"
        />
      </label>
    </div>
  );
});
