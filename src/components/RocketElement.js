import PropTypes from 'prop-types';
import styled from 'styled-components';

const RocketElement = ({ rocket }) => (
  <Li>
    <div className="img">
      <img src={rocket.flickr_images[0]} alt="rocket" />
    </div>
    <div className="details">
      <span>{rocket.rocket_id}</span>
      <span>{rocket.rocket_name}</span>
      <span>{rocket.rocket_type}</span>
    </div>
  </Li>
);

export default RocketElement;

RocketElement.propTypes = {
  rocket: PropTypes.shape({
    country: PropTypes.string.isRequired,
    rocket_name: PropTypes.string.isRequired,
    rocket_type: PropTypes.string.isRequired,
    flickr_images: PropTypes.arrayOf(PropTypes.string).isRequired,
    rocket_id: PropTypes.string.isRequired,
  }).isRequired,
};

const Li = styled.li`
display: flex;
border: 3px solid black;
margin: 1rem;
border-radius: 1rem;

.img {
  display: flex;
  align-items: center;

  img {
    width: 10rem;
    padding-left: 1rem;
  }
}

.details {
  display: flex;
  gap: 1rem;
  flex-direction: column;
  margin-left: 2rem;
  justify-content: center;
}
`;
