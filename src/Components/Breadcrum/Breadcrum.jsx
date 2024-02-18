import React from 'react';
import './Breadcrum.css';

const Breadcrum = () => {
return (
    <div className='breadcrum'>
      <div className="bred">
        <p>Home <span>/</span> Sports Fashion <span>/</span> Men's Sports Fashion  <span>/ Men's Sports Accessories</span></p>
      </div>

      <div className="trending">
      <span className="material-symbols-outlined">trending_up</span>
        <p>Trending searchs:</p>
        <div className="btns">
            <button>kurta</button>
            <button>ladies watch women</button>
            <button>sunglasses</button>
            <button>cotton sarees</button>
            <button>water bottle</button>
            <button>lunch box</button>
            <button>mixer grinder</button>
            <button>handbag</button>
        </div>
      </div>
    </div>
  )
}

export default Breadcrum
