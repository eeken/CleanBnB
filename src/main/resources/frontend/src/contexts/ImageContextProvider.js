import React, { createContext, useState, useEffect } from "react";

export const ImageContext = createContext();

export default function ImageContextProvider(props) {
  const [images, setImages] = useState(null);
  const [residenceImage, setResidenceImage] = useState("");

  const fetchImages = async () => {
    let res = await fetch("/rest/images");
    try {
      res = await res.json();
      setImages(res);
    } catch {
     // console.log("Not authenticated");
    }
  };

  const fetchResidenceImage = async (id) => {
    let res = await fetch("/rest/images/" + id);
    res = await res.json();
    setResidenceImage(res)
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const values = {
    images,
    residenceImage,
    fetchImages,
    fetchResidenceImage,
  };

  return (
    <ImageContext.Provider value={values}>
      {props.children}
    </ImageContext.Provider>
  );
}
