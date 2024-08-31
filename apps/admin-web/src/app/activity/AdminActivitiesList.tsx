'use client';
import { EyeClosedIcon, EyeOpenIcon } from '@radix-ui/react-icons';
import {
  PublicationState,
  useGetActivitiesSuspenseQuery,
  useUpdateMonitoringActivityMutation,
} from '@sharknado/cms-api';
import { ActivityItem, Button } from '@sharknado/shared-ui';
import {
  GetActivitiesDocument,
  MonitoringActivityDocument,
  MonitoringActivityEntity,
  MonitoringActivityFragment,
} from '../../../../../libs/cms-api/src/generated/types';
import styles from './AdminActivitiesList.module.css';
import { GetActivitiesQuery } from '../../../../../libs/cms-api/src/generated/types';

export function AdminActivitiesList() {
  const { data } = useGetActivitiesSuspenseQuery({
    variables: {
      pageSize: 100,
      publicationState: PublicationState.Preview,
    },
  });

  const [update, res] = useUpdateMonitoringActivityMutation();

  // do soemthing with res when we get it

  const ActivityButtons = (isDraft: boolean, id?: string | null) => {
    if (!id) return <p>d</p>;

    return (
      <div className="flex space-x-1">
        <Button variant="outline">Edit</Button>
        {isDraft && (
          <Button variant="outline">
            <EyeClosedIcon
              onClick={() =>
                update({
                  variables: {
                    id: id,
                    data: {
                      publishedAt: new Date().toISOString(),
                    },
                  },
                })
              }
            />
          </Button>
        )}
        {!isDraft && (
          <Button variant="outline">
            <EyeOpenIcon
              onClick={() =>
                update({
                  variables: {
                    id: id,
                    data: {
                      publishedAt: null,
                    },
                  },
                })
              }
            />
          </Button>
        )}
      </div>
    );
  };

  if (!data?.monitoringActivities?.data) return null;

  return (
    <div className={styles['container']}>
      {data.monitoringActivities.data.map((activity) => {
        const { id, attributes } = activity;
        return (
          <ActivityItem
            key={id} // Use id as the key instead of index
            attributes={attributes}
            className="mb-4 mr-1"
            showStatus={true}
            actions={ActivityButtons(attributes?.publishedAt === null, id)}
          />
        );
      })}
    </div>
  );
}

export default AdminActivitiesList;
