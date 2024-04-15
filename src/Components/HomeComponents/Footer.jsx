import logo from "../Images/metalogo.png";
import "../Styles/Footer.css";
import Odometer from "./Odometer";

function Footer() {
  return (
    <div id="footer">
      <div id="leftContainer">
        <Odometer />
        <div id="logoContainer">
          <img src={logo} id="logo" alt="" />
          <div id="logoText">
            MetaLogic
            <div id="logoBottom">Software Private Limited</div>
            <div id="contactInfos">
              <div>Location Saptakhel, Lalitpur (Head office)</div>
              <div>Phone + 977 9851353599</div>
              <div>Email info@metalogic.com.np</div>
            </div>
          </div>
          <div id="copyright">
            Copyright 2024 MetaLogic. All rights reserved.
          </div>
        </div>
      </div>
      <div id="rightContainer">
        <div>
          <h3>Company</h3>
          <div>Feedback</div>
          <div>Partnership</div>
          <div>Terms and Conditions</div>
        </div>
        <div>
          <h3>Services</h3>
          <div>Custon Software Development</div>
          <div>Web Development</div>
          <div>Mobile App Development</div>
          <div>Cloud Computing Services</div>
          <div>Quality Assurance and Testing</div>
          <div>UI/UX Designing</div>
          <div>Maintainance and Support</div>
          <div>Dev Ops</div>
          <div>Blockchain Solutions</div>
        </div>
        <div>
          <h3>Join</h3>
          <div>Career at MetaLogic</div>
          <div>Internships</div>
        </div>
        <div>
          <h3>Join us on Social Media</h3>
          <div id="socialIcons">
            <div>Whatsapp</div>
            <div>Facebook</div>
            <div>Instagram</div>
            <div>Linked In</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
