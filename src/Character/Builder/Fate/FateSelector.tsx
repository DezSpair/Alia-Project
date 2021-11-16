import { observer } from "mobx-react-lite";
import * as React from "react";
import { fates } from "../../../store/Fate";
import { Fate } from "../../../store/types";
import { useRootStore } from "../../../store/rootStore";
import { FateItem } from "./FateItem";

const fateList: Fate[] = Object.values(fates);

export const FateSelector = observer(() => {
  const { character } = useRootStore();

  const onFateChange = (fate: Fate, selected: boolean) => {
    if (selected) {
      character.setFate(fate.name);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {fateList.map((fate) => (
        <FateItem
          key={fate.id}
          fate={fate}
          selected={character.fate === fate.name}
          onFateChange={onFateChange}
        />
      ))}
    </div>
  );
});
