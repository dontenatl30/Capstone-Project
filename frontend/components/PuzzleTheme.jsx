import React from "react";
import { useParams } from "react-router-dom";
import PixabayImageFetcher from "../src/Hooks/useApiFetcherThemeImages";


export const Theme = () => {
  return (
    <>
      <div className="theme">this is the theme page</div>
      
      <Routes>
           <Route path='/useApiFetcherThemeImages' element={<PixabayImageFetcher />} />
        </Routes>
    </>
  );
};