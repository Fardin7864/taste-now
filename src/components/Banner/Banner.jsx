import "./Banner.css";
import banner from "../../assets/banner.png";
import banner2 from "../../assets/banner2.png";

const Banner = () => {
  return (
    <div className="banner-container">
    <div className="mega-banner">
      <div className="banner">
        <div style={{ maxWidth: "517px", }}>
          <h3 className=" banner-title">
            Experience food <br />{" "}
            <span style={{ color: "#f72d57" }}>Delivery</span> like no other
          </h3>
          <p className="banner-text">
            We deliver the food of your choice wherever, whenever. Select your
            food from only the top restaurants in the area, and get it in a
            flash. Download the app now to discover more.
          </p>
        </div>
        <div className="banner-img-container">
          <img src={banner} className="banner-img" />
          <img src={banner2} className="banner-img2" />

        </div>
      </div>
    </div>
    </div>
  );
};

export default Banner;
