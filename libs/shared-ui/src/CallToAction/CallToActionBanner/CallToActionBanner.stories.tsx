import type { Meta, StoryObj } from '@storybook/react';
import { CallToActionBanner } from './CallToActionBanner';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { title } from 'process';

const meta: Meta<typeof CallToActionBanner> = {
  component: CallToActionBanner,
  title: 'CallToActionBanner',
};
export default meta;
type Story = StoryObj<typeof CallToActionBanner>;

export const Primary = {
  args: {
    title: 'Shark Mitigation strategy',
    subtitle:
      'The Western Australian Government has implemented one of the strongest, evidence based shark mitigation programs in the world, so that West Australian’s can continue to enjoy the beach and ocean with confidence.',
    imageUrl:
      'https://cdn.mos.cms.futurecdn.net/wtqqnkYDYi2ifsWZVW2MT4-1200-80.jpg',
    imageAlt: 'Beach and Ocean',
  },
};

export const Heading: Story = {
  args: {
    title: 'Shark Mitigation strategy',
    subtitle:
      'The Western Australian Government has implemented one of the strongest, evidence based shark mitigation programs in the world, so that West Australian’s can continue to enjoy the beach and ocean with confidence.',
    imageUrl:
      'https://cdn.mos.cms.futurecdn.net/wtqqnkYDYi2ifsWZVW2MT4-1200-80.jpg',
    imageAlt: 'Beach and Ocean',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getByText('Shark Mitigation strategy')
    ).toBeInTheDocument();
    await expect(
      canvas.getByText(
        'The Western Australian Government has implemented one of the strongest, evidence based shark mitigation programs in the world, so that West Australian’s can continue to enjoy the beach and ocean with confidence.'
      )
    ).toBeInTheDocument();
  },
};
