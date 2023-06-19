import PropTypes from 'prop-types';
import styled from 'styled-components';

const RocketElement = ({ rocket }) => (
  <Li>
    <img src={rocket.flickr_images[0]} alt="rocket" />
    <br />
    {rocket.rocket_id}
    <br />
    {rocket.rocket_name}
    <br />
    {rocket.rocket_type}
    <br />
    <br />
  </Li>
);

export default RocketElement;

RocketElement.propTypes = {
  rocket: PropTypes.shape({
    country: PropTypes.string.isRequired,
    rocket_name: PropTypes.string.isRequired,
    rocket_type: PropTypes.string.isRequired,
    flickr_images: PropTypes.string.isRequired,
    rocket_id: PropTypes.string.isRequired,
  }).isRequired,
};

const Li = styled.li`
img {
  width: 100px;
}
`;
