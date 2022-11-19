import React from "react";

const Gallery = ({ gallery, search }) => {
  console.log(gallery);
  const baseUrl = `https://live.staticflickr.com`;

  return (
    <div className="text-center">
      <h2>{search} pictures</h2>
      <div className="flex flex-wrap justify-center mt-6">
        {gallery.photos.map((photo, index) => {
          return (
            index < 10 && (
              <img
                src={`${baseUrl}/${photo.server}/${photo.id}_${photo.secret}.jpg`}
                alt=""
                className="m-3 w-48 h-48"
              />
            )
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
