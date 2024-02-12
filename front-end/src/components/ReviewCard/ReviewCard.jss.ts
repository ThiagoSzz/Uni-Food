/* eslint-disable @typescript-eslint/no-unused-vars */
import { createUseStyles } from 'react-jss';
import { ReviewCardStyleProps } from '../../interfaces/props/ReviewCardStyleProps';
import { ThemingParameters } from '@ui5/webcomponents-react-base';

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
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      display: 'none'
    }
  },
  badgesList: {
    marginTop: '10px',
    flexWrap: 'wrap',
    gap: '4px',
    maxHeight: '62px',
    overflow: 'auto',
    '&::-webkit-scrollbar': {
      display: 'none'
    }
  },
  tooltip: {
    display: 'flex',
    width: '40px',
    height: 'fit-content',
    position: 'relative',
    justifySelf: 'flex-end',
    alignSelf: 'center'
  },
  cardHeader: {
    width: '270px',
    padding: '15px',
    paddingBottom: '12px'
  },
  cardHeaderTextContainer: {
    padding: '8px',
    marginLeft: '6px'
  },
  cardHeaderSubtitle: {
    color: ThemingParameters.sapObjectHeader_Subtitle_TextColor,
    marginTop: '3px'
  },
  searchHighlight: {
    backgroundColor: ThemingParameters.sapAccentBackgroundColor6,
    borderRadius: '4px',
    color: ThemingParameters.sapTitleColor
  }
};

export const useStyles = createUseStyles<string, ReviewCardStyleProps>(styles, {
  name: 'ReviewCard'
});
