import "../Styles/Hero.css";

function Hero() {
  return (
    <div id="hero">
      <iframe src="./network/index.html" title="network"></iframe>
      <div id="heroInside">
        <div id="headline">
          <h1>Transforming Today</h1>
          <h1>For</h1>
          <h1>Digital Tomorrow</h1>
        </div>
        <div id="slogan">
          We are committed to offering state-of-the-art software solutions that
          enable companies to prosper in the digital world. <br />
        </div>
        <div id="learnMoreButton">
          Learn More <i className="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    </div>
  );
}

export default Hero;
