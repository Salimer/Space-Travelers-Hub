import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../redux/missions/missionsSlice';
import { selectMissions } from '../redux/store';
import MissionList from '../components/MissionList';

const Mission = () => {
  const { missionItems } = useSelector(selectMissions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  return (
    <div>
      <MissionList missions={missionItems} />
    </div>
  );
};

export default Mission;
