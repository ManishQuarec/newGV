import React, { useEffect, useState } from "react";
// import "./RightPhotoImage.module.css";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

function RightPhotoImage(name) {
  const [newsData, setNewsData] = useState([]);
  const [length, setLength] = useState();

  console.log(newsData);

  useEffect(() => {
    axios
      .post(process.env.REACT_APP_API_BASE_URL + "/allNewsData", {
        data: name.value.EngCategory,
      })
      .then(async (response) => {
        console.log(response.data.response.length);
        await setNewsData(response.data.response);
        setLength(response.data.response.length);
        // console.log(response.data.response);
      });
  }, [name.value.EngCategory]);

  return (
    <>
      {/* <div className="head">
        <h4>{name.value.GujCategory}</h4>
        <p>વધુ વાંચો...</p>
      </div> */}

      {/* {newsData.slice(length - 2, length).map((news, index) => {
        return (
          <>
            <a href={`/FullNews/${news._id}`} className="rtes">
              <div className="img-right">
                <img
                  src={process.env.REACT_APP_API_URL + `${news.Path}`}
                  alt="Image"
                />

                <p className="ShortNews">{news.NewsTittle}</p>
              </div>
            </a>
          </>
        );
      })} */}

      {/* <div className="Stocks">
        <div className="head">
          <h4>શેરબજાર</h4>
        </div>
        <div class="tradingview-widget-container">
          <div class="tradingview-widget-container__widget"></div>
          <div class="tradingview-widget-copyright">
            <a
              href="https://in.tradingview.com/markets/stocks-india/"
              rel="noopener"
              target="_blank"
            >
              <span class="blue-text">Stocks today</span>
            </a>
            by Gujarat Vandan
          </div>
        </div> */}
        {/* Data Add Here */}
      {/* </div> */}
    </>
  );
}

// export default RightPhotoImage;
export default React.memo(RightPhotoImage);
