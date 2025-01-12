import React from "react";

interface ImageProps {
  src: string;
  alt: string;
}

const Image: React.FC<ImageProps> = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: "100%",
        maxWidth: "500px",
        height: "auto",
      }}
    />
  );
};

export default Image;
