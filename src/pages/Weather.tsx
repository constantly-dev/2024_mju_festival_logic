import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getWeatherInfo } from '../api/getWeatherInfo';
import WeatherItemBox from '../components/Weather/WeatherItemBox';
import getCurrentDateFormatted from '../utils/getCurrentDateFormatted';

interface WeatherForecast {
  fcstTime: string;
  SKY: string | null;
  T1H: string | null;
}

interface GroupedWeatherData {
  fcstTime: string;
  category: string;
  fcstValue: string;
}

const Weather = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [forecasts, setForecasts] = useState<WeatherForecast[]>([]);

  const token = '';
  const NUM_OF_ROWS = '60';
  const NX = '63';
  const NY = '119';

  const groupForecast = (forecasts: GroupedWeatherData[]) => {
    const groupedForecasts: Record<string, WeatherForecast> = {};

    forecasts.forEach((forecast: GroupedWeatherData) => {
      const key = `${forecast.fcstTime}`;

      // 초기화
      if (!groupedForecasts[key]) {
        groupedForecasts[key] = {
          fcstTime: forecast.fcstTime,
          SKY: null,
          T1H: null,
        };
      }

      if (forecast.category === 'SKY') {
        groupedForecasts[key].SKY = forecast.fcstValue;
      } else if (forecast.category === 'T1H') {
        groupedForecasts[key].T1H = forecast.fcstValue;
      }
    });
    const resultForecasts = Object.values(groupedForecasts);
    setForecasts(resultForecasts);
  };

  const fetchWeatherInfo = async () => {
    try {
      const forecasts = await getWeatherInfo(
        token,
        NUM_OF_ROWS,
        currentDate,
        currentTime,
        NX,
        NY
      );
      groupForecast(forecasts);
    } catch (error) {
      console.error('오류 발생:', error);
    }
  };

  useEffect(() => {
    const { date, time } = getCurrentDateFormatted();
    setCurrentDate(date);
    setCurrentTime(time);
  }, []);

  useEffect(() => {
    if (currentDate && currentTime) {
      const fetchWeatherData = async () => {
        await fetchWeatherInfo();
      };
      fetchWeatherData();
    }
  }, [currentDate, currentTime]);

  return (
    <Wrapper>
      {forecasts.map((forecast, index) => (
        <WeatherItemBox forecast={forecast} key={index} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  border: 1px solid blue;
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export default Weather;
