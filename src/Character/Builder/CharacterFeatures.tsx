import { observer } from "mobx-react-lite";
import * as React from "react";
import { useRootStore } from "../../store/rootStore";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import { coreFeats } from "../../store/feats";

const MAX_COR_FEATS_COUNT = 2;

export const CharacterFeatures = observer(() => {
  const { character } = useRootStore();

  const featsLimitReached = character.feats.length >= MAX_COR_FEATS_COUNT;

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
          <Card key={item.id} sx={{ width: 400 }}>
            <Box>
              <CardContent>
                <Typography component="div" variant="h5">
                  <Checkbox
                    value={item.id}
                    disabled={disabled}
                    onChange={onCheckboxChange}
                  />
                  {item.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  {item.description}
                </Typography>
              </CardContent>
            </Box>
          </Card>
        );
      })}
    </Box>
  );
});
