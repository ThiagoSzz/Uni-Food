/* eslint-disable @typescript-eslint/no-unused-vars */
import { ThemingParameters } from '@ui5/webcomponents-react-base';
import { createUseStyles } from 'react-jss';

type JSSStyles = { [keys: string]: React.CSSProperties | JSSStyles };

const styles: JSSStyles = {
  averageCard: {
    width: '323px',
    height: '138px',
    marginTop: '2px',
    marginBottom: '4px'
  },
  cardIcon: {
    transform: 'scale(2)',
    marginLeft: '10px',
    marginTop: '18px'
  },
  iconBadge: {
    position: 'relative',
    bottom: '14px',
    right: '8px',
    width: '25px',
    height: '20px',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '12px',
    marginTop: '15px'
  },
  badgeIcon: {
    fill: 'white',
    transform: 'scale(0.8)'
  },
  ratingContainer: {
    alignItems: 'flex-end',
    marginLeft: '17px',
    marginTop: '-5px',
    transform: 'scale(1.06)',
    transformOrigin: 'left'
  },
  rating: {
    fill: '#D27700'
  },
  ratingLabelTitle: {
    color: '#D27700',
    fontSize: '16px',
    fontWeight: 'bold',
    lineHeight: '15px',
    marginLeft: '7px',
    marginRight: '5px'
  },
  ratingLabelSubtitle: {
    color: '#D27700',
    fontSize: '13px',
    fontStyle: 'italic'
  },
  badgesContainer: {
    marginTop: '12px',
    flexWrap: 'wrap',
    gap: '4px',
    maxHeight: '100px',
    overflow: 'auto',
    marginLeft: '17px',
    marginBottom: '17px'
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

export const useStyles = createUseStyles(styles, {
  name: 'AverageReviewsCard'
});
