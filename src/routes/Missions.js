import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../redux/missions/missionsSlice';
import { selectMissions } from '../redux/store';
import MissionList from '../components/MissionList';
import { GET_MISSIONS } from '../redux/api';

const Mission = () => {
  const {
    missionItems, loading, error, errMsg,
  } = useSelector(selectMissions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (missionItems.length > 0) return;
    dispatch(getMissions({ url: GET_MISSIONS }));
  }, [dispatch, missionItems.length]);

  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>
          Oops! an error occurred. Please try again.
          {errMsg}
        </p>
      </div>
    );
  }

  return (
    <div>
      <MissionList missions={missionItems} />
    </div>
  );
};

export default Mission;
