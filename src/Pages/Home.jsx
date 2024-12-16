import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdConstruction } from "react-icons/md";
import { PiEngineFill } from "react-icons/pi";
import { RiMenu2Fill } from "react-icons/ri";
import { RxColorWheel } from "react-icons/rx";
import { Link } from "react-router-dom";
import bigMotorcycleImage from "../../src/assets/image/big-motorcycle-img.png";
import Slider from "react-slick";
import { serviceData } from "../data/service.jsx";
import { blackProductData, whiteProductData } from "../data/productData.jsx";
import SingleCard from "../components/SingleCard.jsx";
import brandImage1 from "../../src/assets/image/brand-img1.png";
import redMotorcycle from "../../src/assets/image/red-motorcyle.png";
import { FaMinus, FaPlus } from "react-icons/fa";
import { faqData } from "../data/faqData.jsx";
const Home = () => {
  const [isOpenHeroDropDown, setIsOpenHeroDropDown] = useState(true);
  const [openFaqId, setOpenFaqId] = useState(null);
  const openFaqFunc = (faqID) => {
    setOpenFaqId((prevId) => (prevId === faqID ? null : faqID));
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    focusOnSelect: false,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <>
      <section className="hero">
        <div className="hero-dropdown rp-none">
          <div
            onClick={() => {
              setIsOpenHeroDropDown((prev) => !prev);
            }}
            className="head dp-between"
          >
            <div className="left dp-align">
              <RiMenu2Fill className="menu-icon" />
              <p>CATEGORIES</p>
            </div>
            <IoIosArrowDown className="arrow-icon" />
          </div>
          <div className={isOpenHeroDropDown ? "body" : "dp-none"}>
            <Link className="item link">
              <MdConstruction className="icon" />
              <p>Risus scelerisque a non turpis vitae malesuada </p>
            </Link>
            <Link className="item link">
              <PiEngineFill className="icon" />
              <p>Scelerisque a non turpis vitae</p>
            </Link>
            <Link className="item link">
              <RxColorWheel className="icon" />
              <p> In fringilla sollicitudin euismod sed</p>
            </Link>
            <Link className="item link">
              <MdConstruction className="icon" />
              <p>Risus scelerisque a non turpis vitae malesuada </p>
            </Link>
            <Link className="item link">
              <PiEngineFill className="icon" />
              <p>Scelerisque a non turpis vitae</p>
            </Link>
            <Link className="item link">
              <RxColorWheel className="icon" />
              <p>In fringilla sollicitudin euismod sed</p>
            </Link>
            <Link className="item link">
              <MdConstruction className="icon" />
              <p>Risus scelerisque a non turpis vitae malesuada </p>
            </Link>
            <Link className="item link">
              <PiEngineFill className="icon" />
              <p>Scelerisque a non turpis vitae</p>
            </Link>
            <Link className="item link">
              <RxColorWheel className="icon" />
              <p>In fringilla sollicitudin euismod sed</p>
            </Link>
            <Link className="item link">
              <MdConstruction className="icon" />
              <p>Risus scelerisque a non turpis vitae malesuada </p>
            </Link>
            <Link className="item link">
              <PiEngineFill className="icon" />
              <p>Scelerisque a non turpis vitae</p>
            </Link>
          </div>
        </div>
        <div className="hero-slider">
          <div className="slider">
            <div className="slider-container">
              <Slider {...settings}>
                <div className="slider-item">
                  <div className="img-block">
                    <img src={bigMotorcycleImage} alt="" />
                  </div>
                  <div className="text-con">
                    <span>RIDE AND LIVE TODAY</span>
                    <h1>
                      WE <span>RIDE</span> <br />
                      TOGETHER
                    </h1>
                    <p>
                      Risus scelerisque a non turpis vitae malesuada sed
                      venenatis. In fringilla sollicitudin euismod sed. At urna
                      adipiscing commodo suspendisse nunc enim tristique et.{" "}
                    </p>
                    <button className="btn btn-danger">Explore</button>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="img-block">
                    <img src={bigMotorcycleImage} alt="" />
                  </div>
                  <div className="text-con">
                    <span>RIDE AND LIVE TODAY</span>
                    <h1>
                      WE <span>RIDE</span> <br />
                      TOGETHER
                    </h1>
                    <p>
                      Risus scelerisque a non turpis vitae malesuada sed
                      venenatis. In fringilla sollicitudin euismod sed. At urna
                      adipiscing commodo suspendisse nunc enim tristique et.{" "}
                    </p>
                    <button className="btn btn-danger">Explore</button>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="img-block">
                    <img src={bigMotorcycleImage} alt="" />
                  </div>
                  <div className="text-con">
                    <span>RIDE AND LIVE TODAY</span>
                    <h1>
                      WE <span>RIDE</span> <br />
                      TOGETHER
                    </h1>
                    <p>
                      Risus scelerisque a non turpis vitae malesuada sed
                      venenatis. In fringilla sollicitudin euismod sed. At urna
                      adipiscing commodo suspendisse nunc enim tristique et.{" "}
                    </p>
                    <button className="btn btn-danger">Explore</button>
                  </div>
                </div>
                <div className="slider-item">
                  <div className="img-block">
                    <img src={bigMotorcycleImage} alt="" />
                  </div>
                  <div className="text-con">
                    <span>RIDE AND LIVE TODAY</span>
                    <h1>
                      WE <span>RIDE</span> <br />
                      TOGETHER
                    </h1>
                    <p>
                      Risus scelerisque a non turpis vitae malesuada sed
                      venenatis. In fringilla sollicitudin euismod sed. At urna
                      adipiscing commodo suspendisse nunc enim tristique et.{" "}
                    </p>
                    <button className="btn btn-danger">Explore</button>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
      <section className="service">
        <div className="my-container">
          <div className="service-con">
            <div className="bg-arrows-img">
              {/* <div className="left-img">
                <img src="../../src/assets/image/bg-service-arrow1.jpg" alt="" />
              </div>
              <div className="right-img">
                <img src="../../src/assets/image/bg-service-arrow1.jpg" alt="" />
              </div> */}
            </div>
            <div className="section-head">
              <h2>
                OUR <span>SERVICES</span>
              </h2>
              <p>
                Let's make your work more organize and easily using the Taskio
                Dashboard with many of the latest featuresin managing work every
                day.Let's make your
              </p>
            </div>
            <div className="service-body">
              <div className="my-container">
                <div className="body-con">
                  <div className="row g-5">
                    {serviceData.map((item, index) => (
                      <div key={index} className="col-md-4 col-sm-6 col-12">
                        <div className="box">
                          <div className="icon-block">{item.icon}</div>
                          <div className="title dp-center">
                            <span>{item.title[0]}</span>
                            <span>{item.title[1]}</span>
                          </div>
                          <p>{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="text-center pt-5">
                    <button className="btn btn-danger">DETASILS SERVICE</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="products">
        <div className="my-container">
          <div className="products-con">
            <div className="section-head">
              <h2>
                OUR <span>PRODUCT</span>
              </h2>
              <p>
                Let's make your work more organize and easily using the Taskio
                Dashboard with many of the latest featuresin managing work every
                day.Let's make your
              </p>
            </div>
            <div className="products-body ">
              <div className="row g-md-5 gy-5">
                {blackProductData.map((data, index) => {
                  return (
                    <SingleCard key={index} data={data} blackImage={"black"} />
                  );
                })}
              </div>
              <div className="shop-btn  text-center">
                <button className="btn btn-danger">SHOP</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="brands">
        <div className="brands-con">
          <div className="section-head">
            <h2>
              OUR <span>BRANDS</span>
            </h2>
            <p>
              Let's make your work more organize and easily using the Taskio
              Dashboard with many of the latest featuresin managing work every
              day.Let's make your
            </p>
          </div>
          <div className="brands-body">
            <div className="row g-5">
              <div className="col-md-2 col-sm-4 col-12">
                <div className="box">
                  <img src={brandImage1} alt="" />
                </div>
              </div>
              <div className="col-md-2 col-sm-4 col-12 ">
                <div className="box">
                  <img src={brandImage1} alt="" />
                </div>
              </div>
              <div className="col-md-2 col-sm-4 col-12 ">
                <div className="box">
                  <img src={brandImage1} alt="" />
                </div>
              </div>
              <div className="col-md-2 col-sm-4 col-12 ">
                <div className="box">
                  <img src={brandImage1} alt="" />
                </div>
              </div>
              <div className="col-md-2 col-sm-4 col-12 ">
                <div className="box">
                  <img src={brandImage1} alt="" />
                </div>
              </div>
              <div className="col-md-2 col-sm-4 col-12 ">
                <div className="box">
                  <img src={brandImage1} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="products">
        <div className="my-container">
          <div className="products-con">
            <div className="section-head">
              <h2>
                OUR <span>PRODUCT</span>
              </h2>
              <p>
                Let's make your work more organize and easily using the Taskio
                Dashboard with many of the latest featuresin managing work every
                day.Let's make your
              </p>
            </div>
            <div className="products-body ">
              <div className="row g-5 gy-5">
                {whiteProductData.map((data, index) => {
                  return <SingleCard key={index} data={data} />;
                })}
              </div>
              <div className="shop-btn  text-center">
                <button className="btn btn-danger">SHOP</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="campaign">
        <div className="section-head">
          <h2>
            OUR <span>CAMPAIGN</span>
          </h2>
          <p>
            Let's make your work more organize and easily using the Taskio
            Dashboard with many of the latest featuresin managing work every
            day.Let's make your
          </p>
        </div>
        <div className="campaign-body dp-align">
          <div className="left dp-between">
            <div className="text">
              <p>UNCOMING EVENT</p>
              <span>BAKU, DEC 17-18, 2024</span>
            </div>
            <div className="time-block dp-align">
              <div className="box">
                <p>00</p>
                <span>DAYS</span>
              </div>
              <div className="box">
                <p>00</p>
                <span>MINUTES</span>
              </div>
              <div className="box">
                <p>00</p>
                <span>HOURS</span>
              </div>
              <div className="box">
                <p>00</p>
                <span>SECOND</span>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="img-block dp-center">
              <img src={redMotorcycle} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="faq">
        <div className="my-container">
          <div className="faq-con">
            <div className="section-head">
              <h2>
                <span>FAQ</span>
              </h2>
              <p>
                Let's make your work more organize and easily using the Taskio
                Dashboard with many of the latest featuresin managing work every
                day.Let's make your
              </p>
            </div>
            <div className="faq-body">
              <div className="row">
                <div className="col-md-6 col-sm-12 col-12">
                  {faqData.slice(0, 3).map((item, index) => (
                    <div
                      key={index}
                      className={openFaqId == item.id ? "box active" : "box"}
                    >
                      <div className="box-head dp-between">
                        <p>Why is Webflow the best nocode tool?</p>
                        <button
                          onClick={() => openFaqFunc(item.id)}
                          className="btn btn-danger active"
                        >
                          {openFaqId == item.id ? (
                            <FaMinus className="icon" />
                          ) : (
                            <FaPlus className="icon" />
                          )}
                        </button>
                      </div>
                      <p className="box-text">
                        Ut enim ad minim veniam quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat
                        aute irure dolor
                      </p>
                    </div>
                  ))}
                </div>
                <div className="col-md-6 col-sm-12 col-12">
                  {faqData.slice(3, 6).map((item, index) => (
                    <div
                      key={index}
                      className={openFaqId == item.id ? "box active" : "box"}
                    >
                      <div className="box-head dp-between">
                        <p>Why is Webflow the best nocode tool?</p>
                        <button
                          onClick={() => openFaqFunc(item.id)}
                          className="btn btn-danger active"
                        >
                          {
                          openFaqId == item.id ? (
                            <FaMinus className="icon" />
                          ) : (
                            <FaPlus className="icon" />
                          )
                          }
                        </button>
                      </div>
                      <p className="box-text">
                        Ut enim ad minim veniam quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat
                        aute irure dolor
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
