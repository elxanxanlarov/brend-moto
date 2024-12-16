import bigMotorcycleImage from "../../src/assets/image/big-motorcycle-img.png";
import { serviceData } from "../data/service";
const Service = () => {
  return (
    <div className="service-page">
      <div className="page-head">
        <div className="img-block">
          <img src={bigMotorcycleImage} alt="" />
        </div>
        <div>
          <h2>
            OUR <span>SERVICE</span>
          </h2>
        </div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
