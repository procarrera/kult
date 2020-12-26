import React from "react";

interface RatingProps {
  rating: number;
}

const Rating: React.FC<RatingProps> = ({ rating }) => {
  if (rating === 1) {
    return <img src="/star.svg" alt="" className="w-4 h-4" />
  } else if (rating === 2) {
    return (
      <>
        <img src="/star.svg" alt="" className="w-4 h-4" />
        <img src="/star.svg" alt="" className="w-4 h-4" />
      </>
    );
  } else if (rating === 3) {
    return (
      <>
        <img src="/star.svg" alt="" className="w-4 h-4" />
        <img src="/star.svg" alt="" className="w-4 h-4" />
        <img src="/star.svg" alt="" className="w-4 h-4" />
      </>
    );
  } else if (rating === 4) {
    return (
      <>
        <img src="/star.svg" alt="" className="w-4 h-4" />
        <img src="/star.svg" alt="" className="w-4 h-4" />
        <img src="/star.svg" alt="" className="w-4 h-4" />
        <img src="/star.svg" alt="" className="w-4 h-4" />
      </>
    );
  } else if (rating === 5) {
    return (
      <>
        <img src="/star.svg" alt="" className="w-4 h-4" />
        <img src="/star.svg" alt="" className="w-4 h-4" />
        <img src="/star.svg" alt="" className="w-4 h-4" />
        <img src="/star.svg" alt="" className="w-4 h-4" />
        <img src="/star.svg" alt="" className="w-4 h-4" />
      </>
    );
  } else {
    return;
  }
};

export default Rating;
