import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { UseProfilePanel } from './UseProfilePanel';
import React from 'react';

describe('UseProfilePanel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UseProfilePanel />);
    expect(baseElement).toBeTruthy();
  });
});
