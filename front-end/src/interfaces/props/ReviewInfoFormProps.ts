export interface Tag {
  name: string;
  type: 'positive' | 'negative' | 'neutral';
}

export interface ReviewInfoFormProps {
  setIsSelectTagsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedTags: Tag[];
  setSelectedTags: React.Dispatch<React.SetStateAction<Tag[]>>;
}
