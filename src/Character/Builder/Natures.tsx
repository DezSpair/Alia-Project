import { observer } from "mobx-react-lite";
import * as React from "react";
import { useRootStore } from "../../store/rootStore";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { SubNatures } from "./SubNatures";

export const Natures = observer(() => {
  const { character } = useRootStore();
  const handleRadioChange = (event: any) => {
    character.nature = event.target.value;
  };
  const natures = ["Рассудительность", "Импульсивность", "Самоотверженность", "Эгоизм"];
  return (
    <div>
      <RadioGroup
        row
        name="row-radio-buttons-group"
        onChange={handleRadioChange}
      >
          {natures.map((item, index) => {
              return (
                <FormControlLabel
                    value={item}
                    control={<Radio />}
                    label={item}
                    key={"nature_" + index}
                />);
          })}
      </RadioGroup>

      {character.nature && <SubNatures />}
    </div>
  );
});