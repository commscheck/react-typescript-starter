import { ReactNode } from 'react';
import styled from 'styled-components';

export interface LayoutProps {
  children?: ReactNode;
}

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  background: ${(props) => props.theme.colors.background};
`;

const Layout = ({ children }: LayoutProps) => {
  return <Container>{children}</Container>;
};

export default Layout;
