import React, { createContext, useContext, ReactNode } from 'react';
import { useMessageStrip, Message } from '../hooks/useMessageStrip';

interface FeedbackMessageContextType {
  message: Message | null;
  showSuccessMessage: (text: string, duration?: number) => void;
  showErrorMessage: (text: string, duration?: number) => void;
  showInfoMessage: (text: string, duration?: number) => void;
  showWarningMessage: (text: string, duration?: number) => void;
  hideMessage: () => void;
}

const FeedbackMessageContext = createContext<FeedbackMessageContextType | undefined>(undefined);

interface FeedbackMessageProviderProps {
  children: ReactNode;
}

export const FeedbackMessageProvider: React.FC<FeedbackMessageProviderProps> = ({ children }) => {
  const {
    message,
    showSuccessMessage,
    showErrorMessage,
    showInfoMessage,
    showWarningMessage,
    hideMessage
  } = useMessageStrip(6000);

  const value: FeedbackMessageContextType = {
    message,
    showSuccessMessage,
    showErrorMessage,
    showInfoMessage,
    showWarningMessage,
    hideMessage
  };

  return (
    <FeedbackMessageContext.Provider value={value}>{children}</FeedbackMessageContext.Provider>
  );
};

export const useFeedbackMessage = (): FeedbackMessageContextType => {
  const context = useContext(FeedbackMessageContext);
  if (context === undefined) {
    throw new Error('useFeedbackMessage must be used within a FeedbackMessageProvider');
  }
  return context;
};
