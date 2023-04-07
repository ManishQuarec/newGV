// import logo from "./logo.svg";
import React, { useEffect, useCallback, Children } from "react";
import styles from "../../styles/App.module.css"
import Nav from "../Nav/Nav";
// import BreakingNews from "./Component/BreakingNews/BreakingNews";
import LeftMenuBar from "../LeftMenuBar/LeftMenuBar";
// import AppStore from "./Component/AppStore/AppStore";
// import VideoSlider from "./Component/VideoSlider/VideoSlider";
// import ImageData from "./Component/ImageData/ImageData";
import NewsBlock from "../NewsBlock/NewsBlock";
// import SearchNews from "./Component/SearchNews/SearchNews";
// import SocialMediaLeft from "./Component/SocialMediaLeft/SocialMediaLeft";
import RightPhotoImage from "../RightPhotoImage/Comimg";
// import Comimg from "./Component/RightPhotoImage/Comimg";
// import ShortNews from "./Component/ShortNews/ShortNews";
// import HomePage from "../HomePage/HomePage";
// import Search from "./Component/SearchNews/Search";
// import EPapers from "./Component/E-Papers/Papers.jsx";
// import { FullNews } from "./Component/FullNews/FullNews";
// import FullNewsPost from "./Component/FullNews/FullNewsPost";
import Bottom from "../BottomNAV/Bottom"
import Coming from "../ComingSoon/Coming";
// import Bottom from "../BottomNAV/Bottom";
// import News from "./Component/news/News";

// import { Route, Routes, BrowserRouter, useParams } from "react-router-dom";

function App({children}) {
  // let { userId, cat } = useParams();
  // console.log(process.env.REACT_APP_API_BASE_URL);
  // const Layout = ({ children }) => {
  //   return (
  //     <>
  //       {/* <Nav /> */}
  //       <div className={styles.viewed}>
  //         <div className={styles.datars}>

  //           <LeftMenuBar />
  //         </div>
  //       </div>

  //       <div className={styles.HomePage}>
  //         <div className={styles.boundry}>
  //           <div className={styles.LeftSection}>
  //             <LeftMenuBar />
  //           </div>
  //           <div className={styles.MiddleSection}>{children}</div>
  //           <div className={styles.RightSection}>
  //             {/* <RightPhotoImage /> */}
  //             {/* <Comimg /> */}
  //           </div>
  //         </div>
  //       </div>
  //       {/* <Bottom /> */}
  //     </>
  //   );
  // };

  return (
    <>
      
        {/* <Layout /> */}
        {/* <BrowserRouter>
            <Routes>
              <Route path="/Coming" element={<Comming />} />
              <Route path="/" element={<HomePage />} /> */}
        {/* <Route path="/VideoSlider" element={<VideoSlider />} /> */}
        {/* <Route path="/Search" element={<SearchNews />} />
              <Route path="/EPapers" element={<EPapers />} />
              <Route path="/fullnews/:userId" element={<FullNews />} />
              <Route path="/news" element={<News />} />
              <Route
                path="category/:cat"
                element={<NewsBlock value={{ unique: false }} />}
              />
            </Routes>
          </BrowserRouter> */}

      {/* </div> */}
      <Nav /> 
      <div className={styles.viewed}>
          <div className={styles.datars}>

            <LeftMenuBar />
          </div>
        </div>

        <div className={styles.HomePage}>
          <div className={styles.boundry}>
            <div className={styles.LeftSection}>
              <LeftMenuBar />
            </div>
            <div className={styles.MiddleSection}>
           {children}
           <Bottom/>
            </div>
            <div className={styles.RightSection}>
              <RightPhotoImage />
              
              {/* <Coming /> */}
            </div>
          </div>
        </div>
    </>
  );
}

// export default App;

export default React.memo(App);
