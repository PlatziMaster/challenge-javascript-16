import React, { useState } from 'react';

const BaseConverter = () => {

  const [radio, setRadio] = useState(1)
  const handleRadio = (event) => {
    setRadio(Number(event.target.value))
  }

  const result = () => {
    console.log(radio)
  }
  return (
    <section className='BaseConverter'>
      <h2 className='BaseConverter__title' >Convertidor de Bases</h2>
      <div className='BaseConverter__input'>
        <div className='BaseConverter__input-radio'>
          <div className='BaseConverter__input-radio-converter'>
            <input type='radio' id='converter' name="type" value="1" onChange={handleRadio} defaultChecked />
            <label htmlFor="converter">Convertir</label>
          </div>
          <div className='BaseConverter__input-radio-calculator'>
            <input type='radio' id='calculator' name="type" value="2" onChange={handleRadio} />
            <label htmlFor="calculator">Calculadora</label>
          </div>
        </div>
        <select name="Base" className='BaseConverter__input-base inputDefaul'>
          <option value="B" defaultValue>Binario</option>
          <option value="O">Octal</option>
          <option value="D">Decimal</option>
          <option value="H">Hexadecimal</option>
        </select>
        <div className='BaseConverter__input-n1'>
          <label htmlFor="N1">Número 1</label>
          <input type='text' id='N1' name="N1" className='inputDefaul' />
        </div>
        {
          radio === 2 && (
            <>
              <div className='BaseConverter__input-n2'>
                <label htmlFor="N2">Número 2</label>
                <input type='text' id='N2' name="N2" className='inputDefaul' />
              </div>
              <div className='BaseConverter__input-operation'>
                <button>+</button>
                <button>-</button>
                <button>x</button>
                <button>/</button>
              </div>
            </>
          )
        }
        {
          radio === 1 && (
            <button className='BaseConverter__input-btn inputDefaul' onClick={() => result()}>Convertir</button>
          )
        }
      </div>
    </section>
  )
};

export default BaseConverter;