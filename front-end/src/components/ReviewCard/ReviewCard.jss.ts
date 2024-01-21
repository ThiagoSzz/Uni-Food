/* eslint-disable @typescript-eslint/no-unused-vars */
import { createUseStyles } from 'react-jss';
import { ReviewCardStyleProps } from '../../interfaces/props/ReviewCardStyleProps';

// type JSSStyles = { [keys: string]: React.CSSProperties | JSSStyles };

const styles = {
  reviewCard: {
    width: '323px',
    height: '335px',
    marginTop: '2px',
    marginBottom: '4px'
  },
  reviewCardStars: {
    transform: 'scale(0.9)',
    transformOrigin: 'left'
  },
  reviewCardAvatar: {
    backgroundColor: ({ backgroundColor }: ReviewCardStyleProps) => backgroundColor,
    borderColor: ({ backgroundColor }: ReviewCardStyleProps) => backgroundColor,
    color: ({ iconColor }: ReviewCardStyleProps) => iconColor
  },
  reviewCardComments: {
    fontSize: '15px',
    marginTop: '5px',
    height: '72px',
    wordWrap: 'break-word',
    overflowWrap: 'break-word',
    whiteSpace: 'pre-wrap',
    overflowY: 'scroll'
  },
  badgesList: {
    marginTop: '10px',
    flexWrap: 'wrap',
    gap: '4px',
    maxHeight: '62px',
    overflow: 'auto'
  },
  badge: {
    padding: '4px'
  }
};

export const useStyles = createUseStyles<string, ReviewCardStyleProps>(styles, {
  name: 'ReviewCard'
});
