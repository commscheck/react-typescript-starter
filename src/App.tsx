import styled, { ThemeProvider } from 'styled-components';

import theme from './styles/theme';
import PermissionsSection from './components/permissions-section/permissions-section';
import ResultsSection from './components/results-section/results-section';

import './styles/globals.css';

const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: auto 480px;
  place-items: stretch / center;
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <PermissionsSection />
        <ResultsSection />
      </Container>
    </ThemeProvider>
  );
};

export default App;
