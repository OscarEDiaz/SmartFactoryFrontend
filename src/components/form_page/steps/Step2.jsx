import { CustomButton } from "../../misc"


export const Step2 = ({reset}) => {
    return (
        <div id="step-2">
            <h1 className="build-form-h1">Proceso de Ensamblaje</h1>
            <h2 className="build-form-h2">Terminado!</h2>
            <div className="step-1-btns-wrapper">
               <CustomButton text={'Realizar Ensamble Nuevo'} customClass={'form-step-button'} func={reset}/>
            </div>
        </div>
    )
}
