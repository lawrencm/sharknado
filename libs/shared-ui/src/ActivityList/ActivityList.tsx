// components/ActivityList.tsx
import React from 'react';
import { ActivityItem, ActivityItemProps } from '../ActivityItem/ActivityItem';
import { GetActivitiesQuery } from '@sharknado/cms-api';

interface ActivityListProps {
  data: GetActivitiesQuery;
}

const ActivityList: React.FC<ActivityListProps> = ({ data }) => {
  return (
    <div className={`bg-white  overflow-y-scroll h-[400px]`}>
      {data.monitoringActivities?.data.map((activity, idx) => (
        <ActivityItem
          key={idx}
          attributes={activity.attributes}
          className="mb-4 mr-1"
        />
      ))}
    </div>
  );
};

export { ActivityList };
