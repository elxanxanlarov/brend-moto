const SingleCard = ({ data, blackImage }) => {
  return (
    <div className="col-md-4 col-sm-6 col-12 px-md-5">
      <div className="single-card">
        <div className={blackImage ? "img-block black" : "img-block"}>
          <img src={data.image} alt="" />
        </div>
        <p>{data.title}</p>
        <div className="dp-between">
          <div>
            <p className="category">{data.category}</p>
            <span className="price">${data.price}</span>
          </div>
          <button className="btn btn-danger">ADD TO CARD</button>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
