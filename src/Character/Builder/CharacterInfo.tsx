import { observer } from "mobx-react-lite";
import * as React from "react";
import { useRootStore } from "../../store/rootStore";

export const CharacterInfo = observer(() => {
  const { character } = useRootStore();

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>str: {character.strength.base + character.strength.bonus}</div>
      <div>dex: {character.dextrity.base + character.dextrity.bonus}</div>
      <div>vit: {character.vitality.base + character.vitality.bonus}</div>
      <div>
        int: {character.intelligence.base + character.intelligence.bonus}
      </div>
      <div>cha: {character.charisma.base + character.charisma.bonus}</div>
      <div>life force: {character.lifeForce}</div>
      <div>
        initiative: {character.initiative.base + character.initiative.bonus}
      </div>
      <div>fate: {character.fate}</div>
      <div>
        feats:{" "}
        {character.feats.map((feat) => (
          <div key={feat.id} title={feat.text}>
            {feat.name}
          </div>
        ))}
      </div>
    </div>
  );
});
