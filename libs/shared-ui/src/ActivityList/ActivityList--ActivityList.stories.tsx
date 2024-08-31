import type { Meta, StoryObj } from '@storybook/react';
import { ActivityList } from './ActivityList';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { ActivityItemProps } from '../ActivityItem/ActivityItem';

const meta: Meta<typeof ActivityList> = {
  component: ActivityList,
  title: 'ActivityList',
};

export default meta;

const activities: ActivityItemProps[] = [
  {
    location: 'Bickley Point, Rottnest',
    details: '1 white shark detected 1 time',
    type: 'taggedShark',
    time: '11:36hrs',
    date: '9/08',
    additionalInfo:
      'Tagged white shark detected at Bickley Point, Rottnest receiver.',
  },
  {
    location: 'Lefthanders',
    details: '1 white shark detected 1 time',
    type: 'taggedShark',
    time: '9:30hrs',
    date: '7/08',
    additionalInfo: 'Tagged white shark detected at Lefthanders receiver.',
  },
  {
    location: 'ST89 Scarborough Beach BEN Sign, Perth Metro',
    details: '1 white shark sighting reported',
    type: 'sharkSighting',
    time: '10:26hrs',
    date: '9/08',
    additionalInfo:
      'Public report: 6.0m white shark sighted 4km offshore. Reported at 11:59hrs.',
  },
  {
    location: 'BSN544 Naturaliste BEN Sign, East of Cape Naturaliste',
    details: '1 whale carcass sighting reported',
    type: 'whale',
    time: '13:45hrs',
    date: '8/08',
    additionalInfo:
      'Whale carcass sighted floating near East of Cape Naturaliste.',
  },
];

type Story = StoryObj<typeof ActivityList>;

export const Primary: Story = {
  args: { data: [...activities, ...activities, ...activities] },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to ActivityList!/gi)).toBeTruthy();
  },
};
