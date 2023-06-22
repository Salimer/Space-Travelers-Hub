import styled from 'styled-components';
import { useSelector } from 'react-redux';
import ProfileMissions from '../components/ProfileMissions';
import ProfileRockets from '../components/ProfileRockets';
import { selectMissions } from '../redux/store';
import filterReserved from '../utils/missionUtils';

const MyProfile = () => {
  const {
    missionItems,
  } = useSelector(selectMissions);
  const filteredMissions = filterReserved(missionItems);

  return (
    <Section>
      <ProfileMissions missions={filteredMissions} />
      <ProfileRockets />
    </Section>
  );
};

export default MyProfile;

const Section = styled.section`
display: flex;
flex-direction: column;

@media (min-width: 768px) {
  flex-direction: row;
  justify-content: space-around;

  div {
    width: 40%;
  }
}
`;
