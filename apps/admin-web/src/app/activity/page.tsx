import { ApolloWrapper } from '../../CMSClient/ApolloWrapper';
import AdminActivitiesList from './AdminActivitiesList';
import styles from './page.module.css';

export default function Activity() {
  return (
    <div className={styles['container']}>
      <div className=" w-full mx-auto p-8">
        <h1 className="text-2xl font-bold">Activities</h1>
      </div>
      <div className=" flex w-full mx-auto bg-white shadow-md p-8 rounded-lg">
        <div className=" w-full">
          <h2 className="text-lg font-bold py-4">Latest Activities</h2>
          <ApolloWrapper>
            <AdminActivitiesList />
          </ApolloWrapper>
        </div>
      </div>
    </div>
  );
}
