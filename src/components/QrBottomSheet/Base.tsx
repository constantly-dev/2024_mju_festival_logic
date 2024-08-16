import styled from 'styled-components';
import BottomSheet from './BottomSheet';

const Base = () => {
  return (
    <BaseDiv>
      <BottomSheet />
    </BaseDiv>
  );
};

const BaseDiv = styled.div`
  /* height: 100vh;
  width: 100vw; */
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid blue;
`;

export default Base;
