import React from "react";
import PropTypes from "prop-types";
import AlbumList from "./components/AlbumList";

AlbumContainer.propTypes = {};

function AlbumContainer(props) {
  const albumContainer = [
    {
      id: 1,
      name: "Những bài hát hay về Huế",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/8/f/c/d/8fcd0a2df0a6125c9cadc9224007c83d.jpg",
    },
    {
      id: 2,
      name: "Những bài hát Quê hương hay nhất",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/5/e/4/a/5e4a8963c19e45a597ff2902a74cd3d4.jpg",
    },
    {
      id: 3,
      name: "Trữ tình Hải Ngoại",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/e/7/c/5/e7c572fb69f4093eb4bd444c192cf101.jpg",
    },
    {
      id: 4,
      name: "Tuyệt đỉnh song ca Bolero",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/covers/b/9/b9fb9d37bdf15a699bc071ce49baea53_1517283417.jpg",
    },
  ];
  return (
    <div>
      <AlbumList albumContainer={albumContainer} />
    </div>
  );
}

export default AlbumContainer;
