import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { UseProfilePanel } from './UseProfilePanel';
import React from 'react';

describe('UseProfilePanel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UseProfilePanel />);
    expect(baseElement).toBeTruthy();
  });
});
