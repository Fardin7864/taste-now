import "./AboutUs.css";
import about1 from "../../assets/about1.jpg";
import about2 from "../../assets/about2.jpg";
const Aboutus = () => {
  return (
    <div className=" about-container">
      <h1 className="title">
        Get to know <span style={{ color: "#f72d57" }}>us</span>
      </h1>

      {/* first flex box */}
      <div className="flex-box">
        <div className="flex-box-box">
          <img
            src={about1}
            alt=""
            style={{ width: "100%", borderRadius: "16px" }}
          />
        </div>
        <div className="flex-box-box">
          <h3 className=" flexbox-title">
            <span style={{ color: "#f72d57" }}>Teamwork</span> is the key to  our
            sucess
          </h3>
          <p className="flexbox-text">
            At TasteNow we make sure that every decision is determined by a team
            of us. Everyone´s opinion matters, and as group, we are stronger. We
            firmly belive that team work, makes the dream work.
          </p>
        </div>
      </div>
      {/* second flex box */}
      <div className="flex-box box2" style={{marginTop: '100px'}}>
        <div className="flex-box-box">
          <h3 className=" flexbox-title">
            We are all in for the  <span style={{ color: "#f72d57" }}>enviroment</span>
          </h3>
          <p className="flexbox-text">
            At TasteNow we make sure that every decision is determined by a team
            of us. Everyone´s opinion matters, and as group, we are stronger. We
            firmly belive that team work, makes the dream work.
          </p>
        </div>        
        <div className="flex-box-box">
          <img
            src={about2}
            alt=""
            style={{ width: "100%", borderRadius: "16px" }}
          />
        </div>

      </div>
    </div>
  );
};

export default Aboutus;
