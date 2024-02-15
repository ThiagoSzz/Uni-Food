import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '../../../config/client';
import { ThemeProvider } from '@ui5/webcomponents-react';
import { expect } from '@jest/globals';
import { CreateReview } from '../CreateReview';

describe('Create Review page', () => {
  const setup = () => {
    return render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <ThemeProvider>
            <CreateReview />
          </ThemeProvider>
        </MemoryRouter>
      </QueryClientProvider>
    );
  };

  it('Should match the snapshot', () => {
    const view = setup();
    expect(view.container).toMatchSnapshot();
  });
});
