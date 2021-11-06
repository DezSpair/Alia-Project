import * as React from "react";
import { useState } from "react";
import { FateNames } from "../../store/Fate";
import { Characteristics } from "./Characteristics";
import { FateSelector } from "./FateSelector";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Names } from './Names';
import { Natures } from './Natures';
import { CharacterFeatures } from './CharacterFeatures'

const steps = ['Имя игрока и персонажа', 'Ось характера', 'Характеристики', 'Особенности персонажа', 'Судьба', 'Умения', 'Расы'];
const stepsHtml = [ <Names/>, <Natures />, <Characteristics />, <CharacterFeatures />]
export type LabelProps = {
  optional: any
};
export type StepProps = {
  completed: any
};


export const Builder = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());


  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
  };

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
  <div style={{ display: "flex", flexDirection: "column", width: "80%" }}>
    <Box>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {} as StepProps;
          const labelProps = {} as LabelProps;
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
        <Typography sx={{ mt: 2, mb: 1 }}>
          All steps completed - you&apos;re finished
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
          <Box sx={{ flex: '1 1 auto' }} />
          <Button onClick={handleReset}>Reset</Button>
        </Box>
      </React.Fragment>
      ) : (
        <React.Fragment>
          {/*<Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>*/}
          {stepsHtml[activeStep]}
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Назад
            </Button>

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Далее'}
            </Button>
          </Box>
        </React.Fragment>

      )}
    </Box>
  </div>
/*
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Characteristics />
      <FateSelector />
    </div>*/
  );
};