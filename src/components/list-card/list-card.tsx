import { ReactNode, useRef } from 'react';
import * as _ from 'lodash';

import Card from '../card/card';

export type CheckboxState = 'none' | 'unchecked' | 'checked';

export interface ListItemProps {
  label: ReactNode;
  checkbox?: CheckboxState;
}

export interface ListSectionProps {
  section: string;
  items: ListItemProps[];
}

export interface ListCardProps {
  heading: ReactNode;
  checkbox?: CheckboxState;
  style?: 'primary' | 'hero';
  collapsable?: false | 'start-collapsed' | 'start-expanded';
  children?: Array<ListItemProps | ListSectionProps>;
}

const isSectionProps = (i: any): i is ListSectionProps => {
  return typeof i === 'object' && 'section' in i && 'items' in i;
};

const ListItem = ({ label, checkbox }: ListItemProps) => {
  const checkboxId = useRef(_.uniqueId('checkbox_'));

  return (
    <li>
      {checkbox && checkbox !== 'none' ? (
        <label htmlFor={checkboxId.current}>
          {label}
          <input type="checkbox" id={checkboxId.current} />
        </label>
      ) : (
        label
      )}
    </li>
  );
};

const ListSection = (props: ListSectionProps) => {
  return (
    <>
      <h5>{props.section}</h5>
      <ul>
        {props.items.map((item, index) => (
          <ListItem {...item} key={index} />
        ))}
      </ul>
    </>
  );
};

const ListCard = ({
  heading,
  checkbox,
  style = 'primary',
  collapsable = false,
  children,
}: ListCardProps) => {
  const checkboxId = useRef(_.uniqueId('checkbox_'));

  return (
    <Card>
      {checkbox ? (
        <label htmlFor={checkboxId.current}>
          <h4>{heading}</h4>
          <input type="checkbox" id={checkboxId.current} />
        </label>
      ) : (
        <h4>{heading}</h4>
      )}
      {children && (
        <ul>
          {children.map((c, i) => {
            if (isSectionProps(c)) {
              return (
                <li key={i}>
                  <ListSection {...c} />
                </li>
              );
            }
            return ListItem(c);
          })}
        </ul>
      )}
    </Card>
  );
};

export default ListCard;
