import styled from 'styled-components';

import CardCollection from '../card-collection/card-collection';
import ListCard from '../list-card/list-card';

export interface ResultsSectionProps {}

const Container = styled(CardCollection)`
  background: ${(props) => props.theme.colors.background.hero};
`;

const ResultsCard = styled(ListCard)`
  background: ${(props) => props.theme.colors.fill.hero};
`;

const ResultsSection = ({}: ResultsSectionProps) => {
  return (
    <Container>
      <ResultsCard
        heading="App Store Connect roles"
        children={[
          { label: 'Marketing' },
          { label: 'Access to Certificates, Identifiers & Profiles' },
        ]}
      />
    </Container>
  );
};

export default ResultsSection;
