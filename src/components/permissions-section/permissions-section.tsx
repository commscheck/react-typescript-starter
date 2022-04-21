import styled from 'styled-components';

import CardCollection from '../card-collection/card-collection';
import ListCard from '../list-card/list-card';

export interface PermissionsSection {}

const Container = styled(CardCollection)`
  background: ${(props) => props.theme.colors.background.primary};
`;

const PermissionCard = styled(ListCard)`
  background: ${(props) => props.theme.colors.fill.primary};
`;

const PermissionsSection = ({}: PermissionsSection) => {
  return (
    <Container>
      <PermissionCard heading="Manage sandbox users" checkbox="unchecked" />
      <PermissionCard
        heading="Provisioning profiles"
        children={[
          {
            section: 'Development',
            items: [
              {
                label: 'Create development provisioning profiles',
                checkbox: 'checked',
              },
              {
                label: 'Delete development provisioning profiles',
                checkbox: 'unchecked',
              },
            ],
          },
          {
            section: 'Distribution',
            items: [
              {
                label: 'Create and delete distribution provisioning profiles',
                checkbox: 'unchecked',
              },
            ],
          },
        ]}
      />
    </Container>
  );
};

export default PermissionsSection;
