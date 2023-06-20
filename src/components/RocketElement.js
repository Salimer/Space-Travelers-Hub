import PropTypes from 'prop-types';
import styled from 'styled-components';

const RocketElement = ({ rocket }) => (
  <Li>
    <div className="img">
      <img src={rocket.flickr_images[0]} alt="rocket" />
    </div>
    <div className="details">
      <span>{rocket.rocket_name}</span>
      <span>{rocket.description}</span>
      <button className="reserve" type="button">Reserve Rocket</button>
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
padding: 1rem;

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

  .reserve {
    max-width: fit-content;
    padding: .5rem;
    background-color: blue;
    cursor: pointer;
    border-radius: .4rem;
    color: white;
    border: transparent;
  }
}
`;
