import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import axios from "axios";

// import "swiper/swiper-bundle.min.css";

function videoNewsed() {
  console.log();


  const [recived, setRecived] = useState({});

  const [videoSrc, setVideoSrc] = useState('')



  // console.log(record);

  //  useEffect(() => {

  // //  setData("https://www.youtube.com/?v=dQw4w9WgXcQ")

  //  console.log(props[0].VideoPath);

  //  },[])

  useEffect(() => {

    axios
      .get(process.env.NEXT_PUBLIC_API_BASE_URL + "/getAllVideoData",).then(async (response) => {
        console.log("data", response.data[0].VideoPath);
        console.log("data", typeof response.data);
        await setRecived(response.data);


      })








  }, [])


  const data = JSON.stringify(recived[0]);
  console.log(data);

  return (<>



    {/* <ReactPlayer url={data} width="100%" height="100%" /> */}
    {/* <video src={"/video.mp4"} autoPlay controls /> */}
    {/* <video src={process.env.NEXT_PUBLIC_API_URL + "Video//2023//4//21/file_example_MP4_480_1_5MG.mp4" } autoPlay controls /> */}
    <video autoPlay
      controls>
      <source
        // src={process.env.NEXT_PUBLIC_API_URL + `${recived[0].VideoPath}` }
        src={process.env.NEXT_PUBLIC_API_URL + "Video//2023//4//21/file_example_MP4_480_1_5MG.mp4"}
        // src={"https://www.youtube.com/watch?v=fZa7QPECQHU" }
        type="video/mp4"

      />

    </video>

  </>

  );
};


export default videoNewsed