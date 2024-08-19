/* eslint-disable react/prop-types */
import "./Weatherinfo5Days.css"

function Weatherinfo5Days({weather5Days}){
  console.log(weather5Days)

  let dalilyForecast = {}

  for(let forecast of weather5Days.list){
    // Convertendo a data para um formato que agrupa por dia
    const date = new Date(forecast.dt * 1000).toLocaleDateString('pt-BR', { day: "2-digit", month: "2-digit", year: "numeric" });

    // Se ainda não existe uma previsão para esse dia, adicionar
    if(!dalilyForecast[date]){
      dalilyForecast[date] = forecast;
    } else {
      // Se já existe, podemos adicionar uma lógica para sobrescrever com a previsão mais recente do dia, se desejar
      // dalilyForecast[date] = forecast;
    }
  }
  
  const next5DaysForecast = Object.values(dalilyForecast).slice(0, 5); // Pega os próximos 5 dias

  function convertDate(date){
    const newDate = new Date(date.dt * 1000).toLocaleString('pt-BR', { weekday: "long", day: "2-digit", month: "long" }); 
    return newDate;
  }

  return (
    <div className="weather-container">
      <p>Previsão proximos 5 dias</p>
      {next5DaysForecast.map(forecast => (
        <div key={forecast.dt} className="weather-day">
          <p>{convertDate(forecast)}</p>
          <img src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`} alt="icone" />
          <p>{forecast.weather[0].description}</p>
          <p>{Math.round(forecast.main.temp_min)}°C min / {Math.round(forecast.main.temp_max)}°C Max</p>
        </div>
      ))}
    </div>
  )
}

export default Weatherinfo5Days;
