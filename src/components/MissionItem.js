import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const MissionItem = (props) => {
  const {
    id, name, description, reserved, handleClick,
  } = props;

  return (
    <tr>
      <td style={{ fontWeight: 'bold' }}>{name}</td>
      <td>{description}</td>
      <td className="align-middle" style={{ textAlign: 'center' }}>
        {reserved ? <Badge bg="success">Active Member</Badge>
          : <Badge bg="secondary">NOT A MEMBER</Badge>}
      </td>
      <td className="align-middle" style={{ width: '11rem', textAlign: 'center' }}>
        <Button
          data-testid="mission-item-button"
          variant={reserved ? 'outline-danger' : 'outline-dark'}
          type="button"
          onClick={(e) => {
            handleClick(e, { id, reserved });
          }}
        >
          {reserved ? 'Leave mission' : 'Join mission'}
        </Button>
      </td>
    </tr>
  );
};

MissionItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default MissionItem;
