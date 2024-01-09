import { FlexBox, Title, TitleLevel } from '@ui5/webcomponents-react';
import { useStyles } from './ShellBar.jss';

interface ShellBarProps {
  image: string;
  text: string;
  children: any;
}

export const ShellBar = (props: ShellBarProps) => {
  const { image, text, children } = props;
  const classes = useStyles();

  return (
    <FlexBox className={classes.shellbar}>
      <FlexBox className={classes.logoContainer}>
        <img src={image} alt="Logo" className={classes.logoImage} />
        <Title level={TitleLevel.H5}>{text}</Title>
      </FlexBox>
      <FlexBox className={classes.itemsContainer}>{children}</FlexBox>
    </FlexBox>
  );
};
