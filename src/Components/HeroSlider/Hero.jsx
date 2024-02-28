import SimpleImageSlider from "react-simple-image-slider";
import React from "react";

const images = [
  { url: require("../../Assets/outfit.jpg").default }, // Adjust the paths if necessary
  { url: require("../../Assets/outfit.jpg").default },
  { url: require("../../Assets/outfit.jpg").default },
  { url: require("../../Assets/outfit.jpg").default },
  { url: require("../../Assets/outfit.jpg").default },
  { url: require("../../Assets/outfit.jpg").default },
];

function Hero() {
  return (
    <div style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
      <SimpleImageSlider
        display={"flex"}
        justify-content={"center"}
        width={"100%"}
        height={200}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
}

export default Hero;
