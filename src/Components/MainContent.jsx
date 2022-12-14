import React from "react";
import { Link } from "react-router-dom";
import saleIMG from "../images/sale.jpg";
import "../StyleSheet/MainContent.css";
import contactIMG from "../images/contact.jpg";
import rentIMG from "../images/rent.jpg";
const MainContent = () => {
  return (
    <div className="MainContent__container">
      <div className="TopContent__container">
        <Link className="Main__links" to="/house-sale">
          <h4>FOR SALE</h4>
        </Link>
        <div className="Top__content">
          <div className="main__content">
            <img src={saleIMG} alt="House ON SALE" />
            <div className="content__text">
              <h5>
              A car or automobile is a motor vehicle with wheels. Most definitions of cars say that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people instead of goods.
              </h5>
              <Link to="/house-sale">
                <button>CHECK IT OUT</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="CenterContent__container hideForMobile">
        <Link to="/house-rent" className="Main__links">
          <h4>TO RENT</h4>
        </Link>
        <div className="Top__content">
          <div className="main__content">
            <img src={rentIMG} alt="House ON SALE" />
            <div className="content__text">
              <h5>
              A car or automobile is a motor vehicle with wheels. Most definitions of cars say that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people instead of goods.
              </h5>
              <Link to="/house-rent">
                <button>CHECK IT OUT</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="BottomContent__container">
        <Link className="Main__links" to="/contact-us">
          <h4>Contact Us</h4>
        </Link>
        <div className="Top__content">
          <div className="main__content">
            <img src={contactIMG} alt="House ON SALE" />
            <div className="content__text">
              <h5>
              A car or automobile is a motor vehicle with wheels. Most definitions of cars say that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people instead of goods.
              </h5>
              <Link to="/contact-us">
                <button>CHECK IT OUT</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;