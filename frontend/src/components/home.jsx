import { ListNumbers } from "phosphor-react";
import React from "react";
import { Navbar } from "./Nav";

export const MainPage = () => {
  return (
    <>   
    <div>
      <Navbar />
      {/* Hero Section */}
      <header className="hero bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Welcome to PuzzleCrafts</h1>
          <p className="lead">Select your Theme below</p>
          <a href="/home/theme" className="btn btn-light btn-lg">Get Started!</a>
        </div>
      </header>

      {/* About Section */}
      <section id="learn-more" className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2>About our Capstone</h2>
              <p>PuzzleCrafts is a game designed and engineered by Donte LaBlanc and Eric Williams</p>
            </div>
            <div className="col-lg-6">
              <img src="https://via.placeholder.com/400" alt="About Us" className="img-fluid rounded-circle" />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      {/* Add more sections as needed */}

      </div>



    </>
  );
};