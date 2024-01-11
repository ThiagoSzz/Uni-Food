import {
  List,
  PopoverPlacementType,
  ResponsivePopover,
  StandardListItem
} from '@ui5/webcomponents-react';
import { Dispatch, SetStateAction } from 'react';

interface FilterPopoverProps {
  isPopoverOpen: boolean;
  setIsPopoverOpen: Dispatch<SetStateAction<boolean>>;
}

export const FilterPopover = (props: FilterPopoverProps) => {
  const { isPopoverOpen, setIsPopoverOpen } = props;

  return (
    <ResponsivePopover
      opener={'openPopoverBtn'}
      open={isPopoverOpen}
      onAfterClose={() => setIsPopoverOpen(false)}
      placementType={PopoverPlacementType.Bottom}
      headerText="Filtrar por"
    >
      <List>
        <StandardListItem icon="navigation-right-arrow" iconEnd>
          Universidade
        </StandardListItem>
        <StandardListItem icon="navigation-right-arrow" iconEnd>
          Código do RU
        </StandardListItem>
        <StandardListItem icon="navigation-right-arrow" iconEnd>
          Curso
        </StandardListItem>
        <StandardListItem icon="navigation-right-arrow" iconEnd>
          Preferência alimentar &nbsp;&nbsp;&nbsp;
        </StandardListItem>
        <StandardListItem icon="navigation-right-arrow" iconEnd>
          Turno da refeição
        </StandardListItem>
      </List>
    </ResponsivePopover>
  );
};
