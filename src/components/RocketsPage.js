import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import fetchRockets from '../redux/rockets/thunks';
import RocketElement from './RocketElement';

const RocketsPage = () => {
  const dispatch = useDispatch();

  const { rockets, isLoading, error } = useSelector((store) => store.rockets);

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  if (error) {
    return (
      <div>
        Something went wrong:
        <br />
        &quot;
        {error}
        &quot;
      </div>
    );
  }

  return (
    <Section>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <>
          <ul>
            {rockets.map((rocket) => (
              <RocketElement key={rocket.id} rocket={rocket} />
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
