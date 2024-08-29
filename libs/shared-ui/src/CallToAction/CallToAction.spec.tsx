import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import CallToAction from './CallToAction';
import React from 'react';

describe('CallToAction', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CallToAction />);
    expect(baseElement).toBeTruthy();
  });
});
