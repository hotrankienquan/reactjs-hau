import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import Album from "../Album";
AlbumList.propTypes = {
  albumContainer: PropTypes.array.isRequired,
};
AlbumList.defaultProps = {
  albumContainer: [],
};
function AlbumList(props) {
  const { albumContainer } = props;
  console.log(albumContainer);
  console.log("props list", props);

  return (
    <ul className="album__list">
      {albumContainer.map((album) => (
        <li key={album.id}>
          <Album album={album} />
        </li>
      ))}
    </ul>
  );
}

export default AlbumList;
