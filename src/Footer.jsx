import React from 'react'
import  './Footer.css'

function Footer() {
  return (
    <div className = "footer-section">
        <footer className="footer">
  <p className="footer-note">
    This is an educational, UI-only replica for interview/assignment purposes.
    Replace imagery and typography to match the official Apple iPhone page for pixel-perfect parity.
  </p>

  <div className="footer-columns">

    <div className="column">
      <h4>Column 1</h4>
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
      <a href="#">Link 4</a>
      <a href="#">Link 5</a>
    </div>

    <div className="column">
      <h4>Column 2</h4>
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
      <a href="#">Link 4</a>
      <a href="#">Link 5</a>
    </div>

    <div className="column">
      <h4>Column 3</h4>
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
      <a href="#">Link 4</a>
      <a href="#">Link 5</a>
    </div>

    <div className="column">
      <h4>Column 4</h4>
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
      <a href="#">Link 4</a>
      <a href="#">Link 5</a>
    </div>

    <div className="column">
      <h4>Column 5</h4>
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
      <a href="#">Link 4</a>
      <a href="#">Link 5</a>
    </div>

  </div>

  <div className="footer-bottom">
    <p>© 2025 Not Apple Inc.</p>

    <div className="bottom-links">
      <a href="#">Privacy Policy</a>
      <a href="#">Terms of Use</a>
      <a href="#">Legal</a>
      <a href="#">Site Map</a>
    </div>
  </div>
</footer>

    </div>
  )
}
export default Footer;