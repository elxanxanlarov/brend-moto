import { FaFacebookF, FaInstagram, FaPhone } from "react-icons/fa";
import { IoLogoTwitter, IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="my-container">
          <div className="top-con">
            <div className="row g-5">
              <div className="col-md-6 col-sm-12 col-12">
                <div className="left">
                  <p className="text">
                    DO YOU HAVE QUESTIONS? <br /> DO NOT WAIT{" "}
                    <span>LET’S TALK</span>
                  </p>
                  <div className="phone-email dp-align">
                    <div className="box dp-align">
                      <FaPhone className="icon" />
                      <p>+(994) 70 357 97 27</p>
                    </div>
                    <div className="box dp-align">
                      <IoMail className="icon mail-icon" />
                      <p>contact@brendmoto.az</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12 col-12">
                <div className="right dp-align">
                  <ul>
                    <li>HEAD OFFICE</li>
                    <li>Box 565</li>
                    <li>Charlestown,Nevis</li>
                    <li>West Indies</li>
                    <li>Caribbean</li>
                  </ul>
                  <ul>
                    <li>SERVICES</li>
                    <li>Email Marketing</li>
                    <li>Campaigns</li>
                    <li>Nevis</li>
                    <li>West Indies</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="my-container">
          <div className="bottom-con dp-between">
            <p className="copyright-text rp-none">
              Copyright © 2024 <a href="#">Webluna Software</a> . Bütün hüquqlar qorunur.
            </p>
            <div className="logo-block">
              <img src="../../src/assets/image/logo.png" alt="" />
            </div>
            <div className="right">
              <p>SOCIAL MEDIA</p>
              <div className="social-con">
                <FaFacebookF />
                <IoLogoTwitter />
                <FaInstagram />
              </div>
            </div>
            <p className="copyright-text dp-none mt-3">
              Copyright © 2024 <a href="#">Webluna Software</a> . Bütün hüquqlar qorunur.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
