import { IoPizzaOutline } from "react-icons/io5";
import { PiHamburgerThin } from "react-icons/pi";
import { LuSalad } from "react-icons/lu";
import { IoFastFoodOutline } from "react-icons/io5";
import Carousel from "./Carousel";
import { useState } from "react";

const CategorieTab = () => {
  const [activBtn, setActiveBtn] = useState({
    pizza: true,
    burger: false,
    salad: false,
    combos: false,
  })

  const handleChange = (btn) => { 
    if(btn === 'burger') setActiveBtn({ 
      pizza: false,
      burger: true,
      salad: false,
      combos: false,})
    if(btn === 'salad') setActiveBtn({ 
      pizza: false,
      burger: false,
      salad: true,
      combos: false,})
    if(btn === 'combo') setActiveBtn({ 
      pizza: false,
      burger: false,
      salad: false,
      combos: true,})
    if(btn === 'pizza') setActiveBtn({ 
      pizza: true,
      burger: false,
      salad: false,
      combos: false,})
   }

  //  console.log(activBtn)

  return (
    <div className="tab-container">
      <div className="btn-container">
        <button onClick={() => handleChange('pizza')} className={`tab ${activBtn.pizza ? 'active' : ''}`}>
          <IoPizzaOutline style={{ fontSize: "28px" }} />
          Pizza
        </button>
        <button onClick={() => handleChange('burger')} className={`tab ${activBtn.burger ? 'active' : ''}`}>
          <PiHamburgerThin style={{ fontSize: "28px" }} />
          Burgers
        </button>
        <button onClick={() => handleChange('salad')} className={`tab ${activBtn.salad ? 'active' : ''}`}>
          <LuSalad style={{ fontSize: "28px" }} />
          Salads
        </button>
        <button onClick={() => handleChange('combo')} className={`tab ${activBtn.combos ? 'active' : ''}`}>
          <IoFastFoodOutline style={{ fontSize: "28px" }} />
          Combos
        </button>
      </div>
      {/* carousel */}
      <div style={{ maxWidth: '80vw'}}>
      <div className="carousel-container"> 
        <Carousel/>
      </div>
      </div>
    </div>
  );
};

export default CategorieTab;
