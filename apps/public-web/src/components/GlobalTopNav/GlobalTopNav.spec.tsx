import { render } from '@testing-library/react';

import GlobalTopNav from './GlobalTopNav';

describe('GlobalTopNav', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GlobalTopNav />);
    expect(baseElement).toBeTruthy();
  });
});
