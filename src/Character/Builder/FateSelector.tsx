import { observer } from "mobx-react-lite";
import * as React from "react";
import { fates } from "../../store/Fate";
import { useRootStore } from "../../store/rootStore";
import { FateItem } from "./Fate/FateItem";

const fateList = Object.entries(fates);

export const FateSelector = observer(() => {
  const { character } = useRootStore();

  const onSelect = (e: any) => {
    character.setFate(e.target.value);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {fateList.map((fate) => (
        <FateItem fate={fate} />
      ))}
    </div>
  );
});
