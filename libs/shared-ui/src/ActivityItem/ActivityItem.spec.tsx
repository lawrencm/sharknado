import { render } from '@testing-library/react';

import ActivityItem from './ActivityItem';

describe('ActivityItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ActivityItem />);
    expect(baseElement).toBeTruthy();
  });
});
