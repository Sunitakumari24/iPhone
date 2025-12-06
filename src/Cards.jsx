import React from 'react'
import './Cards.css'
 function Cards() {
return (
  <div className="chip-section">
  
    <div className="chip-text">
      <h1>
        A17 Pro. Game-changing chip. 
        Groundbreaking 
        performance.
      </h1>
      <p>
        Custom-designed GPU delivers our biggest graphics redesign ever.
        Enjoy console-style gaming and next-level efficiency.
      </p>

      <div className="btn-box">
        <button className="btn1">Learn more</button>
        <button className="btn2">View tech specs</button>
      </div>
    </div>
    <div className="chip-image">
      <img
        src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop"
        alt="chip"
      />
    </div>

  </div>
);

}
export default Cards;