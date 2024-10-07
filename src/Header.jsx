import React from 'react'
import banner from './assets/banner2.png'

const Header = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        <img src={banner} width="50px" alt="BMW logo" />
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link" href="index.html"><b>HOME</b></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={() => location.href='#ct'}><b id='c'>CONTACT</b></a>
          </li>
          <li className="nav-item">
            <a className="nav-link me-3" onClick={() => location.href='#sr'}><b id="li">SERVICES</b></a>
          </li>
          <li className="nav-item">
            <button className="btn btn-outline-success"><b>ENQUIRE &nbsp;<i className="fa-brands fa-whatsapp fa-beat"></i></b></button>
          </li>
        </ul>
      </div>
    </div>
  </nav>

    </>
  )
}

export default Header