import React from "react";

const ImageList = (props) => {
  return (
    <div>
      {props.images.map((image) => (
        <img
          key={image.id}
          src={image.urls.small}
          alt={image.alt_description}
        />
      ))}
    </div>
  );
};

export default ImageList;
