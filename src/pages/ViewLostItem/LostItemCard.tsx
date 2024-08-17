import styled from 'styled-components';

const LostItemCard = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  return (
    <Wrapper>
      {title}
      {content}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  border: 1px solid blue;
`;
export default LostItemCard;
