import React from "react";
import ImageSlider from "./components/ImageSlider";
import image1 from "./Imgs/img1.jpg"
import image2 from "./Imgs/img2.jpg"
import image3 from "./Imgs/img3.jpg"
import image4 from "./Imgs/img4.jpg"
import image5 from "./Imgs/img5.jpg"

const images = [
  image1,
  image2,
  image3,
  image4,
  image5
];

function App() {
  return (
    <div>
      <h1>Slider:</h1>
      <ImageSlider images={images} />
    </div>
  );
}

export default App;
