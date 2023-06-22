import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import MissionItem from './MissionItem';

const MissionList = (props) => {
  const { missions } = props;

  return (
    <div>
      <Table striped bordered style={{ fontSize: '0.9rem' }}>
        <thead style={{ fontSize: '1rem' }}>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>{'   '}</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <MissionItem
              key={mission.mission_id}
              id={mission.mission_id}
              name={mission.mission_name}
              description={mission.description}
              reserved={mission.reserved}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

MissionList.propTypes = {
  missions: PropTypes.arrayOf(Object).isRequired,
};

export default MissionList;
