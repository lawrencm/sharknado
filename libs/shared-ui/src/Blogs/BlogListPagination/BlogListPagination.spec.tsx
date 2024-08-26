import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import BlogListPagination from './BlogListPagination';
import React from 'react';

describe('BlogListPagination', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BlogListPagination
        searchMeta={undefined}
        updateMeta={function (value: any): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
