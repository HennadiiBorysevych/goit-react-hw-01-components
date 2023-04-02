import user from 'userData/user.json';
import stats from 'userData/stats.json';
import { Profile } from 'components/profile/Profile.jsx';
import { Statistics } from 'components/statistics/Statistics.jsx';
export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
        title="Upload stats"
        id={stats.id}
        label={stats.label}
        percentage={stats.percentage}
      />
    </>
  );
};
