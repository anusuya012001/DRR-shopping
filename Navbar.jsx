import React from "react";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold fs-2 " href="#">DRR Shopping</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Product</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
            </ul>
           <div className="buttons">
              <a href="" className="btn btn-outline-dark">
                <i className="fa fa-sign-in me1 "></i> Login</a>
                <a href="" className="btn btn-outline-dark ms-2">
                <i className="fa fa-user-plus me1 "></i> Register</a>
                <a href="" className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me1 "></i> Cart (0)</a>
             </div>
             <form className="d-flex">
              <input className="form-control ms-2" type="search" placeholder="Search Products" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Navbar;