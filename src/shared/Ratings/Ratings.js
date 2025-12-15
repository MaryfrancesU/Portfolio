import "./Ratings.scss";
import PropTypes from "prop-types";

const Ratings = ({ rating }) => {
  const maxRating = 5;

  return (
    <div className="ratings-container">
      {Array.from({ length: maxRating }, (_, index) => {
        const isFilled = index < rating;

        return (
          <span className={`circle ${isFilled ? "filled" : ''}`} key={index} />
        );
      })}
    </div>
  );
};

Ratings.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Ratings;
