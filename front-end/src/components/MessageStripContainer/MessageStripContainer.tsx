import React from 'react';
import { MessageStrip, Text } from '@ui5/webcomponents-react';
import { Message } from '../../hooks/useMessageStrip';

interface MessageStripContainerProps {
  message: Message | null;
  onClose: () => void;
  className?: string;
  style?: React.CSSProperties;
}

export const MessageStripContainer: React.FC<MessageStripContainerProps> = ({
  message,
  onClose,
  className,
  style
}) => {
  if (!message) {
    return null;
  }

  return (
    <MessageStrip className={className} onClose={onClose} design={message.design} style={style}>
      <Text style={{ fontSize: '15px' }}>{message.text}</Text>
    </MessageStrip>
  );
};
