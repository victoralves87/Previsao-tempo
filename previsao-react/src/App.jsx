import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import Weatherinfo from './components/weatherInfo/Weatherinfo'

function App() {
  const [weather, setWeather] = useState({})
  const inputRef = useRef()

 async function searchCity(){
    const city = inputRef.current.value;
    const key = "0d9aaf62cc8709a60b730d540b9da58f"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
    const apiInfo = await axios.get(url)
    setWeather(apiInfo.data)
  }

  return(
    <div>
      <h1>DEv club previsão do tempo</h1>
      <input ref={inputRef} type="text" placeholder="digite o nome da sua cidade" />
      <button onClick={searchCity}>Buscar</button>

      <Weatherinfo weather={weather} />
    </div>
  )
}

export default App
