import { IoPizzaOutline } from "react-icons/io5";
import { PiHamburgerThin } from "react-icons/pi";
import { LuSalad } from "react-icons/lu";
import { IoFastFoodOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import pizza1 from "../../assets/pizza1.png";
import pizza2 from "../../assets/pizza2.png";
import pizza3 from "../../assets/pizza3.png";
import pizza4 from "../../assets/pizza4.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Carousel from "./Carousel";

const CategorieTab = () => {

  return (
    <div className="tab-container">
      <div className="btn-container">
        <button className="tab">
          <IoPizzaOutline style={{ fontSize: "28px" }} />
          Pizza
        </button>
        <button className="tab">
          <PiHamburgerThin style={{ fontSize: "28px" }} />
          Burgers
        </button>
        <button className="tab">
          <LuSalad style={{ fontSize: "28px" }} />
          Salads
        </button>
        <button className="tab">
          <IoFastFoodOutline style={{ fontSize: "28px" }} />
          Combos
        </button>
      </div>
      {/* carousel */}
      <div style={{ marginTop:'60px', width:'100%', padding:'30px 0'}}> 
        <Carousel/>
      </div>
    </div>
  );
};

export default CategorieTab;
