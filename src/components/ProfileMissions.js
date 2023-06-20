import { useSelector } from 'react-redux';
import { selectMissions } from '../redux/store';

const ProfileMissions = () => {
  const {
    missionItems,
  } = useSelector(selectMissions);
  const filteredMissions = missionItems.filter((mission) => mission.reserved);

  return (
    <div>
      <h3>My missions</h3>
      <ul>
        {filteredMissions.map((mission) => (
          <li key={mission.mission_id}>
            {mission.mission_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileMissions;
