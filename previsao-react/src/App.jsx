import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import Weatherinfo from './components/weatherInfo/Weatherinfo'
import Weatherinfo5Days from './components/weatherinfo5days/Weatherinfo5Days'

function App() {
  const [weather, setWeather] = useState()
  const [weather5Days, setweather5Days] = useState()

  const inputRef = useRef()

 async function searchCity(){
    const city = inputRef.current.value;
    const key = "0d9aaf62cc8709a60b730d540b9da58f"

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
    const urlDays = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`

    const apiInfo = await axios.get(url)
    const apiInfoDays = await axios.get(urlDays)

    setweather5Days(apiInfoDays.data)
    setWeather(apiInfo.data)
  }

  return(
    <div className="container">
      <h1>DEv club previsão do tempo</h1>
      <input ref={inputRef} type="text" placeholder="digite o nome da sua cidade" />
      <button onClick={searchCity}>Buscar</button>

      {weather && <Weatherinfo weather={weather} />}
      {weather5Days && <Weatherinfo5Days weather5Days={weather5Days} />}
    </div>
  )
}

export default App
