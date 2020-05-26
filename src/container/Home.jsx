import React, { useState } from 'react';
import BaseConverterView from '../components/BaseConverterView';
import '../assets/app.scss';

const Home = () => {
  const [radio, setRadio] = useState(1)
  return (
    <>
      <BaseConverterView/>
    </>
  )
};

export default Home;