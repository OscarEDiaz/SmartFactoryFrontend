import { useState } from "react"
import { CustomButton } from "../../misc"


export const Step2 = ({reset}) => {
    const [isDisabled, setIsDisabled] = useState(true)

    return (
        <div id="step-2">
            <h1 className="build-form-h1">Proceso de Ensamblaje</h1>
            <h2 className="build-form-h2">Terminado! Por favor, contesta la siguiente encuesta:</h2>
            <form className="survey" action="" method="post">
                <fieldset className="survey-fs name-fs">
                    <legend>Datos Personales</legend>
                    <div className="name-input">
                        <label htmlFor="name">Nombre:</label>
                        <input type="text" name="name"/>
                    </div>
                    <div className="name-input">
                        <label htmlFor="name">Apellido Paterno:</label>
                        <input type="text" name="name"/>
                    </div>
                    <div className="name-input">
                        <label htmlFor="name">Apellido Materno:</label>
                        <input type="text" name="name"/>
                    </div>
                </fieldset>
                <fieldset className="survey-fs">
                    <legend>Pregunta 1</legend>
                    <label htmlFor="">
                        <input type="radio" name="" id="" /> Lorem 1
                    </label>
                    <label htmlFor="">
                        <input type="radio" name="" id="" /> Lorem 2
                    </label>
                    <label htmlFor="">
                        <input type="radio" name="" id="" /> Lorem 3
                    </label>
                    <label htmlFor="">
                        <input type="radio" name="" id="" /> Lorem 4
                    </label>
                </fieldset>
                <fieldset className="survey-fs">
                    <legend>Pregunta 2</legend>
                    <label htmlFor="">
                        <input type="radio" name="" id="" /> Lorem 1
                    </label>
                    <label htmlFor="">
                        <input type="radio" name="" id="" /> Lorem 2
                    </label>
                    <label htmlFor="">
                        <input type="radio" name="" id="" /> Lorem 3
                    </label>
                    <label htmlFor="">
                        <input type="radio" name="" id="" /> Lorem 4
                    </label>
                </fieldset>
                <fieldset className="survey-fs">
                    <legend>Pregunta 3</legend>
                    <label htmlFor="">
                        <input type="radio" name="" id="" /> Lorem 1
                    </label>
                    <label htmlFor="">
                        <input type="radio" name="" id="" /> Lorem 2
                    </label>
                    <label htmlFor="">
                        <input type="radio" name="" id="" /> Lorem 3
                    </label>
                    <label htmlFor="">
                        <input type="radio" name="" id="" /> Lorem 4
                    </label>
                </fieldset>
                <fieldset className="survey-fs">
                    <legend>Pregunta 4</legend>
                    <label htmlFor="">
                        <input type="radio" name="" id="" /> Lorem 1
                    </label>
                    <label htmlFor="">
                        <input type="radio" name="" id="" /> Lorem 2
                    </label>
                    <label htmlFor="">
                        <input type="radio" name="" id="" /> Lorem 3
                    </label>
                    <label htmlFor="">
                        <input type="radio" name="" id="" /> Lorem 4
                    </label>
                </fieldset>
                <fieldset>
                    <legend>Comentarios</legend>
                    <label htmlFor="">
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </label>
                </fieldset>
                <input type="button" value="Enviar Respuestas" onClick={() => setIsDisabled(false)} />
            </form>
            <div className="step-1-btns-wrapper">
               <CustomButton text={'Realizar Ensamble Nuevo'} customClass={'form-step-button'} func={reset} disabled={isDisabled}/>
            </div>
        </div>
    )
}
