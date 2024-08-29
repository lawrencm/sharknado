import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { CallToActionBanner } from './CallToActionBanner';

describe('CallToActionBanner', () => {
  const title = 'Join Us Now!';
  const subtitle = 'Sign up today and enjoy exclusive benefits.';
  const imageUrl = 'https://example.com/banner.jpg';
  const imageAlt = 'A beautiful banner image';

  it('renders the title and subtitle', () => {
    render(
      <CallToActionBanner
        title={title}
        subtitle={subtitle}
        imageUrl={imageUrl}
        imageAlt={imageAlt}
      />
    );

    const titleElement = screen.getByText(title);
    const subtitleElement = screen.getByText(subtitle);

    expect(titleElement).toBeInTheDocument();
    expect(subtitleElement).toBeInTheDocument();
  });

  it('displays the correct image with alt text', () => {
    render(
      <CallToActionBanner
        title={title}
        subtitle={subtitle}
        imageUrl={imageUrl}
        imageAlt={imageAlt}
      />
    );

    const imageElement = screen.getByAltText(imageAlt);

    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', imageUrl);
  });

  it('applies additional className if provided', () => {
    const customClass = 'custom-class';
    render(
      <CallToActionBanner
        title={title}
        subtitle={subtitle}
        imageUrl={imageUrl}
        imageAlt={imageAlt}
        className={customClass}
      />
    );

    //get the first div

    const containerElement = screen.getByTestId('ctaWrapper');

    // const containerElement = screen.getByText(title).closest('div');
    //    const containerElement = screen.getByText(title).closest('div.container');

    expect(containerElement).toHaveClass(customClass);
  });
});
