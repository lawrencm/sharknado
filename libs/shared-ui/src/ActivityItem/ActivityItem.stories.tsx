import type { Meta, StoryObj } from '@storybook/react';
import { ActivityItem } from './ActivityItem';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof ActivityItem> = {
  component: ActivityItem,
  title: 'ActivityItem',
};

export default meta;
type Story = StoryObj<typeof ActivityItem>;

export const TaggedShark = {
  args: {
    location: 'Bickley Point, Rottnest',
    details: '1 white shark sighting reported',
    type: 'taggedShark',
    time: '14:30',
    date: '10/15',
    species: 'White Shark',
  },
};

export const SharkSighted = {
  args: {
    location: 'ST89 Scarborough Beach Ben Sign, Perth Metro',
    details: '1 white shark sighting reported',
    type: 'sharkSighting',
    time: '14:30',
    date: '10/15',
    species: 'White Shark',
  },
};

export const WhaleCarcass: Story = {
  args: {
    location: 'BSN544 Naturaliste Ben Sign, East Of Cape Naturaliste',
    details: '1 whale carcass sighting reported',
    type: 'whale',
    time: '07:45',
    date: '10/16',
    additionalInfo:
      '250m offshore 8M entangled whale 250M offshore. Sharks in area',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to ActivityItem!/gi)).toBeTruthy();
  },
};
