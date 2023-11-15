import { CustomNavbar } from '../components/misc/index';

import useMultiStepForm from '../hooks/useMultiStepForm';
import useCardData from '../hooks/useCardData';


import { Step0 } from '../components/form_page/steps/Step0';
import { Step1 } from '../components/form_page/steps/Step1';
import { Step2 } from '../components/form_page/steps/Step2';

import '../styles/form_page/formPage.css'

const API = process.env.REACT_APP_API;

export const FormPage = () => {
  const { step, handleNextStep, handlePrevStep, reset } = useMultiStepForm();
  const { data, selected, setSelected, pieces, setPieces } = useCardData(API);

  const steps = [
    <Step0 next={handleNextStep} apiData={{setSelected, selected, data}} API={API} />, 
    <Step1 next={handleNextStep} prev={handlePrevStep} apiData={{selected, pieces, setPieces}} />, 
    <Step2 apiData={data} reset={reset}/>
  ]

  return (
    <section id='BuildForm' className='build-section-main'>
      <CustomNavbar isLanding={false} />
      <div className="build-section-dashboard">
        <form className='build-section-form'>
          {steps[step]}
        </form>
      </div>
    </section>
  )
}
