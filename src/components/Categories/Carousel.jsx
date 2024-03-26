import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pizza1 from "../../assets/pizza1.png";
import pizza2 from "../../assets/pizza2.png";
import pizza3 from "../../assets/pizza3.png";
import pizza4 from "../../assets/pizza4.png";
import "./Categories.css";
const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="slider-card">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={pizza1}
            alt="Slide 1"
            style={{ width: "300px", height: "200px" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "5px",
            padding: "10px 0",
          }}
        >
          <h5 style={{ fontSize: "18px" }}>Pepperoni Pizza</h5>
          <p>Di napoles</p>
          <p style={{ color: "black", fontSize: "18px", fontWeight: "600" }}>
            $11,99
          </p>
          <button
            style={{
              padding: "8px 20px",
              backgroundColor: "#F72D57",
              border: "none",
              borderRadius: "4px",
              color: "white",
              fontSize: "16px",
            }}
          >
            {" "}
            Add to cart
          </button>
        </div>
      </div>
      <div className="slider-card">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={pizza2}
            alt="Slide 1"
            style={{ width: "300px", height: "200px" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "5px",
            padding: "10px 0",
          }}
        >
          <h5 style={{ fontSize: "18px" }}>Pepperoni Pizza</h5>
          <p>Di napoles</p>
          <p style={{ color: "black", fontSize: "18px", fontWeight: "600" }}>
            $11,99
          </p>
          <button
            style={{
              padding: "8px 20px",
              backgroundColor: "#F72D57",
              border: "none",
              borderRadius: "4px",
              color: "white",
              fontSize: "16px",
            }}
          >
            {" "}
            Add to cart
          </button>
        </div>
      </div>
      <div className="slider-card">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={pizza1}
            alt="Slide 1"
            style={{ width: "300px", height: "200px" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "5px",
            padding: "10px 0",
          }}
        >
          <h5 style={{ fontSize: "18px" }}>Pepperoni Pizza</h5>
          <p>Di napoles</p>
          <p style={{ color: "black", fontSize: "18px", fontWeight: "600" }}>
            $11,99
          </p>
          <button
            style={{
              padding: "8px 20px",
              backgroundColor: "#F72D57",
              border: "none",
              borderRadius: "4px",
              color: "white",
              fontSize: "16px",
            }}
          >
            {" "}
            Add to cart
          </button>
        </div>
      </div>
      <div className="slider-card">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={pizza3}
            alt="Slide 1"
            style={{ width: "300px", height: "200px" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "5px",
            padding: "10px 0",
          }}
        >
          <h5 style={{ fontSize: "18px" }}>Pepperoni Pizza</h5>
          <p>Di napoles</p>
          <p style={{ color: "black", fontSize: "18px", fontWeight: "600" }}>
            $11,99
          </p>
          <button
            style={{
              padding: "8px 20px",
              backgroundColor: "#F72D57",
              border: "none",
              borderRadius: "4px",
              color: "white",
              fontSize: "16px",
            }}
          >
            {" "}
            Add to cart
          </button>
        </div>
      </div>
      <div className="slider-card">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={pizza4}
            alt="Slide 1"
            style={{ width: "300px", height: "200px" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "5px",
            padding: "10px 0",
          }}
        >
          <h5 style={{ fontSize: "18px" }}>Pepperoni Pizza</h5>
          <p>Di napoles</p>
          <p style={{ color: "black", fontSize: "18px", fontWeight: "600" }}>
            $11,99
          </p>
          <button
            style={{
              padding: "8px 20px",
              backgroundColor: "#F72D57",
              border: "none",
              borderRadius: "4px",
              color: "white",
              fontSize: "16px",
            }}
          >
            {" "}
            Add to cart
          </button>
        </div>
      </div>
      {/* Add more slides as needed */}
    </Slider>
  );
};

export default Carousel;
