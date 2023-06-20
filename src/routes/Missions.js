import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../redux/missions/missionsSlice';
import { selectMissions } from '../redux/store';
import MissionList from '../components/MissionList';

const Mission = () => {
  const {
    missionItems, loading, error, errMsg,
  } = useSelector(selectMissions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (missionItems.length > 0) return;
    dispatch(getMissions());
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
          Oops! an error occurred:
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
