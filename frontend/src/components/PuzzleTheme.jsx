// import React, { useState, useEffect } from "react";
// import MyJigsawPuzzle from "./JigsawPuzzle";

// export const Theme = () => {
//   const [selectedTheme, setSelectedTheme] = useState("");
//   const [images, setImages] = useState([]);
//   const [fetching, setFetching] = useState(false);
//   const [error, setError] = useState(null);
//   const [selectedImages, setSelectedImages] = useState([]);

//   const themes = [
//     'nature', 'science', 'sports',
//     'animals', 'food', 'music'
//   ];

//   const changeTheme = (theme) => {
//     setSelectedTheme(theme);
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         if (selectedTheme) {
//           const baseURL = "https://pixabay.com/api/";
//           const API_KEY = "39230660-a4bee92977e02c758c511e738";
//           const query = encodeURIComponent(selectedTheme);
//           const response = await fetch(`${baseURL}?key=${API_KEY}&q=${query}`);
//           if (!response.ok) {
//             throw new Error("Network response was not ok");
//           }
//           const data = await response.json();
//           console.log("Fetched images data:", data.hits);
//           setImages(data.hits);
//           setError(null);
//         }
//       } catch (error) {
//         console.error("Error fetching images:", error);
//         setError("Error fetching images. Please try again.");
//       } finally {
//         setFetching(false);
//       }
//     };
//     if (fetching) {
//       fetchData();
//     }
//   }, [selectedTheme, fetching]);

//   const handleImageChange = (e) => {
//     const files = e.target.files;
//     setSelectedImages([...files]);
//   };

//   const handleUploadImages = async () => {
//     try {
//       if (images.length === 0) {
//         console.error('No images to upload.');
//         return;
//       }
//       const baseURL = "https://pixabay.com/api/";
//       const API_KEY = "39230660-a4bee92977e02c758c511e738";
//       const query = encodeURIComponent(selectedTheme);
//       const imageUrls = images.map((image) => image.webformatURL);
//       const uploadResponse = await fetch('http://localhost:3002/upload-images', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ imageUrls }),
//       });
//       if (uploadResponse.ok) {
//         console.log('Images uploaded successfully.');
//       } else {
//         console.error('Failed to upload images.');
//       }
//     } catch (error) {
//       console.error('Error uploading images:', error);
//     }
//   };

//   const handlePushImagesToDB = async () => {
//     try {
//       if (images.length === 0 || !selectedTheme) {
//         console.error('No images to push to the database or theme not selected.');
//         return;
//       }
  
//       // Map images to objects with image URL and theme
//       const imagesWithTheme = images.map((image) => ({
//         imageUrl: image.webformatURL,
//         theme: selectedTheme, // Include the selectedTheme here
//       }));
  
//       const response = await fetch('http://localhost:3002/push-images-to-db', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ images: imagesWithTheme }),
//       });
  
//       if (response.ok) {
//         console.log('Images pushed to the database successfully.');
//       } else {
//         console.error('Failed to push images to the database.');
//       }
//     } catch (error) {
//       console.error('Error pushing images to the database:', error);
//     }
//   };

//   return (
//     <>
//       <div className="theme">This is the theme page</div>
//       {themes.map((theme) => (
//         <button key={theme} onClick={() => changeTheme(theme)}>
//           {theme.charAt(0).toUpperCase() + theme.slice(1)}
//         </button>
//       ))}
//       <button
//         onClick={() => {
//           if (!fetching) {
//             setFetching(true);
//           }
//         }}
//       >
//         {fetching ? "Fetching..." : `Fetch ${selectedTheme}`}
//       </button>
//       {error && <div className="error-message">{error}</div>}
//       {images.map((image, index) => (
//         <img key={index} src={image.webformatURL} alt={`Image ${index}`} />
//       ))}
//       <input
//         type="file"
//         accept="image/*"
//         multiple
//         onChange={handleImageChange}
//       />
//       <button onClick={handleUploadImages}>
//         Upload Images
//       </button>
//       <button onClick={handlePushImagesToDB}>
//         Push Images to Database
//       </button>
//       {selectedTheme && <MyJigsawPuzzle images={images} />}
//     </>
//   );
// }; // WORKING CODE THAT ALLOWED IMAGES TO BE STORED TO THE BACKEND AND PUSHES THE IMAGES TO THE DB

// import React from "react";
// import { useParams } from "react-router-dom";
// import { Navbar } from "./Nav";
// // import PixabayImageFetcher from "./src/Hooks/useApiFetcherThemeImages";


// export const Theme = () => {
//   return (
//     <>
//       <Navbar />
//       <div>
//       {/* Card Section */}
//       <section className="py-5">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-4 col-sm-6">
//               <div className="card mb-4">
//                 <img src="https://via.placeholder.com/150" alt="Card 1" className="card-img-top" />
//                 <div className="card-body">
//                   <h5 className="card-title">Card 1</h5>
//                   <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                   <a href="#" className="btn btn-primary">Select Theme</a>
//                 </div>
//               </div>
//             </div>

//             <div className="col-md-4 col-sm-6">
//               <div className="card mb-4">
//                 <img src="https://via.placeholder.com/150" alt="Card 2" className="card-img-top" />
//                 <div className="card-body">
//                   <h5 className="card-title">Card 2</h5>
//                   <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                   <a href="#" className="btn btn-primary">Select Theme</a>
//                 </div>
//               </div>
//             </div>

//             <div className="col-md-4 col-sm-6">
//               <div className="card mb-4">
//                 <img src="https://via.placeholder.com/150" alt="Card 3" className="card-img-top" />
//                 <div className="card-body">
//                   <h5 className="card-title">Card 3</h5>
//                   <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                   <a href="#" className="btn btn-primary">Select Theme</a>
//                 </div>
//               </div>
//             </div>

//             <div className="col-md-4 col-sm-6">
//               <div className="card mb-4">
//                 <img src="https://via.placeholder.com/150" alt="Card 4" className="card-img-top" />
//                 <div className="card-body">
//                   <h5 className="card-title">Card 4</h5>
//                   <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                   <a href="#" className="btn btn-primary">Select Theme</a>
//                 </div>
//               </div>
//             </div>

//             <div className="col-md-4 col-sm-6">
//               <div className="card mb-4">
//                 <img src="https://via.placeholder.com/150" alt="Card 5" className="card-img-top" />
//                 <div className="card-body">
//                   <h5 className="card-title">Card 5</h5>
//                   <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                   <a href="#" className="btn btn-primary">Select Theme</a>
//                 </div>
//               </div>
//             </div>

//             <div className="col-md-4 col-sm-6">
//               <div className="card mb-4">
//                 <img src="https://via.placeholder.com/150" alt="Card 6" className="card-img-top" />
//                 <div className="card-body">
//                   <h5 className="card-title">Card 6</h5>
//                   <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                   <a href="#" className="btn btn-primary">Select Theme</a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
      
//       {/* ... Additional Sections (if needed) ... */}
//     </div>
// {/*       
//       <Routes>
//            <Route path='/useApiFetcherThemeImages' element={<PixabayImageFetcher />} />
//         </Routes> */}
//     </>
//   );
// }; INITIAL WORKING CODE

import React, { useState, useEffect } from "react";
import MyJigsawPuzzle from "./JigsawPuzzle";
import { Navbar } from "./Nav";

export const Theme = () => {
  const [selectedTheme, setSelectedTheme] = useState("");
  const [randomImage, setRandomImage] = useState(null);
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState(null);
  const [images, setImages] = useState([]);

  const themes = ['nature', 'science', 'sports', 'animals', 'food', 'music'];

  const changeTheme = (theme) => {
    setSelectedTheme(theme);
    setFetching(true);
  };

  const selectRandomImage = () => {
    if (images.length > 0) {
      const randomIndex = Math.floor(Math.random() * images.length);
      setRandomImage(images[randomIndex]);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (selectedTheme) {
          const baseURL = "http://localhost:3002/get-images-by-theme";
          const timestamp = Date.now();
          const response = await fetch(`${baseURL}?theme=${selectedTheme}&timestamp=${timestamp}`);
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          setImages(data.images);
          setError(null);
          selectRandomImage();
        }
      } catch (error) {
        console.error("Error fetching images:", error);
        setError("Error fetching images. Please try again.");
      } finally {
        setFetching(false);
      }
    };

    if (fetching) {
      fetchData();
    }
  }, [selectedTheme, fetching]);

  const [isRandomImageClicked, setIsRandomImageClicked] = useState(false);

  const handleRandomImageClick = () => {
    setIsRandomImageClicked(!isRandomImageClicked);
  };

  return (
    <>
      <Navbar />
      <div>
        {/* Card Section */}
        <section className="py-5">
          <div className="container">
            <div className="row">
              {themes.map((theme) => (
                <div className="col-md-4 col-sm-6" key={theme}>
                  <div className="card mb-4">
                    <img src={`https://via.placeholder.com/150?text=${theme}`} alt={`Card ${theme}`} className="card-img-top" />
                    <div className="card-body">
                      <h5 className="card-title">{theme.charAt(0).toUpperCase() + theme.slice(1)}</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      <button onClick={() => changeTheme(theme)} className="btn btn-primary">Select Theme</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Display random image and puzzle */}
        {selectedTheme && (
          <>
            {fetching ? (
              <div>Loading images...</div>
            ) : (
              <>
              {error && <div className="error-message">{error}</div>}
              {randomImage && (
                <img
                  src={randomImage.image}
                  alt={`Random Image`}
                  className={`random-image ${isRandomImageClicked ? 'clicked' : ''}`}
                  onClick={handleRandomImageClick} // Add click handler
                />
              )}
              <MyJigsawPuzzle selectedTheme={selectedTheme} images={randomImage ? [randomImage] : []} /> {/* Pass selectedTheme and randomImage as props */}
            </>
            )}
          </>
        )}
      </div>
    </>
  );
};
