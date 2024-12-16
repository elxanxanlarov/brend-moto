import {useState } from "react";
import bigMotorcycleImage from "../../src/assets/image/big-motorcycle-img.png";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
const About = () => {
  const [onCounter, setOnCounter] = useState(false);
  const [hasRun, setHasRun] = useState(false); // Yeni state əlavə olunur

  const handleOnEnter = () => {
    if (!hasRun) {
      setOnCounter(true);
      setHasRun(true); 
    }
  };
  return (
    <div className="about-page">
      <div className="page-head">
        <div className="img-block">
          <img src={bigMotorcycleImage} alt="" />
        </div>
        <div>
          <h2>
            ABOUT <span>US</span>
          </h2>
        </div>
      </div>
      <section className="history">
        <div className="my-container">
          <div className="history-con">
            <div className="head">
              <h3>
                OUR HISTORY OF MAKING THE BEST <span>MOTORCYCLE</span>
              </h3>
              <p>
                Risus scelerisque a non turpis vitae malesuada sed venenatis. In
                fringilla sollicitudin euismod sed. At urna adipiscing commodo
                suspendisse nunc enim tristique et. Risus scelerisque a non
                turpis vitae malesuada sed venenatis. In fringilla sollicitudin
                euismod sed. At urna adipiscing commodo suspendisse nunc enim
                tristique et. Risus scelerisque a non turpis vitae malesuada sed
                venenatis. In fringilla sollicitudin euismod sed. At urna
                adipiscing commodo suspendisse nunc enim tristique et.{" "}
              </p>
            </div>
            <div className="body">
              <div className="row">
                <div className="col-md-3 col-sm-6 col-6">
                  <div>
                    <img
                      src="../../src/assets/image/about-history1.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-6">
                  <div className="img-two">
                    <img
                      src="../../src/assets/image/about-history2.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-6">
                  <div className="img-three">
                    <img
                      src="../../src/assets/image/about-history3.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-6">
                  <div>
                    <img
                      src="../../src/assets/image/about-history4.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="counter">
        <div className="my-container">
          <ScrollTrigger onEnter={handleOnEnter}>
            <div className="counts-con">
              <div className="count-block">
                <div className="count">
                  <CountUp start={0} end={220} duration={2} redraw={true} />
                  <span className="span">+</span>
                </div>
                <p>MEMBER</p>
              </div>
              <div className="count-block">
                <div className="count">
                  <CountUp start={0} end={125} duration={2} redraw={true} />
                  <span className="span">+</span>
                </div>
                <p>CLUB RIDERS</p>
              </div>
              <div className="count-block">
                <div className="count">
                  <CountUp start={0} end={1876} duration={2} redraw={true} />
                  <span className="span">+</span>
                </div>
                <p>MEMBER</p>
              </div>
              <div className="count-block">
                <div className="count">
                  <CountUp start={0} end={219} duration={2} redraw={true} />
                  <span className="span">+</span>
                </div>
                <p>CLUB RIDERS</p>
              </div>
            </div>
          </ScrollTrigger>
        </div>
      </section>
      <section className="vision-side">
        <div className="my-container">
          <div className="side-con">
            <div className="vision">
              <div className="box text-con">
                <h3>
                  OUR <span>VISION</span>
                </h3>
                <p>
                  Risus scelerisque a non turpis vitae malesuada sed venenatis.
                  In fringilla sollicitudin euismod sed. At urna adipiscing
                  commodo suspendisse nunc enim tristique et. Risus scelerisque
                  a non turpis vitae malesuada sed
                </p>
              </div>
              <div className="box img-block">
                <img
                  src="../../src/assets/image/about-vision-motor1.png"
                  alt=""
                />
              </div>
            </div>
            <div className="mission">
              <div className="box img-block">
                <img
                  src="../../src/assets/image/about-vision-motor1.png"
                  alt=""
                />
              </div>
              <div className="box text-con">
                <h3>
                  OUR <span>MISSION</span>
                </h3>
                <p>
                  Risus scelerisque a non turpis vitae malesuada sed venenatis.
                  In fringilla sollicitudin euismod sed. At urna adipiscing
                  commodo suspendisse nunc enim tristique et. Risus scelerisque
                  a non turpis vitae malesuada sed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
