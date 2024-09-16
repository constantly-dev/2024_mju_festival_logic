import styled from 'styled-components';

interface WeatherProps {
  fcstTime: string;
  SKY: string | null;
  T1H: string | null;
}

const WeatherItemBox = ({ forecast }: { forecast: WeatherProps }) => {
  return (
    <Wrapper>
      <WeaterText>{forecast.fcstTime}</WeaterText>
      <WeaterText>{forecast.SKY}</WeaterText>
      <WeaterText>{forecast.T1H}°</WeaterText>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  background-color: white;
  flex-direction: column;
  gap: 5px;
  align-items: center;
`;

const WeaterText = styled.p``;

export default WeatherItemBox;
