import React from 'react';
import { FlexBox } from '@ui5/webcomponents-react';
import { MessageStripContainer } from '../MessageStripContainer/MessageStripContainer';
import { useFeedbackMessage } from '../../hooks/useFeedbackMessage';

interface FeedbackMessageDisplayProps {
  className?: string;
  messageClassName?: string;
}

export const FeedbackMessageDisplay: React.FC<FeedbackMessageDisplayProps> = ({
  className,
  messageClassName
}) => {
  const { message, hideMessage } = useFeedbackMessage();

  if (!message) {
    return null;
  }

  return (
    <FlexBox className={className}>
      <MessageStripContainer message={message} onClose={hideMessage} className={messageClassName} />
    </FlexBox>
  );
};
