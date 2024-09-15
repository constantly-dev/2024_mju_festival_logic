import { Axios } from './axios';

export const getWeatherInfo = async (
  token: string,
  NUM_OF_ROWS: string,
  currentDate: string,
  currentTime: string,
  NX: string,
  NY: string
) => {
  const { data } = await Axios.get(
    `/getUltraSrtFcst?serviceKey=${token}&pageNo=1&numOfRows=${NUM_OF_ROWS}&dataType=JSON&base_date=${currentDate}&base_time=${currentTime}&nx=${NX}&ny=${NY}`
  );
  const forecasts = data.response.body.items.item;
  return forecasts;
};
