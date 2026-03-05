import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import { useParams, useLocation } from "wouter";
import { useEffect, useState } from "react";
import LocationsMap from "../components/LocationsMap";
import locationsService from "../services/locationsService";
import LoadingAnim from"../components/LoadingAnim";

function LocationDetailView() {
  const params = useParams();
  const [city, setCity] = useState({});
  const [cityWeather, setCityWeather] = useState([]);
  const [forecastWeather, setForecastWeather] = useState([]);
  const [, setLocation] = useLocation();

  useEffect(() => {
    const fetchCityData = async () => {
      const data = await locationsService.loadLocationsData();
      const foundCity = data.find(
        (p) => p.city.toLowerCase() === params.locationName.toLowerCase()
      );
      if (!foundCity) {
        setLocation("/404");
      }
      setCity(foundCity);
    };

    fetchCityData();
  }, [params.locationName ,setLocation]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const result = await locationsService.getCurrentLocationWeather(
        params.locationName
      );
      setCityWeather(result);
    };
    fetchWeatherData();
  }, [params.locationName]);

  useEffect(() => {
    const fetchForecastData = async () => {
      const result = await locationsService.getLocation5daysForecast(
        params.locationName
      );
      setForecastWeather(result);
    };
    fetchForecastData();
  }, [params.locationName]);

  return (
    <>
      <section className="mt-[30px]">
        <div className="text-3xl text-center font-bold mb-8 sm:mb-16">
          <h1 className="text-xl sm:text-3xl">{city.country}</h1>
          <h1 className="text-2xl underline sm:text-4xl">{city.city}</h1>

          <div className="mt-4">
            <h2 className="text-lg sm:text-xl">Trip Dates</h2>
            <p className="text-sm sm:text-base mt-1">{city.arrivalDate}</p>
            <h2 className="text-lg sm:text-xl">to</h2>
            <p className="text-sm sm:text-base mt-1">{city.departureDate}</p>
          </div>
        </div>
        <div className="p-5">
          <Swiper
            modules={[EffectFade]}
            effect="fade"
            autoHeight={true}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
          >
            {city.LocationImages && city.LocationImages.length > 0 ? (
              city.LocationImages.map((image) => (
                <SwiperSlide key={image.filename}>
                  <img
                    className="block w-full h-auto object-contain max-h-[600px] mx-auto"
                    src={image.path}
                    alt={`Image of ${city.city}`}
                  />
                </SwiperSlide>
              ))
            ) : (
              <SwiperSlide>
                <div className="flex items-center justify-center p-20">
                  <LoadingAnim />
                </div>
              </SwiperSlide>
            )}
          </Swiper>
        </div>
      </section>

      <article>
        <div className="p-5 text-wrap leading-snug text-lg">
          <p className="whitespace-pre-wrap text-center">{city.description}</p>
        </div>
      </article>
      <section>
        <div className="p-5">
          <LocationsMap location={city} className="p-5" />
        </div>
      </section>
      <section className="px-4">
        <div className="mb-5 px-4">
          {cityWeather?.weather && cityWeather.weather.length > 0 ? (
            <div className="bg-gradient-to-br from-blue-100 to-white rounded-lg shadow-md md:p-8 lg:p-10 overflow-hidden mx-auto max-w-sm">
              <div className="p-6 text-center">
                <h1 className="text-xl font-bold mb-3 md:text-3xl">
                  Current weather
                </h1>
                <h2 className="text-lg font-bold underline mb-4 md:text-2xl">
                  {city.city}
                </h2>
                {cityWeather.weather.map((data) => (
                  <div key={data.id} className="mb-4">
                    <h3>{data.main}</h3>
                    <div className="flex justify-center mt-2">
                      <img
                        src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
                        alt="Weather icon"
                        className="w-auto h-auto max-w-xs bg-white"
                      />
                    </div>
                    <p className="capitalize text-sm md:text-base">
                      {data.description}
                    </p>
                  </div>
                ))}
                <p className="mt-4">
                  Current Temperature: {cityWeather.main.temp} °C
                </p>
                <p>Min Temperature: {cityWeather.main.temp_min} °C</p>
                <p>Max Temperature: {cityWeather.main.temp_max} °C</p>
              </div>
            </div>
          ) : cityWeather?.weather ? (
            <p className="text-center text-gray-500">
              No weather data available.
            </p>
          ) : (
            <div className="flex items-center justify-center p-20">
              <LoadingAnim />
            </div>
          )}
        </div>
      </section>

      <div className="p-7">
        <h1 className="text-5xl text-center font-black"> 5 day Forecast </h1>
        {forecastWeather?.list && forecastWeather.list.length > 0 ? (
          <div className="flex justify-center gap-6 m-12 flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap xl:flex-nowrap">
            {forecastWeather.list.map((data) => (
              <div className="text-center" key={data.dt}>
                {data.weather.map((details) => (
                  <div className="justify-center" key={details.id}>
                    <h3> {details.main}</h3>
                    <div className="flex justify-center">
                      <img
                        src={`https://openweathermap.org/img/wn/${details.icon}@2x.png`}
                        alt="weather-icon"
                        className="w-auto h-auto max-w-xs"
                      />
                    </div>
                    <p className="capitalize"> {details.description}</p>
                  </div>
                ))}
                <p> Temperature: {data.main.temp} °C</p>
              </div>
            ))}
          </div>
        ) : forecastWeather?.weather ? (
          <p>No weather data available.</p>
        ) : (
          <div className="flex items-center justify-center p-20">
            <LoadingAnim />
          </div>
        )}
      </div>
    </>
  );
}

export default LocationDetailView;
