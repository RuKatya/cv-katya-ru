import React, { useEffect, useState } from "react";
import Review from "./Review";
import Slider from "react-slick";

const Reviews = ({ reviews }) => {
  const hasWindow = typeof window !== "undefined";

  function getWindowWidth() {
    const width = hasWindow ? window.innerWidth : 1920;
    return width;
  }

  const [windowArea, setWindowArea] = useState(getWindowWidth());

  useEffect(() => {
    const setWindowWidth = () => {
      setWindowArea(window.innerWidth);
    };

    window.addEventListener("resize", setWindowWidth);
  }, [hasWindow]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: windowArea > 750 ? 2 : 1,
    slidesToScroll: 1,
  };

  return (
    <div className="reviews">
      {reviews.length > 0 ? (
        <div className="reviews__window">
          <Slider {...settings}>
            {reviews.map((rev) => (
              <Review review={rev} key={rev._id} />
            ))}
          </Slider>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Reviews;
