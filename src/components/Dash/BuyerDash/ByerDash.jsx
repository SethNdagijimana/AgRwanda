import React from "react";
import "../BuyerDash/BuyerDash.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import ActionDropDown from "../../../assets/DropIcon.png";
import SalesIcon from "../../../assets/Sales.png";
import StoreIcon from "../../../assets/Stores.svg";
import NextIcon from "../../../assets/NextIcon.png";
import Logo from "../../../assets/DashLogo.png";
import Notify from "../../../assets/fVec.png";
import NextArrow from "../../../assets/sVec.png";
import BuyerCard from "./BuyerCard";
import FirstImage from "../../../assets/Ellipse 11.png";
import FertImage from "../../../assets/fert.png";
import FertCard from "./FertCard";
const ByerDash = () => {
  return (
    <main className="buyerDash__container">
      <div className="container__leftSide">
        <hr />
        <h1 id="ActionText">
          Actions <img src={ActionDropDown} alt="" />{" "}
        </h1>
        <ul className="action__menu">
          <li>
            {" "}
            <img src={SalesIcon} alt="" /> Sales{" "}
          </li>
          <li>Activities</li>
          <li> Analytics </li>
          <li>
            {" "}
            <img id="StoresID" src={StoreIcon} alt="" /> My Stores{" "}
          </li>
        </ul>
        <hr />
        <h1 id="ActionText">
          Docs <img src={NextIcon} alt="" />{" "}
        </h1>
        <hr />
        <h1 id="ActionText">
          Setting <img src={NextIcon} alt="" />{" "}
        </h1>
        <hr />
      </div>
      <div className="container__rightSide">
        <header className="rightSide__head">
          <img src={Logo} alt="" />
          <input id="SearchInput" type="text" placeholder="Search Something" />
          <span id="Notify__Me">
            <img src={Notify} alt="" />
            <img src={NextArrow} alt="" />
          </span>
        </header>
        <div className="row1">
          <h1>Pestcides</h1>
          <Swiper
            modules={[Navigation]}
            navigation
            loop
            slidesPerView={3}
            spaceBetween={0}
            className="row1__content"
          >
            <SwiperSlide>
              <BuyerCard
                CardImage={FirstImage}
                Title="Phosphorous"
                Status="You are almost there"
                Capacity="7kg"
                Price="480rwf-600rwf"
                ButtonText="Pay"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BuyerCard
                CardImage={FirstImage}
                Title="Phosphorous"
                Status="You are almost there"
                Capacity="7kg"
                Price="480rwf-600rwf"
                ButtonText="Pay"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BuyerCard
                CardImage={FirstImage}
                Title="Phosphorous"
                Status="You are almost there"
                Capacity="7kg"
                Price="480rwf-600rwf"
                ButtonText="Pay"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BuyerCard
                CardImage={FirstImage}
                Title="Phosphorous"
                Status="You are almost there"
                Capacity="7kg"
                Price="480rwf-600rwf"
                ButtonText="Pay"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BuyerCard
                CardImage={FirstImage}
                Title="Phosphorous"
                Status="You are almost there"
                Capacity="7kg"
                Price="480rwf-600rwf"
                ButtonText="Pay"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BuyerCard
                CardImage={FirstImage}
                Title="Phosphorous"
                Status="You are almost there"
                Capacity="7kg"
                Price="480rwf-600rwf"
                ButtonText="Pay"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="row2">
          <h1>Fertilizers</h1>
          <Swiper
            modules={[Navigation]}
            navigation
            loop
            slidesPerView={3}
            spaceBetween={0}
            className="row2__container"
          >
            <SwiperSlide>
              <FertCard
                FertImage={FertImage}
                Title="Phosphorous"
                Status="You are almost there"
                Capacity="7kg"
                Price="480rwf-600rwf"
                ButtonText="Pay"
              />
            </SwiperSlide>
            <SwiperSlide>
              <FertCard
                FertImage={FertImage}
                Title="Phosphorous"
                Status="You are almost there"
                Capacity="7kg"
                Price="480rwf-600rwf"
                ButtonText="Pay"
              />
            </SwiperSlide>
            <SwiperSlide>
              <FertCard
                FertImage={FertImage}
                Title="Phosphorous"
                Status="You are almost there"
                Capacity="7kg"
                Price="480rwf-600rwf"
                ButtonText="Pay"
              />
            </SwiperSlide>
            <SwiperSlide>
              <FertCard
                FertImage={FertImage}
                Title="Phosphorous"
                Status="You are almost there"
                Capacity="7kg"
                Price="480rwf-600rwf"
                ButtonText="Pay"
              />
            </SwiperSlide>
            <SwiperSlide>
              <FertCard
                FertImage={FertImage}
                Title="Phosphorous"
                Status="You are almost there"
                Capacity="7kg"
                Price="480rwf-600rwf"
                ButtonText="Pay"
              />
            </SwiperSlide>
            <SwiperSlide>
              <FertCard
                FertImage={FertImage}
                Title="Phosphorous"
                Status="You are almost there"
                Capacity="7kg"
                Price="480rwf-600rwf"
                ButtonText="Pay"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="row3">
          <h1>Cart</h1>
          <Swiper
            modules={[Navigation]}
            navigation
            loop
            slidesPerView={3}
            spaceBetween={0}
            className="row3__container"
          >
            <SwiperSlide>
              <FertCard
                FertImage={FertImage}
                Title="Phosphorous"
                Status="You are almost there"
                Capacity="7kg"
                Price="480rwf-600rwf"
                ButtonText="Pay"
              />
            </SwiperSlide>
            <SwiperSlide>
              <FertCard
                FertImage={FertImage}
                Title="Phosphorous"
                Status="You are almost there"
                Capacity="7kg"
                Price="480rwf-600rwf"
                ButtonText="Pay"
              />
            </SwiperSlide>
            <SwiperSlide>
              <FertCard
                FertImage={FertImage}
                Title="Phosphorous"
                Status="You are almost there"
                Capacity="7kg"
                Price="480rwf-600rwf"
                ButtonText="Pay"
              />
            </SwiperSlide>
            <SwiperSlide>
              <FertCard
                FertImage={FertImage}
                Title="Phosphorous"
                Status="You are almost there"
                Capacity="7kg"
                Price="480rwf-600rwf"
                ButtonText="Pay"
              />
            </SwiperSlide>
            <SwiperSlide>
              <FertCard
                FertImage={FertImage}
                Title="Phosphorous"
                Status="You are almost there"
                Capacity="7kg"
                Price="480rwf-600rwf"
                ButtonText="Pay"
              />
            </SwiperSlide>
            <SwiperSlide>
              <FertCard
                FertImage={FertImage}
                Title="Phosphorous"
                Status="You are almost there"
                Capacity="7kg"
                Price="480rwf-600rwf"
                ButtonText="Pay"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </main>
  );
};

export default ByerDash;
