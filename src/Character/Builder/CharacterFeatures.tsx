import { observer } from "mobx-react-lite";
import * as React from "react";
import { useRootStore } from "../../store/rootStore";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import { coreFeats } from "../../store/feats";
import { SimpleCard } from "../../components/cards/SimpleCard";

export const CharacterFeatures = observer(() => {
  const { character } = useRootStore();

  const featsLimitReached =
    character.feats.filter((feat) => feat.source === "core").length >=
    character.maxCoreFeats;

  function onCheckboxChange(e: React.ChangeEvent<HTMLInputElement>) {
    const feat = coreFeats.find((coreFeat) => coreFeat.id === e.target.value);
    if (e.target.checked && feat) {
      character.addFeat(feat);
    }
    if (!e.target.checked && feat) {
      character.removeFeat(feat);
    }
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      {coreFeats.map((item) => {
        const hasFeat = character.feats.find((feats) => item.id === feats.id);
        const disabled = featsLimitReached && !hasFeat;
        return (
          <SimpleCard key={item.id} isActive={!!hasFeat}>
            <Typography variant="h5">
              <Checkbox
                value={item.id}
                disabled={disabled}
                onChange={onCheckboxChange}
              />
              {item.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {item.description}
            </Typography>
          </SimpleCard>
        );
      })}
    </Box>
  );
});
