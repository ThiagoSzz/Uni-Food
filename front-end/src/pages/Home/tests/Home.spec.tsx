import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '../../../config/client';
import { Home } from '../Home';
import { ThemeProvider } from '@ui5/webcomponents-react';
import { expect } from '@jest/globals';

describe('Home page', () => {
  const setup = () => {
    return render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <ThemeProvider>
            <Home />
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
