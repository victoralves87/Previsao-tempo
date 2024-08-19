/* eslint-disable react/prop-types */
import "./Weatherinfo.css";

function Weatherinfo({ weather }) {
  // Verifique se os dados necessários estão presentes antes de renderizar
  if (!weather.name || !weather.weather || weather.weather.length === 0) {
    return <div></div>;
  }

  const weatherIcon = weather.weather[0].icon ? `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png` : '';

  return (
    <div className="weather-container">
      <h2>{weather.name}</h2>
      <div className="weather-info">
        {weatherIcon && (
          <img
            src={weatherIcon}
            alt={weather.weather[0].description}
          />
        )}
        <p className="temperature">{Math.round(weather.main.temp)}ºC</p>
      </div>

      <p className="description">{weather.weather[0].description}</p>
      
      <div className="details">
        <p>Senssão Térmica: {Math.round(weather.main.feels_like)}ºC</p>
        <p>Umidade: {weather.main.humidity}</p>
        <p>Pressão: {weather.main.pressure}</p>
      </div>
      
    </div>
  );
}

export default Weatherinfo;

