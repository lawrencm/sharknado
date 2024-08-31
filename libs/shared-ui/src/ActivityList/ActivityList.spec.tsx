import { render } from '@testing-library/react';

import ActivityList from './ActivityList';

describe('ActivityList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ActivityList />);
    expect(baseElement).toBeTruthy();
  });
});
