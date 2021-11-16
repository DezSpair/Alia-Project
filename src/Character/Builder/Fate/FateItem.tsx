import * as React from "react";
import { Fate } from "../../../store/types";
import { SimpleCard } from "../../../components/cards/SimpleCard";
import { Typography, Radio } from "@mui/material";

type FateItemProps = {
  fate: Fate;
  selected: boolean;
  onFateChange: (fate: Fate, selected: boolean) => void;
};

export function FateItem(props: FateItemProps) {
  const { fate, selected, onFateChange } = props;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFateChange(fate, e.target.checked);
  };

  return (
    <SimpleCard isActive={selected}>
      <Typography variant="h5">
        <Radio value={fate.id} checked={selected} onChange={onChange} />
        {fate.name}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary">
        {fate.description}
      </Typography>
      {fate.trates.map((feat) => (
        <Typography variant="subtitle1" color="text.secondary">
          {feat.description}
        </Typography>
      ))}
    </SimpleCard>
  );
}
