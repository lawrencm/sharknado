import { render } from '@testing-library/react';

import SearchResultsToolbar from './SearchResultsToolbar';
import React from 'react';

describe('SearchResultsToolbar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <SearchResultsToolbar
        isGridView={false}
        searchMeta={undefined}
        updateMeta={function (value: any): void {
          throw new Error('Function not implemented.');
        }}
        updateView={function (value: React.SetStateAction<boolean>): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
