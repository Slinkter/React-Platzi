import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setFavorite, deleteFavorite } from "../actions";
import PropTypes from "prop-types";
// CSS
import "../assets/styles/components/CarouselItem.scss";
// Icons
import playIcon from "../assets/static/play-icon.png";
import plusIcon from "../assets/static/plus-icon.png";
import removeIcon from "../assets/static/remove-icon.png";

// se agregan como props a component CarouselItem
// from actions
const mapDispatchTopros = {
  setFavorite,
  deleteFavorite,
};
// --->
const CarouselItem = (props) => {
  // values
  const { id, cover, title, year, contentRating, duration, isList } = props;
  // function from MapDispatchToProps
  const { setFavorite, deleteFavorite } = props;
  // function
  const handleSetFavorite = () => {
    const newFavorite = { id, cover, title, year, contentRating, duration };
    setFavorite(newFavorite);
  };
  // function
  const handleDeleteFavorite = (itemId) => {
    deleteFavorite(itemId);
  };
  // -->

  const deleteItemFav = (
    <img
      className="carousel-item__details--img"
      src={removeIcon}
      alt="remove icon"
      onClick={() => handleDeleteFavorite(id)}
    />
  );

  const addItemFav = (
    <img
      className="carousel-item__details--img"
      src={plusIcon}
      alt="Plus Icon"
      onClick={handleSetFavorite}
    />
  );

  const playItem = (
    <img
      className="carousel-item__details--img"
      src={playIcon}
      alt="Play Icon"
    />
  );

  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title} />
      <div className="carousel-item__details">
        <div>
          <Link to={`/player/${id}`}>{playItem}</Link>
          {isList ? deleteItemFav : addItemFav}
        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">
          {`${year} ${contentRating} ${duration}`}
        </p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

export default connect(null, mapDispatchTopros)(CarouselItem);
