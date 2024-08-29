import '@testing-library/jest-dom'; // for extended matchers like toBeInTheDocument
import { render, screen } from '@testing-library/react';
import React from 'react';
import { ContentPageHero } from './ContentPageHero';

// Mock data for testing purposes
const mockProps = {
  title: 'Save the Sharks!',
  subtitle: 'Join our conservation efforts.',
  text: 'Your support helps protect shark populations around the world.',
  background_image: {
    data: {
      attributes: {
        url: '/images/shark-banner.jpg',
      },
    },
  },
  buttons: [
    { label: 'Donate Now', variant: 'primary' },
    { label: 'Learn More', variant: 'secondary' },
  ],
  navigation: <div>Mock Navigation</div>,
};

describe('ContentPageHero', () => {
  beforeEach(() => {
    process.env.NEXT_PUBLIC_IMAGE_BASE_URL = 'https://example.com';
  });

  it('renders the title, subtitle, and text', () => {
    render(<ContentPageHero {...mockProps} />);

    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
    expect(screen.getByText(mockProps.subtitle)).toBeInTheDocument();
    expect(screen.getByText(mockProps.text)).toBeInTheDocument();
  });

  it('displays the correct background image', () => {
    render(<ContentPageHero {...mockProps} />);

    const bgImageUrl = `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${mockProps.background_image.data.attributes.url}`;
    const backgroundElement = screen.getByText(mockProps.title).closest('div');

    expect(backgroundElement).toHaveStyle(
      `background-image: url(${bgImageUrl})`
    );
  });

  it('renders navigation component correctly', () => {
    render(<ContentPageHero {...mockProps} />);

    expect(screen.getByText('Mock Navigation')).toBeInTheDocument();
  });

  it('renders buttons correctly', () => {
    render(<ContentPageHero {...mockProps} />);

    mockProps.buttons.forEach((button) => {
      expect(screen.getByText(button.label)).toBeInTheDocument();
    });
  });

  it('renders additional static content', () => {
    render(<ContentPageHero {...mockProps} />);

    expect(
      screen.getByText('Saw a shark? Report sightings to the water police.')
    ).toBeInTheDocument();
    expect(screen.getByText('Call 9442 8600 now')).toBeInTheDocument();
  });
});
