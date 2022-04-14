import { Fragment, useRef } from 'react';
import * as _ from 'lodash';

import styled from 'styled-components';

export interface Permission {
  label: string;
  checked?: boolean;
}

export type PermissionCardProps =
  | Permission
  | { label: string; permissions: Permission[] };

const Container = styled.div`
  background: ${(p) => p.theme.colors.fill};
  padding: 8px 16px;
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: ${(p) => p.theme.borderRadius};

  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 8px;
`;

const Label = styled.label<{ primary: boolean }>`
  font-weight: ${(p) => (p.primary ? 600 : 'inherit')};
  padding-left: ${(p) => (p.primary ? 0 : '16px')};
`;

const partiallyChecked = (props: PermissionCardProps): boolean => {
  if ('permissions' in props) {
    const total = props.permissions.length;
    const checked = props.permissions.filter((p) => p.checked).length;
    return checked > 0 && checked < total;
  } else {
    return false;
  }
};

const PermissionRow = (
  props: Permission & { primary: boolean; indetermindate?: boolean }
) => {
  const checkboxId = useRef(_.uniqueId('checkbox_'));

  return (
    <Fragment key={checkboxId.current}>
      <Label htmlFor={checkboxId.current} primary={props.primary}>
        {props.label}
      </Label>
      <input
        type="checkbox"
        name={checkboxId.current}
        id={checkboxId.current}
        checked={props.checked}
        ref={(input) => {
          if (input) {
            input.indeterminate = props.indetermindate || false;
          }
        }}
      />
    </Fragment>
  );
};

const PermissionCard = (props: PermissionCardProps) => {
  return (
    <Container>
      <PermissionRow
        primary
        label={props.label}
        checked={
          'permissions' in props
            ? props.permissions.every((p) => p.checked)
            : props.checked
        }
        indetermindate={partiallyChecked(props)}
      />
      {'permissions' in props &&
        props.permissions.map((p) => <PermissionRow {...p} primary={false} />)}
    </Container>
  );
};

export default PermissionCard;
