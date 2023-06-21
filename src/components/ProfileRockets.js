import { useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import { selectRockets } from '../redux/store';

const ProfileRockets = () => {
  const {
    rockets,
  } = useSelector(selectRockets);
  const filteredRockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <div>
      <h3>My rockets</h3>
      <ListGroup as="ul">
        {filteredRockets.map((rocket) => (
          <ListGroup.Item as="li" key={rocket.rocket_id}>{rocket.rocket_name}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default ProfileRockets;
