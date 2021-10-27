import React, { useEffect } from 'react'

const Weathercard = ({  temp,
    humidity,
    pressure,
    weathermood,
    name,
    speed,
    country,
    sunset,all }) => {
    const [weatherState, setWeatherState] = React.useState("");
    
    // Weather mood Icons according to the current weather.
    useEffect(() => {
        if (weathermood) {
            switch (weathermood) {
                case "Clouds": setWeatherState(" wi-day-cloudy");
                    break;
                case "Haze": setWeatherState("wi-fog");
                    break;
                case "Clear": setWeatherState("wi-day-sunny");
                    break;
                case "Mist": setWeatherState("wi-dust");
                    break;
                default: setWeatherState("wi-day-Sunny");
                    break;
            }
        }
    }, [weathermood]);
    
    // Converting seconds to readable time.
    let sec = sunset;
    let date = new Date(sec * 1000);
    let timeStr = `${date.getHours()}:${date.getMinutes()}`;

    return (
        <>
            {/* Our temp card */}
            <article className="widget">
                <div className="weatherIcon">
                    <i className={`wi ${weatherState}`}></i>
                </div>
                <div className="weatherInfo">
                    <div className="temperature">
                        <span>{temp}&deg;</span>
                    </div>
                    <div className="description">
                        <div className="weatherCondition">{weathermood}</div>
                        <div className="place">{name},{country}</div>
                    </div>
                </div>
                <div className="date">{new Date().toLocaleString()}</div>
                {/* Our Four colomun section. */}
                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sidded-section">
                            <p>
                                <i className={"wi wi-sunset"}></i>
                            </p>    
                            <p className="extra-info-leftside">
                                {timeStr} PM <br />
                                Sunset
                            </p>
                        </div>
                        <div className="two-sidded-section">
                            <p>
                                <i className={"wi wi-humidity"}></i>
                            </p>
                            <p className="extra-info-leftside">{humidity} <br />Humidity</p>
                        </div>
                    </div>
                    <div className="weather-extra-info">
                        <div className="two-sidded-section">
                            <p>
                                <i className={"wi wi-cloud"}></i>
                            </p>
                            <p className="extra-info-leftside">{all}% <br />Clouds</p>
                        </div>
                        <div className="two-sidded-section">
                            <p>
                                <i className={" wi wi-windy"}></i>
                            </p>
                            <p className="extra-info-leftside">{speed} Km/h <br />Speed</p>
                        </div>
                    </div>
                </div>
            </article>
        </>
    )
}

export default Weathercard;
