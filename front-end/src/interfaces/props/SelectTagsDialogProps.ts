import { Tag } from './ReviewInfoFormProps';

export interface SelectTagsDialogProps {
  isSelectTagsDialogOpen: boolean;
  setIsSelectTagsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedTags: Tag[];
  setSelectedTags: React.Dispatch<React.SetStateAction<Tag[]>>;
}
