import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../redux/missions/missionsSlice';
import { selectMissions } from '../redux/store';
import Code from '../components/Code';

const Mission = () => {
  const { missionItems } = useSelector(selectMissions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  return (
    <div>
      this is mission page
      <Code>{JSON.stringify(missionItems, null, 2)}</Code>
    </div>
  );
};

export default Mission;
