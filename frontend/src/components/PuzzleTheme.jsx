// import React, { useState, useEffect } from "react";
// import MyJigsawPuzzle from "./JigsawPuzzle";

// export const Theme = () => {
//   const [selectedTheme, setSelectedTheme] = useState("");
//   const [images, setImages] = useState([]);
//   const [fetching, setFetching] = useState(false);

//   const themes = [
//     'backgrounds', 'fashion', 'nature', 'science', 'education',
//     'feelings', 'health', 'people', 'religion', 'places',
//     'animals', 'industry', 'computer', 'food', 'sports',
//     'transportation', 'travel', 'buildings', 'business', 'music'
//   ];

//   const changeTheme = async (theme) => {
//     setSelectedTheme(theme);
//   };

//   useEffect(() => {
//     if (selectedTheme) {
//       const baseURL = "https://pixabay.com/api/";
//       const API_KEY = "39230660-a4bee92977e02c758c511e738";
//       const query = encodeURIComponent(selectedTheme);

//       fetch(`${baseURL}?key=${API_KEY}&q=${query}`)
//         .then((response) => {
//           if (!response.ok) {
//             throw new Error("Network response was not ok");
//           }
//           return response.json();
//         })
//         .then((data) => setImages(data.hits))
//         .catch((error) => console.error("Error fetching images:", error));
//     }
//   }, [selectedTheme]);

//   const seedDatabase = async (themeToSeed) => {
//     try {
//       const imagesToSeed = images.map((image) => ({
//         name: image.user,
//         puzzleTheme: themeToSeed,
//         image: image.webformatURL, 
//         timeToComplete: 0, 
//         createdAt: new Date(),
//         updatedAt: new Date(),
//       }));
//       const response = await fetch("/api/seed-database", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ theme: themeToSeed, images: imagesToSeed }),
//       });

//       if (response.ok) {
//         const result = await response.json();
//         console.log(result.message);
//       } else {
//         console.error("Failed to fetch and store images");
//       }
//     } catch (error) {
//       console.error("Error seeding the database:", error);
//     }
//   };

// return (
//   <>
//     <div className="theme">This is the theme page</div>
//     {themes.map((theme) => (
//       <button key={theme} onClick={() => changeTheme(theme)}>
//         {theme.charAt(0).toUpperCase() + theme.slice(1)} 
//       </button>
//     ))}
//     <button
//       onClick={() => {
//         if (!fetching) {
//           setFetching(true);
//           changeTheme(selectedTheme);
//         }
//       }}
//     >
//       {fetching ? "Fetching..." : `Fetch ${selectedTheme}`}
//     </button>
//     {images.map((image, index) => (
//       <img key={index} src={image.webformatURL} alt={`Image ${index}`} />
//     ))}
//     <button onClick={() => seedDatabase(selectedTheme)}>Seed Database</button>
//     {selectedTheme && <MyJigsawPuzzle images={images} />}
//   </>
// );
// };

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