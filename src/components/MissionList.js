import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Table from './Table';
import { joinMission, leaveMission } from '../redux/missions/missionsSlice';

const MissionList = (props) => {
  const { missions } = props;
  const dispatch = useDispatch();

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
      This is the mission list
      <Table>
        <thead>
          <tr>
            <td>mission_name</td>
            <td>description</td>
            <td>status</td>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td>{mission.mission_name}</td>
              <td>{mission.description}</td>
              <td>{mission.reserved ? 'Active member' : 'not a member'}</td>
              <td>
                <button
                  type="button"
                  onClick={(e) => {
                    handleClick(e, { id: mission.mission_id, reserved: mission.reserved });
                  }}
                >
                  {mission.reserved ? 'Leave mission' : 'Join mission'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

MissionList.propTypes = {
  missions: PropTypes.arrayOf.isRequired,
};

export default MissionList;
