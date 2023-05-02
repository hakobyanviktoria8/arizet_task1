import React from "react";
import man from "./../images/man.png";
import woman from "./../images/woman.png";
import couple from "./../images/couple.png";
import "./../styles/ImgWrapper.css";

export const ImgWrapper = () => {
  return (
    <div className="app__main_imgWrapper">
      <img src={man} alt="man" className="man" />
      <img src={woman} alt="woman" className="woman" />
      <img src={couple} alt="couple" className="couple" />
    </div>
  );
};
