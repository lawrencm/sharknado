import { render } from '@testing-library/react';

import AdminActivitiesList from './AdminActivitiesList';

describe('AdminActivitiesList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AdminActivitiesList />);
    expect(baseElement).toBeTruthy();
  });
});
