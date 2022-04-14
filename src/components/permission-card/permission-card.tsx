import styled from 'styled-components';

export interface Permission {
  label: string;
  checked?: boolean;
}

export type PermissionCardProps =
  | Permission
  | { label: string; permissions: Permission[] };

const Container = styled.div``;

const PermissionCard = (props: PermissionCardProps) => {
  return <Container>{props.label}</Container>;
};

export default PermissionCard;
