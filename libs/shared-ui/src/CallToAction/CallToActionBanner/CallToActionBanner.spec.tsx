import { render } from '@testing-library/react';

import CallToActionBanner from './CallToActionBanner';

describe('CallToActionBanner', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CallToActionBanner />);
    expect(baseElement).toBeTruthy();
  });
});
