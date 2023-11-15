import { CustomButton, CustomCard } from '../../misc';
import { Drag, Drop, Loading } from '../index.js';

import useMediaQuery from '../../../hooks/useMediaQuery'
import sendToBack from '../../../helpers/sendToBack';

const API = process.env.REACT_APP_API;

export const Step1 = ({ next, prev, apiData }) => {
    const dndVertical = useMediaQuery('(max-width: 800px)');

    const { selected, pieces, setPieces } = apiData;

    const handleSubmit = (e) => {
        let message = { shape: selected, pieces: pieces.join('/') }
        sendToBack(`${API}/sendMqtt`, message)
        next(e);
    }

    return (
        <div id="step-1">
            <div className="step-0-wrapper">
                <h1 className='build-form-h1'>Proceso de Ensamblaje</h1>
                <h2 className='build-form-h2'>2. Selecciona el orden de las piezas</h2>
                <div className="cards">
                    {(typeof pieces === 'undefined') ? (
                        <Loading />
                    ) : (
                        <Drop
                            direction={dndVertical ? 'vertical' : 'horizontal'}
                            items={pieces}
                            setItems={setPieces}
                            dragItems={
                                pieces.map((piece, i) => (
                                    <Drag key={`${i}`} id={piece} draggableId={`${i}`} index={i}
                                        item={
                                            <CustomCard
                                                customClass='card'
                                                cardImage={<img src={`${API}/cards/pieces/${piece}.jpg`} alt={`img_${piece}`} />}
                                            />
                                        }
                                    ></Drag>
                                ))
                            }
                        ></Drop>
                    )}
                </div>
                <div className="step-1-btns-wrapper">
                    <CustomButton text={'Atras'} func={prev} customClass={'form-back-button'}/>
                    <div style={{'width': '20px'}}></div>
                    <CustomButton text={'Siguiente'} func={handleSubmit} customClass={'form-step-button'}/>
                </div>
            </div>
        </div>
    )
}
