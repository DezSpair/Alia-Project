import { observer } from "mobx-react-lite";
import * as React from "react";
import { useRootStore } from "../../store/rootStore";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import { predence, impulsiveness } from "./natures";

export const SubNatures = observer(() => {
  const { character } = useRootStore();

  const handleChange = (event: any) => {
    if (event.target.checked) {
      character.subNature = [...character.subNature, event.target.value];
    } else {
      character.subNature = [
        ...character.subNature.filter((i) => i !== event.target.value)
      ];
    }
  };

  const mapToList = (arr: string[]) => {
    return arr.map((item, index) => {
      return (
        <FormControlLabel
          disabled={
            character.subNature.length >= 2 &&
            character.subNature.indexOf(item) == -1
          }
          key={"nature_ckb_" + index}
          control={
            <Checkbox
              value={item}
              onChange={handleChange}
              checked={character.subNature.indexOf(item) > -1}
            />
          }
          label={item}
        />
      );
    });
  };
  const getCheckboxList = () => {
    let result = "" as any;
    switch (character.nature) {
      case "Рассудительность":
        result = mapToList(predence);
        break;
      case "Импульсивность":
        result = mapToList(impulsiveness);
        break;
      case "Самоотверженность":
        result = mapToList(dedication);
        break;
      case "Эгоизм":
        result = mapToList(selfishness);
        break;
    }

    return result;
  };
  return <FormGroup>{getCheckboxList()}</FormGroup>;
});
