import styled from 'styled-components';

const CardCollection = styled.div`
  padding: 24px;
  height: 100%;
  columns: auto 480px;
  column-gap: 24px;

  & > * {
    margin: 0 auto 24px;
    break-inside: avoid-column;
  }
`;

export default CardCollection;
