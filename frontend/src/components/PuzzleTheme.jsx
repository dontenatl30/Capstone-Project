import React from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "./Nav";
// import PixabayImageFetcher from "./src/Hooks/useApiFetcherThemeImages";


export const Theme = () => {
  return (
    <>
      <Navbar />
      <div>
      {/* ... Hero Section (same as in the previous examples) ... */}
      
      {/* Card Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="card mb-4">
                <img src="https://via.placeholder.com/150" alt="Card 1" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Card 1</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <a href="#" className="btn btn-primary">Select Theme</a>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6">
              <div className="card mb-4">
                <img src="https://via.placeholder.com/150" alt="Card 2" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Card 2</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <a href="#" className="btn btn-primary">Select Theme</a>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6">
              <div className="card mb-4">
                <img src="https://via.placeholder.com/150" alt="Card 3" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Card 3</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <a href="#" className="btn btn-primary">Select Theme</a>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6">
              <div className="card mb-4">
                <img src="https://via.placeholder.com/150" alt="Card 4" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Card 4</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <a href="#" className="btn btn-primary">Select Theme</a>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6">
              <div className="card mb-4">
                <img src="https://via.placeholder.com/150" alt="Card 5" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Card 5</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <a href="#" className="btn btn-primary">Select Theme</a>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6">
              <div className="card mb-4">
                <img src="https://via.placeholder.com/150" alt="Card 6" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Card 6</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <a href="#" className="btn btn-primary">Select Theme</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* ... Additional Sections (if needed) ... */}
    </div>
{/*       
      <Routes>
           <Route path='/useApiFetcherThemeImages' element={<PixabayImageFetcher />} />
        </Routes> */}
    </>
  );
};