"use client";
import { Button, Spinner } from "@material-tailwind/react";
import React, { FC, useMemo } from "react";
import { STEP } from "./PageView";

const StepperController: FC<{
  activeStep: STEP;
  isFirstStep: boolean;
  isLastStep: boolean;
  handlePrev: () => void;
  actionHandler: () => Promise<void>;
  sendingRequest: boolean;
}> = ({
  activeStep,
  isFirstStep,
  isLastStep,
  handlePrev,
  actionHandler,
  sendingRequest,
}) => {
  const nextButtonText = useMemo(() => {
    switch (activeStep) {
      case 0:
        return "Pull Contract";
      case 1:
        return "Compile Contract";
      case 2:
        return "Deploy Contract";
      default:
        return null;
    }
  }, [activeStep]);

  return (
    <div className="mt-8 flex justify-between">
      <Button onClick={handlePrev} disabled={isFirstStep || sendingRequest}>
        Prev
      </Button>
      {!isLastStep && (
        <Button onClick={actionHandler} disabled={isLastStep || sendingRequest}>
          {sendingRequest ? <Spinner color="amber" /> : nextButtonText}
        </Button>
      )}
    </div>
  );
};

export default StepperController;
