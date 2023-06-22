import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import { useDispatch } from 'react-redux';
import MissionItem from './MissionItem';
import { joinMission, leaveMission } from '../redux/missions/missionsSlice';

const MissionList = (props) => {
  const dispatch = useDispatch();
  const { missions } = props;

  const handleClick = (e, { id, reserved }) => {
    e.preventDefault();
    if (reserved) {
      dispatch(leaveMission({ id }));
    } else {
      dispatch(joinMission({ id }));
    }
  };

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
              handleClick={handleClick}
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
