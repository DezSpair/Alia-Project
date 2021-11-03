import { observer } from "mobx-react-lite";
import * as React from "react";
import { FateNames } from "../../store/Fate";
import { useRootStore } from "../../store/rootStore";

export const FateSelector = observer(() => {
  const { character } = useRootStore();

  const onSelect = (e: any) => {
    character.setFate(e.target.value);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label>
        Fate
        <select value={character.fate} onChange={onSelect} id="fate">
          <option value={FateNames["No Fate"]}>{FateNames["No Fate"]}</option>
          <option value={FateNames.Creator}>{FateNames.Creator}</option>
          <option value={FateNames.Rebel}>{FateNames.Rebel}</option>
          <option value={FateNames.Ruler}>{FateNames.Ruler}</option>
          <option value={FateNames.Seeker}>{FateNames.Seeker}</option>
          <option value={FateNames.Trickster}>{FateNames.Trickster}</option>
          <option value={FateNames.Warior}>{FateNames.Warior}</option>
        </select>
      </label>
    </div>
  );
});
