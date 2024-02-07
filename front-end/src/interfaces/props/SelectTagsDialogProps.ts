import { Tag } from '../Tags';

export interface SelectTagsDialogProps {
  isSelectTagsDialogOpen: boolean;
  setIsSelectTagsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedTags: Tag[];
  setSelectedTags: React.Dispatch<React.SetStateAction<Tag[]>>;
}
