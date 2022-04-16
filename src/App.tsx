import styled, { ThemeProvider } from 'styled-components';

import theme from './styles/theme';
import List from './components/list/list';
import ListItem from './components/list-item/list-item';
import PermissionsList from './components/permissions-list/permissions-list';

import './styles/globals.css';

const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: auto 480px;
  place-items: stretch / center;
`;

const Results = styled(List)`
  background: ${(props) => props.theme.colors.background.hero};
`;

const ResultsItem = styled(ListItem)`
  background: ${(props) => props.theme.colors.fill.hero};
  color: ${(props) => props.theme.colors.text.heroPrimary};
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <PermissionsList />
        <Results>
          {[...Array(5).keys()].map((i) => (
            <ResultsItem key={i}>{i}</ResultsItem>
          ))}
        </Results>
      </Container>
    </ThemeProvider>
  );
};

export default App;
