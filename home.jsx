import React from "react";
import Products from "./Products";

const Home = () => {
    return (
        <div className="hero">
            <div className="card bg-dark text-white border-0">
                <img src="/assests/bg.jpg" className="card-img" alt="Background"
                    height="900px" />
                <div className="card-img-overlay d-flex flex-column justify-content-top">
                    <div className="container">
                        <h2 className="card-title display-6 fw-bolder mb-2">MARCH Season Arrivals!!!</h2>
                        <p className="card-text lead fs-3">25% OFF on every purchases</p>
                    </div>
                </div>
            </div>
            <Products/>
        </div>
    )
}
export default Home;