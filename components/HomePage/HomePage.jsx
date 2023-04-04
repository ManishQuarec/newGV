// import { Helmet } from "react-helmet";
// import React, { useEffect, useState } from "react";
// import "./HomePage.css";
// import Nav from "../../Component/Nav/Nav";
// import Bottom from "../../Component/BottomNAV/Bottom";
// import BreakingNews from "../../Component/BreakingNews/BreakingNews";
// import LeftMenuBar from "../../Component/LeftMenuBar/LeftMenuBar";
// import AppStore from "../../Component/AppStore/AppStore";
// import VideoSlider from "../../Component/VideoSlider/VideoSlider";
// import NewsBlock from "../../Component/NewsBlock/NewsBlock";
// import ImageData from "../../Component/ImageData/ImageData";
// import ShortNews from "../../Component/ShortNews/ShortNews";
// import RightPhotoImage from "../../Component/RightPhotoImage/RightPhotoImage";
// import SocialMediaLeft from "../../Component/SocialMediaLeft/SocialMediaLeft";
// import MetaDecorator from "../../Component/MetaTag/Metatag";
// import FullNews from "../../Component/FullNews/FullNews";
// import searchNews from "../../Component/SearchNews/SearchNews";
// import { Route, Routes, BrowserRouter, useParams } from "react-router-dom";
// import EPapers from "../../Component/E-Papers/Papers";
// import TrendingNews from "../../Component/TrendingNews/TrendingNews";
// import axios from "axios";

// function HomePage(props) {

//   // useEffect( () => {
//   //    axios
//   //   .get(process.env.REACT_APP_API_URL + "need")
//   //   console.log("datares");

//   // })
//   // document.title = "Gujarat Vandan - Home";
//   return (
//     <>
//       <MetaDecorator  description={"Home"}
//         title={"Home"}
//         imageUrl={"Home"}
//         imageAlt={"Home"}
//         link={"Home"}/>
//       {/* <Helmet>
//         <title>Home</title>
//         <meta name="title" content="Home"
//           data-rh="true" />
//         <meta name="description"
//           content="Home"
//           data-rh="true" />
//         <meta property="og:type" content="Home" />
//         <meta property="og:url" content="https://www.gujaratvandan.com/" data-rh="true" />
//         <meta property="og:title" content="Home"
//           data-rh="true" />
//         <meta property="og:description"
//           content="Home"
//           data-rh="true" />
//         <meta property="og:image" content="Home" data-rh="true" />
//         <meta name="image" content="Home" data-rh="true" />
//         <meta property="twitter:card" content="summary_large_image" data-rh="true" />
//         <meta property="twitter:url" content="https://www.gujaratvandan.com/" data-rh="true" />
//         <meta property="twitter:title"
//           content="Home" />
//         <meta property="twitter:description"
//           content="Home"
//           data-rh="true" />
//         <meta property="twitter:image" content="https://secretseventeen.com/Media/icon.png" data-rh="true" />
//       </Helmet> */}
//       <div className="Nate">
//         <TrendingNews />

//         <NewsBlock value={{ unique: true }} />
//       </div>
//     </>
//   );
// }

// // export default HomePage;
// export default React.memo(HomePage);
