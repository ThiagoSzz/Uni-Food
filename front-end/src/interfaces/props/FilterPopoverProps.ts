import { Dispatch, SetStateAction } from 'react';

export interface FilterPopoverProps {
  isPopoverOpen: boolean;
  setIsPopoverOpen: Dispatch<SetStateAction<boolean>>;
}
