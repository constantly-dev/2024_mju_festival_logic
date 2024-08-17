import styled from 'styled-components';

const Header = () => {
  return (
    <Wrapper>
      <Layout>
        <BackButton />
      </Layout>
      <Title>분실물 찾기</Title>
      <SubTitle>
        잃어버린 물건이 있으신가요? 다른 사람이 찾았을 수도 있어요! 여기서
        확인해보세요!
      </SubTitle>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid blue;
`;
const Layout = styled.div`
  display: flex;
  justify-content: space-between;
`;
const BackButton = styled.button``;
const Title = styled.p``;
const SubTitle = styled.p``;

export default Header;
