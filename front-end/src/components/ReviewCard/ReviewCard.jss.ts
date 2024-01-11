/* eslint-disable @typescript-eslint/no-unused-vars */
import { createUseStyles } from 'react-jss';

// type JSSStyles = { [keys: string]: React.CSSProperties | JSSStyles };

interface ReviewCardStyleProps {
  isAvatarGreen: boolean;
}

const styles = {
  reviewCard: {
    width: '323px',
    marginTop: '2px',
    marginBottom: '4px'
  },
  reviewCardAvatar: {
    backgroundColor: ({ isAvatarGreen }: ReviewCardStyleProps) =>
      isAvatarGreen ? '#EBF5CB' : '#D1EFFF',
    borderColor: ({ isAvatarGreen }: ReviewCardStyleProps) =>
      isAvatarGreen ? '#EBF5CB' : '#D1EFFF',
    color: ({ isAvatarGreen }: ReviewCardStyleProps) => (isAvatarGreen ? '#256F3A' : '#0057D2')
  },
  reviewCardComments: {
    fontSize: '15px',
    marginTop: '10px',
    maxHeight: '100px',
    wordWrap: 'break-word',
    overflowWrap: 'break-word',
    whiteSpace: 'pre-wrap',
    overflowY: 'scroll'
  },
  badgesList: {
    marginTop: '10px',
    flexWrap: 'wrap',
    gap: '5px',
    height: '55px',
    overflow: 'auto',
    marginBottom: '20px'
  },
  badge: {
    padding: '5px'
  }
};

export const useStyles = createUseStyles<string, ReviewCardStyleProps>(styles, {
  name: 'ReviewCard'
});
