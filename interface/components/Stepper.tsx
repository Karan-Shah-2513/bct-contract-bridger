"use client";
import React, { Dispatch, FC, ReactNode, SetStateAction } from "react";
import { Stepper, Step, Typography } from "@material-tailwind/react";
import {
  DocumentMagnifyingGlassIcon,
  DocumentChartBarIcon,
  CodeBracketIcon,
  DocumentCheckIcon,
} from "@heroicons/react/24/outline";

const StepperComponent: FC<{
  activeStep: number;
  setActiveStep: Dispatch<SetStateAction<number>>;
  setIsFirstStep: Dispatch<SetStateAction<boolean>>;
  setIsLastStep: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
}> = ({
  activeStep,
  setActiveStep,
  setIsFirstStep,
  setIsLastStep,
  children,
}) => {
  const handleStepClick = (step: number) => {
    // should only allow back click not next
    if (step < activeStep) setActiveStep(step);
  };
  return (
    <div className="w-full py-4">
      <Stepper
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
      >
        <Step onClick={() => handleStepClick(0)}>
          <DocumentMagnifyingGlassIcon className="h-5 w-5" />
          <div className="absolute -bottom-[2rem] w-max text-center">
            <Typography
              color={activeStep === 0 ? "blue-gray" : "gray"}
              className="font-normal md:hidden"
            >
              step 1
            </Typography>
            <Typography
              color={activeStep === 0 ? "blue-gray" : "gray"}
              className="font-normal hidden md:block"
            >
              source details
            </Typography>
          </div>
        </Step>
        <Step onClick={() => handleStepClick(1)}>
          <DocumentChartBarIcon className="h-5 w-5" />
          <div className="absolute -bottom-[2rem] w-max text-center">
            <Typography
              color={activeStep === 1 ? "blue-gray" : "gray"}
              className="font-normal md:hidden"
            >
              step 2
            </Typography>
            <Typography
              color={activeStep === 1 ? "blue-gray" : "gray"}
              className="font-normal hidden md:block"
            >
              contract details
            </Typography>
          </div>
        </Step>
        <Step onClick={() => handleStepClick(2)}>
          <CodeBracketIcon className="h-5 w-5" />
          <div className="absolute -bottom-[2rem] w-max text-center">
            <Typography
              color={activeStep === 2 ? "blue-gray" : "gray"}
              className="font-normal md:hidden"
            >
              step 3
            </Typography>
            <Typography
              color={activeStep === 2 ? "blue-gray" : "gray"}
              className="font-normal hidden md:block"
            >
              Contract bytecode
            </Typography>
          </div>
        </Step>
        <Step onClick={() => handleStepClick(3)}>
          <DocumentCheckIcon className="h-5 w-5" />
          <div className="absolute -bottom-[2rem] w-max text-center">
            <Typography
              color={activeStep === 3 ? "blue-gray" : "gray"}
              className="font-normal md:hidden"
            >
              step 4
            </Typography>
            <Typography
              color={activeStep === 3 ? "blue-gray" : "gray"}
              className="font-normal hidden md:block"
            >
              Result
            </Typography>
          </div>
        </Step>
      </Stepper>
      <div className="pt-32">{children}</div>
    </div>
  );
};

export default StepperComponent;
