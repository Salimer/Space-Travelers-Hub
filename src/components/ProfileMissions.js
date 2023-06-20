import { useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import { selectMissions } from '../redux/store';

const ProfileMissions = () => {
  const {
    missionItems,
  } = useSelector(selectMissions);
  const filteredMissions = missionItems.filter((mission) => mission.reserved);

  return (
    <div>
      <h3>My missions</h3>
      <ListGroup as="ul">
        {filteredMissions.map((mission) => (
          <ListGroup.Item as="li" key={mission.mission_id}>{mission.mission_name}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default ProfileMissions;
