import { CustomButton, CustomCard } from '../../misc';
import { Loading } from '../Loading';

export const Step0 = ({ next, apiData, API }) => {
    const { setSelected, selected, data } = apiData;

    const handleCardSelect = (parentId) => {
        setSelected(selected === parentId ? null : parentId)
    }

    return (
        <>
            <div className="step-0-wrapper">
                <h1 className='build-form-h1'>Proceso de Ensamblaje</h1>
                <h2 className='build-form-h2'>1. Selecciona una figura</h2>
                <div className="cards">
                    {(typeof data.Shapes === 'undefined') ? (
                        <Loading />
                    ) : (
                        data.Shapes.map((shape, i) => (
                            <CustomCard key={`shape_${i}`}
                                id={shape}
                                customClass={`card ${selected === shape ? 'selected' : ''}`}
                                handleClick={handleCardSelect}
                                cardImage={<img src={`${API}/cards/shapes/${shape}.png`} alt={`img_${shape}`} />}
                            />
                        ))
                    )}
                </div>
            </div>
            <div className="step-0-btns-wrapper">
                <CustomButton customClass={'form-step-button'} text={'Siguiente'} disabled={!selected} func={next} />
            </div>
        </>
    )
}
