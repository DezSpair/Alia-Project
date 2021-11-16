import * as React from "react";
import { Characteristics } from "./Characteristics";
import { FateSelector } from "./Fate/FateSelector";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Names } from "./Names";
import { NatureSelector } from "./Nature/NatureSelector";
import { CharacterFeatures } from "./CharacterFeatures";
import { useRootStore } from "../../store/rootStore";

const steps = {
  "Имя игрока и персонажа": <Names />,
  "Ось характера": <NatureSelector />,
  Судьба: <FateSelector />,
  Характеристики: <Characteristics />,
  // "Особенности персонажа",
  // "Расы"
  "Особенности персонажа": <CharacterFeatures />
  // "Умения",
};

export const Builder = () => {
  const { character } = useRootStore();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    character.reset();
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "80%" }}>
      <Box>
        <Stepper activeStep={activeStep}>
          {Object.keys(steps).map((label, index) => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === Object.keys(steps).length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {Object.values(steps)[activeStep]}
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Назад
              </Button>

              <Button onClick={handleNext}>
                {activeStep === Object.keys(steps).length - 1
                  ? "Finish"
                  : "Далее"}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
    </div>
  );
};
