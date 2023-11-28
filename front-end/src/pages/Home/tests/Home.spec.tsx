import { render } from '@testing-library/react';
import { Home } from '../Home';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '../../../config/client';

describe('Home page', () => {
  const setup = () => {
    return render(
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    );
  };

  it('Should match the snapshot', () => {
    const view = setup();

    expect(view.container).toMatchSnapshot();
  });
});
