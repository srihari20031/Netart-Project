import Award from "../assets/images/1.png";
import AwardCereomny from "../assets/images/2.png";


// this is second section which contains the award and award ceremony phots
const Hero = () => {
  return (
    <div className="hero">
      <div className="left-hero">
        <img src={Award} alt="" className="award" />
      </div>
      <div className="right-hero">
        <h4>
          C.R.I PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD of 2018 for
          the fourth time
        </h4>
        <ul>
          <li>
            C.R.Is energy efficient products are well recognized by various
            Government Institutions, as trustworthy products for various
            projects across the globe to save energy.
          </li>
          <li>
            C.R.I. is the highest contributor in the country for the projects of
            EESL (Energy Efficiency Services Limited) to replace the old
            inefficient pumps with 5 star rated energy efficient smart pumps
            with IoT enabled control panel.
          </li>
        </ul>
        <img src={AwardCereomny} alt="" className="award-ceremony" />
        <p>
          Government of India has awarded the{" "}
          <span className="highlight">
            {'"National Energy Conservation Award 2018"'}
          </span>
          . Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received
          the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj
          Kumar Singh, Honorable Minister of State.
        </p>
      </div>
    </div>
  );
};

export default Hero;
