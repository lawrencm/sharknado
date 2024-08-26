import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import '@testing-library/jest-dom';

import { ContentPageHero } from './ContentPageHero';
import React from 'react';

jest.mock('../button', () => ({
  Button: ({ children }: { children: React.ReactNode }) => (
    <button>{children}</button>
  ),
}));

describe('ContentPageHero Component', () => {
  const mockData = {
    title: 'Test Title',
    subtitle: 'Test Subtitle',
    background_image: {
      data: {
        attributes: {
          url: 'test-image.jpg',
        },
      },
    },
    buttons: [
      { variant: 'primary', label: 'Button 1' },
      { variant: 'secondary', label: 'Button 2' },
    ],
    text: 'Some descriptive text.',
  };

  beforeEach(() => {
    process.env.NEXT_PUBLIC_IMAGE_BASE_URL = 'http://example.com/';
  });

  test('renders without crashing', () => {
    render(<ContentPageHero {...mockData} />);
  });

  test('displays correct title and subtitle', () => {
    render(<ContentPageHero {...mockData} />);

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
  });

  test('applies correct background image', () => {
    render(<ContentPageHero {...mockData} />);
    const divElement = screen.getByRole('banner'); // custom role for the hero section

    expect(divElement).toHaveStyle(
      `backgroundImage: url(http://example.com/test-image.jpg)`
    );
  });

  test('renders provided text', () => {
    render(<ContentPageHero {...mockData} />);

    expect(screen.getByText('Some descriptive text.')).toBeInTheDocument();
  });

  test('renders buttons with correct labels', () => {
    render(<ContentPageHero {...mockData} />);

    expect(screen.getByText('Button 1')).toBeInTheDocument();
    expect(screen.getByText('Button 2')).toBeInTheDocument();
  });
});
