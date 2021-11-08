import { observer } from "mobx-react-lite";
import * as React from "react";
import { useRootStore } from "../../../store/rootStore";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { predence, impulsiveness } from "./natures";
import { SimpleCard } from "../../../components/cards/SimpleCard";
import { Switch } from "@mui/material";
import { Nature } from "../../../store/types";

type ControlProps = {
  value: Nature;
  isBase: boolean;
  checkboxDisabled: boolean;
  setBase: (nature: Nature) => void;
  handleCheckboxChange: (selected: boolean, nature: Nature) => void;
};

function Control(props: ControlProps) {
  function onCheckboxChange(e: React.ChangeEvent<HTMLInputElement>) {
    props.handleCheckboxChange(e.target.checked, props.value);
  }

  function onSwitchChange(e: React.ChangeEvent<HTMLInputElement>) {
    props.setBase(props.value);
  }

  return (
    <>
      <Checkbox disabled={props.checkboxDisabled} onChange={onCheckboxChange} />
      <FormControlLabel
        control={
          <Switch
            disabled={false}
            size="small"
            checked={props.isBase}
            onChange={onSwitchChange}
            name="base"
            color="primary"
          />
        }
        label="base"
      />
    </>
  );
}

export const NatureSelector = observer(() => {
  const { character } = useRootStore();

  const limitReached = character.natures.length > 2;

  function handleCheckboxChange(selected: boolean, nature: Nature) {
    if (selected) {
      character.setNatures([
        ...character.natures,
        !character.baseNature ? { ...nature, base: true } : { ...nature }
      ]);
    } else {
      character.setNatures(
        character.natures.filter((item) => item.name !== nature.name)
      );
    }
  }

  function hasNature(nature: Nature) {
    return !!character.natures.find((item) => item.name === nature.name);
  }

  function isBase(nature: Nature) {
    return character.baseNature?.name === nature.name;
  }

  function setBase(nature: Nature) {
    if (hasNature(nature)) {
      character.setBaseNature(nature);
    }
  }

  return (
    <>
      <SimpleCard title="Рассудительность">
        <FormGroup>
          {predence.map((nature) => (
            <FormControlLabel
              key={nature.name}
              control={
                <Control
                  setBase={setBase}
                  checkboxDisabled={limitReached && !hasNature(nature)}
                  handleCheckboxChange={handleCheckboxChange}
                  isBase={isBase(nature)}
                  value={nature}
                />
              }
              label={nature.name}
            />
          ))}
        </FormGroup>
      </SimpleCard>
      <SimpleCard title="Импульсивность">
        <FormGroup>
          {impulsiveness.map((nature) => (
            <FormControlLabel
              key={nature.name}
              control={
                <Control
                  setBase={setBase}
                  checkboxDisabled={limitReached && !hasNature(nature)}
                  handleCheckboxChange={handleCheckboxChange}
                  isBase={isBase(nature)}
                  value={nature}
                />
              }
              label={nature.name}
            />
          ))}
        </FormGroup>
      </SimpleCard>
    </>
  );
});
