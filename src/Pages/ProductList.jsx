import { useCallback, useEffect, useRef, useState } from "react";
import bigMotorcycleImage from "../../src/assets/image/big-motorcycle-img.png";
import cateoryMenuBtn from "../../src/assets/image/cateory-menu-btn.png"
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoMdArrowForward,
  IoMdSearch,
} from "react-icons/io";
import { whiteProductData } from "../data/productData";
const ProductList = () => {
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(1000);
  const [isOpenSort, setIsOpenSort] = useState();
  const [selectCategory, setSelectCategory] = useState(false);
  const minValRef = useRef(0);
  const maxValRef = useRef(1000);
  const range = useRef(null);

  const getPercent = useCallback(
    (value) => Math.round(((value - 0) / (1000 - 0)) * 100),
    [minValRef, maxValRef]
  );
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);
    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);
  return (
    <div className="product-list">
      <div className="page-head">
        <div className="img-block">
          <img src={bigMotorcycleImage} alt="" />
        </div>
        <div>
          <h2>
            PRODUCTS <span>LIST</span>
          </h2>
        </div>
      </div>
      <div className="products">
        <div className="my-container">
          <div className="products-con">
            <div className="products-left">
              <div className="left-top">
              </div>
              <div className="left-bottom">
                <p className="filter-text pb-3">FILTER BY PRICE</p>
                <input
                  type="range"
                  min={0}
                  max={1000}
                  value={minVal}
                  onChange={(event) => {
                    const value = Math.min(
                      Number(event.target.value),
                      maxVal - 1
                    );
                    setMinVal(value);
                    minValRef.current = value;
                  }}
                  className="thumb thumb--left"
                  style={{ zIndex: minVal > 1000 - 100 && "5" }}
                />
                <input
                  type="range"
                  min={0}
                  max={1000}
                  value={maxVal}
                  onChange={(event) => {
                    const value = Math.max(
                      Number(event.target.value),
                      minVal + 1
                    );
                    setMaxVal(value);
                    maxValRef.current = value;
                  }}
                  className="thumb thumb--right"
                />
                <div className="slider ">
                  <div className="slider__track" />
                  <div ref={range} className="slider__range" />
                </div>
                <p className="price pt-3">
                  Price:
                  <span>
                    {minValRef.current}-{maxValRef.current}
                  </span>
                </p>
                <div className="category-side pt-3">
                  <p>CATEGORIES</p>
                  <div className="category-con">
                    <div className="box dp-between">
                      <div className="left dp-align">
                        <div
                          onClick={() => setSelectCategory((prev) => !prev)}
                          className={
                            selectCategory ? "add-btn active" : "add-btn"
                          }
                        >
                          <p className="minus-icon"></p>
                          <p className="plus-icon"></p>
                        </div>
                        <p>FAST</p>
                      </div>
                      <div className="count">
                        <span>5</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="products-right">
              <div className="right-top">
                <div className="top-con w-100">
                  <div className="products-count">
                    <p>
                      SHOWING <span>1-12 21</span> RESULTS
                    </p>
                    <img className="dp-none" src={cateoryMenuBtn} alt="" />
                  </div>
                  <div className="search-sort dp-align ">
                    <div className="sort">
                      <div
                        onClick={() => setIsOpenSort((prev) => !prev)}
                        className="head dp-align"
                      >
                        <p>DEFAULT SORTING</p>
                        <div className="arrow">
                          {isOpenSort ? <IoIosArrowUp /> : <IoIosArrowDown />}
                        </div>
                      </div>
                      <div className={isOpenSort ? "body active" : "body"}>
                        <div>
                          <p>Name (A-Z)</p>
                          <p>Name (Z-A)</p>
                        </div>
                      </div>
                    </div>
                    <div className="search dp-align">
                      <input
                        id="search"
                        type="text"
                        placeholder="TYPE YOUR SEARCH"
                      />
                      <label htmlFor="search" className="search-icon">
                        <IoMdSearch />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right-bottom">
                <div className="row">
                  {whiteProductData.map((product, index) => (
                    <div key={index} className="col-md-4 col-sm-6 col-6">
                      <div className="product-card">
                        <div className="img-block">
                          <img src={product.image} alt="" />
                          <div className="add-to-card">
                            <button>
                              ADD TO CARD <IoMdArrowForward className="icon" />
                            </button>
                          </div>
                        </div>
                        <p className="title">{product.title}</p>
                        <p className="category">{product.category}</p>
                        <p className="price">${product.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
