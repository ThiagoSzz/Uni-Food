import { useFeedbackMessage as useFeedbackMessageContext } from '../contexts/FeedbackMessageContext';

/**
 * Custom hook to manage feedback messages across the application.
 * This hook provides access to the global feedback message system.
 *
 * @returns Object containing message state and functions to show/hide messages
 */
export const useFeedbackMessage = () => {
  return useFeedbackMessageContext();
};
