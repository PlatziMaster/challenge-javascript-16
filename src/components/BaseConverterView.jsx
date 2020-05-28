import React, { useState } from 'react';
import Result from './Result';
import baseConverter from '../index';


const BaseConverterView = () => {

  const [radio, setRadio] = useState(1);
  const [base, setBase] = useState('B');
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');

  const [b1, setB1] = useState('');
  const [o1, setO1] = useState('');
  const [d1, setD1] = useState('');
  const [h1, setH1] = useState('');

  const [b2, setB2] = useState('');
  const [o2, setO2] = useState('');
  const [d2, setD2] = useState('');
  const [h2, setH2] = useState('');

  const [br, setBr] = useState('');
  const [or, setOr] = useState('');
  const [dr, setDr] = useState('');
  const [hr, setHr] = useState('');

  const handleRadio = (event) => {
    setRadio(Number(event.target.value))
  }

  const hadleNumber1 = (event) => {
    setNumber1(Number(event.target.value));
  }
  const hadleNumber2 = (event) => {
    setNumber2(Number(event.target.value));
  }

  const btnResult = () => {
    setD1(number1);
    setB1(baseConverter(number1, 2))
    setO1(baseConverter(number1, 8))
    setH1(baseConverter(number1, 16))
  }

  const btnAddition = () =>{
    setD1(number1);
    setD2(number2);
    setDr(number1 + number2)
    setB1(baseConverter(number1, 2))
    setB2(baseConverter(number2, 2))
    setBr(baseConverter((number1 + number2), 2))
    setO1(baseConverter(number1, 8))
    setO2(baseConverter(number2, 8))
    setOr(baseConverter((number1 + number2), 8))
    setH1(baseConverter(number1, 16))
    setH2(baseConverter(number2, 16))
    setHr(baseConverter((number1 + number2), 16))
  }
  const btnsubtracion = () =>{
    setD1(number1);
    setD2(number2);
    setDr(number1 - number2)
    setB1(baseConverter(number1, 2))
    setB2(baseConverter(number2, 2))
    setBr(baseConverter((number1 - number2), 2))
    setO1(baseConverter(number1, 8))
    setO2(baseConverter(number2, 8))
    setOr(baseConverter((number1 - number2), 8))
    setH1(baseConverter(number1, 16))
    setH2(baseConverter(number2, 16))
    setHr(baseConverter((number1 - number2), 16))
  }
  const btnmultiplication = () =>{
    setD1(number1);
    setD2(number2);
    setDr(number1 * number2)
    setB1(baseConverter(number1, 2))
    setB2(baseConverter(number2, 2))
    setBr(baseConverter((number1 * number2), 2))
    setO1(baseConverter(number1, 8))
    setO2(baseConverter(number2, 8))
    setOr(baseConverter((number1 * number2), 8))
    setH1(baseConverter(number1, 16))
    setH2(baseConverter(number2, 16))
    setHr(baseConverter((number1 * number2), 16))
  }
  const btnDivision = () =>{
    setD1(number1);
    setD2(number2);
    setDr(number1 / number2)
    setB1(baseConverter(number1, 2))
    setB2(baseConverter(number2, 2))
    setBr(baseConverter((number1 / number2), 2))
    setO1(baseConverter(number1, 8))
    setO2(baseConverter(number2, 8))
    setOr(baseConverter((number1 / number2), 8))
    setH1(baseConverter(number1, 16))
    setH2(baseConverter(number2, 16))
    setHr(baseConverter((number1 / number2), 16))
  }

  return (
    <section className='Home'>
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
          <div className='BaseConverter__input-n1'>
            <label htmlFor="N1">Número 1</label>
            <input type='number' id='N1' name="N1" className='inputDefaul' onChange={hadleNumber1} />
          </div>
          {
            radio === 2 && (
              <>
                <div className='BaseConverter__input-n2'>
                  <label htmlFor="N2">Número 2</label>
                  <input type='number' id='N2' name="N2" className='inputDefaul' onChange={hadleNumber2} />
                </div>
                <div className='BaseConverter__input-operation'>
                  <button onClick={()=> btnAddition()} >+</button>
                  <button onClick={()=> btnsubtracion()} >-</button>
                  <button onClick={()=> btnmultiplication()} >x</button>
                  <button onClick={()=> btnDivision()} >/</button>
                </div>
              </>
            )
          }
          {
            radio === 1 && (
              <button className='BaseConverter__input-btn inputDefaul' onClick={() => btnResult()}>Convertir</button>
            )
          }
        </div>
      </section>
      <Result
        radio={radio}
        b1={b1}
        b2={b2}
        br={br}
        o1={o1}
        o2={o2}
        or={or}
        d1={d1}
        d2={d2}
        dr={dr}
        h1={h1}
        h2={h2}
        hr={hr}
      />
    </section>
  )
};

export default BaseConverterView;