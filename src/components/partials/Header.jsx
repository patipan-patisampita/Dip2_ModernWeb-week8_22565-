import React from 'react'

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark shadow sticky-top" style={{ backgroundColor: "#A708E8" }}>
        <div className="container">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Profile</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">Fruit</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header