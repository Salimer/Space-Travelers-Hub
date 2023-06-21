import styled from 'styled-components';
import ProfileMissions from '../components/ProfileMissions';
import ProfileRockets from '../components/ProfileRockets';

const MyProfile = () => (
  <Section>
    <ProfileMissions />
    <ProfileRockets />
  </Section>
);

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
