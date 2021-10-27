import React from 'react';
import Navbar from './components/Navbar';
import Temp from './components/temp';

const App = () => {
  
// Here we are fetching the api key from the (.env.local) File.
const apiKey = process.env.REACT_APP_WEATHER_API

  return (
    <>
    <Navbar/>
    <Temp appid={apiKey}/>
    </>
  )
}

export default App;
