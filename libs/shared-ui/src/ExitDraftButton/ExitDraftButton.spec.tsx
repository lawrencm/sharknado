import { render } from '@testing-library/react';

import ExitDraftButton from './ExitDraftButton';

describe('ExitDraftButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ExitDraftButton />);
    expect(baseElement).toBeTruthy();
  });
});
