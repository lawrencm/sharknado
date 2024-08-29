import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import UserMenu from './UserMenu';
import React from 'react';

describe('UserMenu', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UserMenu />);
    expect(baseElement).toBeTruthy();
  });
});
