import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { reserveRocket, cancelReserveRocket } from '../redux/rockets/rocketsSlice';

const RocketElement = ({ rocket }) => {
  const dispatch = useDispatch();
  const handleClick = (e, id) => {
    e.preventDefault();
    if (rocket.reserved === false) {
      dispatch(reserveRocket({ id }));
    } else {
      dispatch(cancelReserveRocket({ id }));
    }
  };
  return (
    <Li>
      <div className="img">
        <img src={rocket.flickr_images[0]} alt="rocket" />
      </div>
      <div className="details">
        <span>{rocket.rocket_name}</span>
        <p>
          {rocket.reserved === true && <span className="reserved">Reserved</span>}
          {rocket.description}
        </p>
        <button onClick={(e) => { handleClick(e, rocket.id); }} className="reserve-btn" type="button">{rocket.reserved === true ? 'Cancel Reservation' : 'Reserve Rocket'}</button>
      </div>
    </Li>
  );
};

export default RocketElement;

RocketElement.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number.isRequired,
    rocket_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    flickr_images: PropTypes.arrayOf(PropTypes.string).isRequired,
    rocket_id: PropTypes.string.isRequired,
    reserved: PropTypes.bool.isRequired,
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

  .reserved {
    font-size: 10px;
    border-radius: .2rem;
    margin-right:.5rem;
    padding: 0.2rem;
    background-color: green;
    color: white;
  }

  .reserve-btn {
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
