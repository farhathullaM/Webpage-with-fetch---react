import React, { useState } from 'react';
import './Filter.css';

const Filter = () => {

  const [selectedValue, setSelectedValue] = useState(77);

  const handleInputChange = (event) => {
    setSelectedValue(event.target.value);
  }
  return (
    <div className='filter'>
      <div className="filterbox">

        <div className="sports-fashion">
          
          <div className="men-sp-fa">
            <p className='sp'>- Sports Fashion</p>
            <p className='msp'>- Men's Sports Fashion</p>
            <div className="men-sp-ac">
              <p className='mspa'> - Men's Sports Accessories</p>
              <div className="sports-items">
                <p>Sports Socks</p>
                <p>Sports Belts</p>
                <p>Sports Caps</p>
              </div>
            </div>
          </div>
          <div className="different">
            <p className='one'>3264</p>
            <p className='one'>3264</p>
            <p className='three'>1332</p>
            <p className='three'>1194</p>
            <p className='three'>739</p>
          </div>
        </div>

        <div className="price">
          <p className='price-head'>Price</p>
          <input type="range" min={77} max={3834} value={selectedValue} onChange={handleInputChange}/>
          <div className="range-value">
            <p>Rs.{selectedValue}</p>
          </div>
          <div className="box-types">
            <p>Rs.</p><input type="number" />
            <p>Rs.</p><input type="number" />
            <button>GO</button>
          </div>
        </div>

        <div className="customer-rating">
          <div className="star-rating">

          </div>
          <div className="count">
            <p>765</p>
            <p>1047</p>
            <p>1102</p>
            <p>1154</p>
          </div>
        </div>

        <div className="brand">
          <input type="text" placeholder='Search by Brand'/>
          <i className="fa-solid fa-magnifying-glass"></i>
          <div className="select-brand">
            <div className='brand-cb'> <input type="checkbox"/><p>ADRIOTZ</p></div>
            <div className='brand-cb'> <input type="checkbox"/><p>ASIAN</p></div>
            <div className='brand-cb'> <input type="checkbox"/><p>Balezia</p></div>
            <div className='brand-cb'> <input type="checkbox"/><p>Balenzia X Marvel</p></div>
            <div className='brand-cb'> <input type="checkbox"/><p>Bewakoof</p></div>
          </div>
          <button>VIEW MORE</button>
        </div>

        <div className="discount-per">
          <div className="dicount-boxes">
            <div className='discount-pr'> <input type="checkbox"/><p> 0-10</p></div>
            <div className='discount-pr'> <input type="checkbox"/><p>10-20</p></div>
            <div className='discount-pr'> <input type="checkbox"/><p>20-30</p></div>
            <div className='discount-pr'> <input type="checkbox"/><p>30-40</p></div>
            <div className='discount-pr'> <input type="checkbox"/><p>40-50</p></div>
          </div>
          <button>VIEW MORE</button>
        </div>

        <div className="color">
        <div className="dicount-boxes">
            <div className='color-select'> <input type="checkbox"/><p><i className="fa-solid fa-square"></i>Beige</p></div>
            <div className='color-select'> <input type="checkbox"/><p><i className="fa-solid fa-square"></i>Black</p></div>
            <div className='color-select'> <input type="checkbox"/><p><i className="fa-solid fa-square"></i>Blue</p></div>
            <div className='color-select'> <input type="checkbox"/><p><i className="fa-solid fa-square"></i>Bronze</p></div>
            <div className='color-select'> <input type="checkbox"/><p><i className="fa-solid fa-square"></i>Brown</p></div>
          </div>
          <button>VIEW MORE</button>
        </div>

        <div className="final-div">
          <p>Material<i className="fa-solid fa-plus"></i></p>
          <p>Belt Finishing<i className="fa-solid fa-plus"></i></p>
        </div>

      </div>
    </div>
  )
}

export default Filter;
