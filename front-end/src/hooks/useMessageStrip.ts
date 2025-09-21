import { useState, useCallback, useEffect } from 'react';
import { MessageStripDesign } from '@ui5/webcomponents-react';

export interface Message {
  id: string;
  text: string;
  design: MessageStripDesign;
  duration?: number; // Auto-hide duration in milliseconds (default: 6000)
}

interface UseMessageStripReturn {
  message: Message | null;
  showMessage: (text: string, design: MessageStripDesign, duration?: number) => void;
  showSuccessMessage: (text: string, duration?: number) => void;
  showErrorMessage: (text: string, duration?: number) => void;
  showInfoMessage: (text: string, duration?: number) => void;
  showWarningMessage: (text: string, duration?: number) => void;
  hideMessage: () => void;
  clearMessage: () => void;
}

export const useMessageStrip = (defaultDuration: number = 6000): UseMessageStripReturn => {
  const [message, setMessage] = useState<Message | null>(null);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const clearCurrentTimeout = useCallback(() => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
  }, [timeoutId]);

  const hideMessage = useCallback(() => {
    setMessage(null);
    clearCurrentTimeout();
  }, [clearCurrentTimeout]);

  const showMessage = useCallback(
    (text: string, design: MessageStripDesign, duration?: number) => {
      clearCurrentTimeout();

      const id = `message-${Date.now()}-${Math.random()}`;

      const newMessage: Message = {
        id,
        text,
        design,
        duration: duration || defaultDuration
      };

      setMessage(newMessage);

      const effectiveDuration = duration ?? defaultDuration;
      if (effectiveDuration > 0) {
        const newTimeoutId = setTimeout(() => {
          setMessage(null);
          setTimeoutId(null);
        }, effectiveDuration);
        setTimeoutId(newTimeoutId);
      }
    },
    [defaultDuration, clearCurrentTimeout]
  );

  const showSuccessMessage = useCallback(
    (text: string, duration?: number) => {
      showMessage(text, MessageStripDesign.Positive, duration);
    },
    [showMessage]
  );

  const showErrorMessage = useCallback(
    (text: string, duration?: number) => {
      showMessage(text, MessageStripDesign.Negative, duration);
    },
    [showMessage]
  );

  const showInfoMessage = useCallback(
    (text: string, duration?: number) => {
      showMessage(text, MessageStripDesign.Information, duration);
    },
    [showMessage]
  );

  const showWarningMessage = useCallback(
    (text: string, duration?: number) => {
      showMessage(text, MessageStripDesign.Warning, duration);
    },
    [showMessage]
  );

  const clearMessage = useCallback(() => {
    hideMessage();
  }, [hideMessage]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  return {
    message,
    showMessage,
    showSuccessMessage,
    showErrorMessage,
    showInfoMessage,
    showWarningMessage,
    hideMessage,
    clearMessage
  };
};
