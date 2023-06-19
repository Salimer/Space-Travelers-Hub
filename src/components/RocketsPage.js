import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import fetchRockets from '../redux/rockets/thunks';

const RocketsPage = () => {
  const dispatch = useDispatch();

  const { rockets, isLoading } = useSelector((store) => store.rockets);

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <Section>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <>
          <ul>
            {rockets.map((rocket) => (
              <li key={rocket.id}>{rocket.country}</li>
            ))}
          </ul>
        </>
      )}
    </Section>
  );
};

export default RocketsPage;

const Section = styled.section`

`;
