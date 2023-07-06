import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { cancelReserveRocket, reserveRocket } from '../redux/rockets/rocketsSlice';

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
        <span className="title">{rocket.rocket_name}</span>
        <p>
          {rocket.reserved === true && <span className="reserved">Reserved</span>}
          {rocket.description}
        </p>
        <button
          onClick={(e) => {
            handleClick(e, rocket.id);
          }}
          className={rocket.reserved === true ? 'cancel-btn' : 'reserve-btn'}
          type="button"
        >
          {rocket.reserved === true ? 'Cancel Reservation' : 'Reserve Rocket'}
        </button>
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
  padding: 1rem 0;

  .img {
    img {
      width: 15rem;
    }
  }

  .details {
    display: flex;
    gap: 0rem;
    flex-direction: column;
    margin-left: 1rem;
    justify-content: center;

    .title {
      font-size: 1.1rem;
      font-weight: 600;
    }

    p {
      font-size: 0.9rem;

      .reserved {
        font-size: 11px;
        border-radius: .2rem;
        margin-right: .5rem;
        padding: 0.08rem 0.28rem;
        background-color: #1aa1b9;
        color: white;
        font-weight: 500;
      }
    }

    .reserve-btn {
      max-width: fit-content;
      padding: .5rem;
      background-color: #027bff;
      cursor: pointer;
      border-radius: .2rem;
      color: white;
      border: transparent;
    }

    .cancel-btn {
      max-width: fit-content;
      padding: .5rem;
      background-color: white;
      cursor: pointer;
      border-radius: .2rem;
      color: #80878e;
      border: 1px solid #a0a5ab;
    }
  }

  @media (max-width: 576px) {
    flex-direction: column;

    .details {
      margin: 1rem 0;
    }
  }
`;
