import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
Album.propTypes = {
  album: PropTypes.object.isRequired,
};
Album.defaultProps = {};

function Album({ album }) {
  const { name, thumbnailUrl } = album;
  console.log(name);
  return (
    <div>
      <div className="album__content">
        <img src={thumbnailUrl} alt={name} />
      </div>
      <p className="album__name">{name}</p>
    </div>
  );
}

export default Album;
