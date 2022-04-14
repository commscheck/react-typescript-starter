import styled from 'styled-components';
import PermissionCard from '../permission-card/permission-card';

export interface PermissionsListProps {}

const Container = styled.div`
  width: 480px;
  margin: 16px;
`;

const PermissionsList = ({}: PermissionsListProps) => {
  return (
    <Container>
      <PermissionCard label="Single option" />
      <br />
      <PermissionCard
        label="Multiple options"
        permissions={[
          { label: 'Option one', checked: true },
          { label: 'Optione two' },
        ]}
      />
    </Container>
  );
};

export default PermissionsList;
