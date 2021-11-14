import { observer } from "mobx-react-lite";
import * as React from "react";
import { useRootStore } from "../../store/rootStore";

export const CharacterInfo = observer(() => {
  const { character } = useRootStore();

  const subNatureString = character.subNatures
    .map((subNature) => subNature.name)
    .join(", ");

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>Имя игрока: {character.userName}</div>
      <div>Имя персонажа: {character.characterName}</div>
      <div>Основная черта характера: {character.baseNature?.name}</div>
      <div>Дополнительные черты характера: {subNatureString}</div>
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
        Особенности персонажа:
        {character.feats.map((feat) => (
          <div key={feat.id} title={feat.description}>
            {feat.name}
          </div>
        ))}
      </div>
    </div>
  );
});
