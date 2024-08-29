import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import React from 'react';
import { BlogItemDetail } from './BlogItemDetail';

describe('BlogItemDetail', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BlogItemDetail />);
    expect(baseElement).toBeTruthy();
  });
});
