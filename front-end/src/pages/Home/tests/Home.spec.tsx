import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '../../../config/client';
import { ThemeProvider } from '@ui5/webcomponents-react';
import { expect } from '@jest/globals';
import { Home } from '../Home';

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

  it('Should load the search bar with the filters and switches', () => {});

  it('Should load the list of reviews', () => {});

  it('Should show the amount of reviews', () => {});

  it('Should load the list of average reviews', () => {});

  it('Should show the amount of average reviews', () => {});
});
