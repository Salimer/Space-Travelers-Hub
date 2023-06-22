import { ListGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ProfileMissions = (props) => {
  const { missions } = props;

  return (
    <div>
      <h3>My missions</h3>
      <ListGroup as="ul">
        {missions.map((mission) => (
          <ListGroup.Item as="li" key={mission.mission_id}>{mission.mission_name}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

ProfileMissions.propTypes = {
  missions: PropTypes.arrayOf(Object).isRequired,
};

export default ProfileMissions;
