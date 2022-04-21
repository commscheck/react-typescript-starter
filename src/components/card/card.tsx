import styled from 'styled-components';

const Card = styled.div`
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 16px;
  max-width: 432px;
`;

export default Card;
