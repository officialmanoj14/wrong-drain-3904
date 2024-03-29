import React, { useState,useEffect } from "react";

import "./Slide.css";

const slideImages = [
    "https://images-static.nykaa.com/uploads/eb2071c9-8d07-47b1-8c36-9c95c412129f.jpg?tr=w-2400,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/c84d9e2f-ec73-4d3f-922e-953ab90a415e.jpg?tr=w-2400,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/7ab97b4f-837b-40d8-82f1-259e79c67ca7.jpg?tr=w-2400,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/b5803dc0-fb0a-4507-9e8a-a88c5ec99868.gif?tr=w-2400,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/4f8da256-1e17-46b6-8c74-f49919b4c158.jpg?tr=w-2400,cm-pad_resize",
];



const Slide1 = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    setInterval(() => {
       setSelectedImage(selectedImage < 5 ? (selectedImage+1) : 0);
    },4000);
});
  return (
    <div className="slidecontainer">
      <img src={slideImages[selectedImage]} alt="Images not found" className="slideImage"/>
    </div>
  );
};

export default Slide1;