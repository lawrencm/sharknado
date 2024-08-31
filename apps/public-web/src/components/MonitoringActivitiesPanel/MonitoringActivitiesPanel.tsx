'use client';
import {
  useGetActivitiesQuery,
  useGetActivitiesSuspenseQuery,
} from '@sharknado/cms-api';
import { ActivityList, Map } from '@sharknado/shared-ui';

interface MonitoringActivitiesPanelProps {
  Title: string;
  batchSize: number;
}

export function MonitoringActivitiesPanel(
  props: MonitoringActivitiesPanelProps
) {
  const { data, loading } = useGetActivitiesQuery({
    variables: {
      pageSize: props.batchSize,
    },
    pollInterval: 60000,
  });

  return (
    <div className={`container flex w-full mx-auto`}>
      <div className="w-1/2 mr-4">
        <h2 className="text-lg font-bold py-4">{props.Title}</h2>
        {loading && <p>Loading...</p>}
        {data && <ActivityList data={data} />}
      </div>
      <div className="w-1/2 rounded-xl overflow-hidden">
        <Map />
      </div>
    </div>
  );
}

export default MonitoringActivitiesPanel;
