import React, { useEffect, useState } from "react";
// import "./IMG-CSS/FullNews.css";
import styles from "../../styles/Fullnews.module.css"
import BenIMG from "./IMG-CSS/BenImg.png";
// import { Route, Routes, BrowserRouter, useParams } from "react-router-dom";
import axios from "axios";
import NewsBlock from "../NewsBlock/NewsBlock";
import Image from 'next/image'
// import MetaDecorator from "../MetaTag/Metatag";
// import { Helmet } from "react-helmet";
function MyComponent({ htmlContent }) {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}

function FullNews(props) {
  console.log("para", props.value.data);
  // let { userId } = useParams();
  // console.log("userid", userId);
  const [newsData, setNewsData] = useState({});
  const [image, setImage] = useState("");
  const [tittle, setTittle] = useState("");
  const [subTittle, setSubTittle] = useState("");
  const [news, setNews] = useState("");
  const [colored, setColored] = useState("");
  const [id, setId] = useState("");

  //  const data = (dat) => {
  //   React.createElement(

  //   {dat}
  //   )
  //  }

  // function createMarkup(text) { return {__html: text}; };

  console.log("id", id);



  useEffect( () => {
    // window.scrollTo(0, 0);
    //  axios.get(process.env.REACT_APP_API_BASE_URL + "/fullnews").then(async (response) => {
    //   console.log("datares");
    //   console.log(response.data);

    //   document.documentElement.innerHTML = await String(response.data);


    //   // String(response.data);;
    // })
    axios
      .post(process.env.NEXT_PUBLIC_API_BASE_URL + "/allNewsDataId", {
        data: props.value.data,
      })
      .then(async (response) => {
        console.log("new", response.data.response[0]);
        await setNewsData(response.data.response);
        await setImage(response.data.response[0].Path);
        await setTittle(response.data.response[0].NewsTittle);
        await setNews(response.data.response[0].News);
        await setSubTittle(response.data.response[0].NewsSubTittle);
        await setColored(response.data.response[0].Colored);
        await setId(response.data.response[0]._id);
        // console.log(response.data.response);
      });

  },[props.value.data]);

  return (
    <>
      {/* <MetaDecorator
        description={"fullnews"}
        title={"fullnews"}
        imageUrl={"fullnews"}
        imageAlt={"imageAlt"}
        link={"lifullnewsnk"}
        

      /> */}
      <div className={styles.datt}>
        <div className={styles.FullNews}>
          <div className={styles.NewsContent}>
            <h1>
              <font style={{ color: colored ? colored : "#000000" }}>
                {" "}
                {tittle.slice(0, 52)}{" "}
              </font>{" "}
              {/* {subTittle.split(" ").splice(0, 20).join(" ")} */}
              {subTittle}
            </h1>
          </div>
        </div>

        <div className={styles.ImgSection}>
          <Image src={process.env.NEXT_PUBLIC_API_URL + `${image}`} width={500}
          height={500}alt="" />
        </div>
        <div className={styles.NewsContent}>
          <MyComponent htmlContent={news} />
          <h1 className={styles.gu78}>અન્ય સમાચારો પણ છે...</h1>
        </div>
      </div>
      <NewsBlock value={{ unique: true }} />
    </>
  );
}

export { FullNews, MyComponent };
