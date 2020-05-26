import React, { useState } from 'react';
import BaseConverter from '../components/BaseConverter';
import '../assets/app.scss';

const Home = () => {
  const [radio, setRadio] = useState(1)
  return (
    <>
      <BaseConverter/>
    </>
  )
};

export default Home;