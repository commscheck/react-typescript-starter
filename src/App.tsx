import Layout from './components/layout/layout';
import PermissionsList from './components/permissions-list/permissions-list';

import theme from './styles/theme';
import './styles/globals.css';
import { ThemeProvider } from 'styled-components';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <PermissionsList />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
