// Hook personalizado useMultiStepForm
import { useState } from 'react';

const useMultiStepForm = (initialStep = 0) => {
  const [step, setStep] = useState(initialStep);

  const handleNextStep = (e) => {
    e.preventDefault();
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = (e) => {
    e.preventDefault();
    setStep((prevStep) => prevStep - 1);
  };

  const reset = (e) => {
    e.preventDefault();

    setStep(initialStep);
  }

  return { step, handleNextStep, handlePrevStep, reset };
};

export default useMultiStepForm;
