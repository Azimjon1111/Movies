import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.css'
class Navbar extends Component {
    render() {
        return (
            <React.Fragment>
        <div className="nav text-2xl font-bold">
  <input type="checkbox" id="nav-check"/>
  <div className="nav-header">
    <div className="nav-title">
      <Link to="/">Logo</Link>
    </div>
  </div>
  <div className="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div className="nav-links">
    <a href="https://azimjon1111.github.io/" rel="noreferrer" target="_blank">Azimjon</a>
    <a href="https://www.instagram.com/01_azimjon/" rel="noreferrer" target="_blank">Instagram</a>
    <a href="https://t.me/developer_uzz" rel="noreferrer" target="_blank">Telegram</a>
  </div>
</div>
            </React.Fragment>
        )
    }
}
export default Navbar