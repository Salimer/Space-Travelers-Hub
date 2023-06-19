import PropTypes from 'prop-types';
import Table from './Table';

const MissionList = (props) => {
  const { missions } = props;

  return (
    <div>
      This is the mission list
      <Table>
        <thead>
          <tr>
            <td>mission_id</td>
            <td>mission_name</td>
            <td>description</td>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td>{mission.mission_id}</td>
              <td>{mission.mission_name}</td>
              <td>{mission.description}</td>
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
