import {
  CreateMonitoringActivityDocument,
  CreateMonitoringActivityMutation,
  CreateMonitoringActivityMutationVariables,
  Enum_Monitoringactivity_Type,
} from '@sharknado/cms-api';
import { getClient } from '../../../CMSClient/client';
import styles from './page.module.css';

import data from './data.json';

export default async function SeedData() {
  const client = await getClient();

  for (const item of data) {
    await client.mutate<
      CreateMonitoringActivityMutation,
      CreateMonitoringActivityMutationVariables
    >({
      mutation: CreateMonitoringActivityDocument,
      variables: {
        location: item.location,
        details: item.details,
        type: item.type as Enum_Monitoringactivity_Type,
        species: item.species,

        datetime: new Date(item.datetime),
      },
    });
  }

  return (
    <div className={styles['container']}>
      <h1>Welcome to SeedData!</h1>
    </div>
  );
}
