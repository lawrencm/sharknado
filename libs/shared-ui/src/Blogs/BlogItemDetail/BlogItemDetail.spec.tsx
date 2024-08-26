import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { BlogItemDetail } from './BlogItemDetail';

describe('BlogItemDetail', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BlogItemDetail />);
    expect(baseElement).toBeTruthy();
  });
});
