import React from 'react'
import './Home.css'

function Home() {
  return (
    <div>
      <div className='nav-content'>
        <ul className='nav-list'>
          <li></li>
          <li>Store</li>
          <li>Mac</li>
          <li>iPad</li>
          <li>iPhone</li>
          <li>Watch</li>
          <li>AirPods</li>
          <li>TV & Home</li>
          <li>Entertainment</li>
          <li>Accessories</li>
          <li>Support</li>
          <li>🔍</li>
          <li>👜</li>
        </ul>
      </div>
      <div className='smallnav-content'>
        <div className='box'>
          <p>Overview</p>
        </div>
        <div className='box'>
          <p>Switch to iPhone</p>
        </div>
        <div className='box'>
          <p>Tech Specs</p>
        </div>

      </div>
      <div className='heading-content'>
        <h1>iPhone 15 Pro</h1>
        <p>Titanium. So strong. So light.So Pro</p>
        <div className='btn-row'>
          <button className='buy-btn'>Buy</button>
          <button className='learn'> Learn more</button>
        </div>
      </div>

      <div className='video-content'>
        <video
          src="https://www.apple.com/105/media/us/iphone/family/2025/e7ff365a-cb59-4ce9-9cdf-4cb965455b69/anim/welcome/xlarge_2x.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
      <div className='finishes-section'>
        <h1>Four stunning finishes.</h1>
        <div className="circle-row">
  <div className="circle-box1">
    <div className="circle1"></div>
    <p>Natural Titanium</p>
  </div>

  <div className="circle-box2">
    <div className="circle2"></div>
    <p>Blue Titanium</p>
  </div>

  <div className="circle-box3">
    <div className="circle3"></div>
    <p>White Titanium</p>
  </div>

  <div className="circle-box4"> 
    <div className="circle4"></div>
    <p>Black Titanium</p>
  </div>
</div>

   </div>

    </div>
  )
}

export default Home;