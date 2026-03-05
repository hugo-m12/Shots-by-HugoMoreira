import { useState, useEffect } from "react";
import { PropTypes } from "prop-types";
import "./AboutView.css";

function AboutView() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
    <div>
  <h1 className="text-5xl text-center mt-10 mb-5">About me</h1>
  <div className="flex flex-col-reverse lg:flex justify-center md:flex-row items-start md:items-center gap-6 md:gap-12 mb-[111px] md:w-[1/2] sm:w-[1/2]">
    <div className="md:p-12 w-full md:w-1/2 order-2 md:order-1 p-7">
      <h1 className="text-3xl mb-5">Hugo Moreira</h1>
      <p className="mb-3 text-lg">
        I&apos;m a Junior Fullstack developer based in porto, Portugal that also
        has a passion for photography and travel. Movies and games and other
        types of media are also part of my main hobbies, cinematography in
        films beeing one of the the main influences for some of my work in
        photography.
      </p>
      <p className="mb-3 text-lg">
        Since my early teenage years, I&apos;ve had a keen eye for capturing
        life&apos;s precious moments. Whether it&apos;s the beauty of nature, the
        complexity of human emotions, or the simplicity of everyday scenes,
        I find joy in preserving these instants through my lens.
      </p>
      <p className="mb-3 text-lg">
        Moving forward, I aim to continue blending my technical skills with
        my artistic vision. I hope to work on projects that combine
        innovative web solutions with visually stunning designs, perhaps
        even incorporating elements of photography and cinematography
        directly into my coding work.
      </p>
    </div>
    <div>
    <PortraitImage isLoaded={isLoaded} className="w-full sm:flex justify-center md:w-auto " />
    </div>
  </div>
</div>

    </>
  );
}

const PortraitImage = ({ isLoaded }) => (

  <div className={`portrait-image-container ${isLoaded ? "loaded" : ""}`}>
    <img src="Images/portrait/IMG_7981.jpg" alt="Portrait" />
  </div>
);

PortraitImage.propTypes = {
  isLoaded: PropTypes.bool.isRequired,
};

export default AboutView