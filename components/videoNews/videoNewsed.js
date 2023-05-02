import React, { useEffect, useState } from "react";
import styles from "../../styles/Videonews.module.css";
import axios from "axios";
import TimeAgo from "../Timeago/Timeago";
import Image from "next/image";
import { Icon } from "@iconify/react";
import facebookFill from "@iconify/icons-ri/facebook-fill";
import twitterIcon from "@iconify/icons-mdi/twitter";
import linkSimpleBold from "@iconify/icons-ph/link-simple-bold";
import roundClose from "@iconify/icons-ic/round-close";

function videoNewsed(props) {
  const [recived, setRecived] = useState({});

  const [videoSrc, setVideoSrc] = useState("");

  const [number, setNumber] = useState(props.data);

  console.log("propsdata", videoSrc);

  useEffect(() => {
    axios
      .get(process.env.NEXT_PUBLIC_API_BASE_URL + "/getAllVideoData")
      .then(async (response) => {
        setVideoSrc(response.data[number].VideoPath);

        await setRecived(response.data[number]);
      });
  }, []);

  console.log(process.env.NEXT_PUBLIC_API_URL + videoSrc);

  return (
    <>
      <div className={styles.fullheight}>
        <div className={styles.header}>
          <div className={styles.readNews}>Read News</div>
          <div className={`${styles.icon} ${styles.facebook}`}>
            {/* <Image
            style={{color:"green"}}
              src="/facebook-01.svg"
              alt="faceBook"
              width={40}
              height={40}
            /> */}
            {/* <img src="/facebook-01.svg" alt="An SVG of an eye"  style={{color:"green"}}/> */}
            <Icon
              style={{ height: "31px", width: "38px", marginTop: "10%" }}
              icon={facebookFill}
              className={styles.facebookicon}
            />
          </div>
          <div className={`${styles.icon} ${styles.twitter}`}>
            <Icon
              style={{ height: "31px", width: "38px", marginTop: "10%" }}
              icon={twitterIcon}
              className={styles.twitterIcon}
            />
          </div>
          <div className={`${styles.icon} ${styles.link}`}>
            <Icon
              style={{ height: "31px", width: "38px", marginTop: "10%" }}
              icon={linkSimpleBold}
              className={styles.linkSimple}
            />
          </div>
          <div className={`${styles.icon} ${styles.link}`}>
            <Icon
              style={{ height: "31px", width: "38px", marginTop: "10%" }}
              icon={roundClose}
              className={styles.linkSimple}
            />
          </div>
        </div>

        <div className={styles.videoborder}>
          <video
            src={process.env.NEXT_PUBLIC_API_URL + videoSrc}
            height="200"
            width="500"
            autoPlay
            controls
            disablePictureInPicture
            playsInline
            controlsList="nodownload"
          />
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.datarecord}>
          <h2 className={styles.tittle}>{recived.NewsTittle}</h2>
          <h2 className={styles.sutittle}>{recived.NewsSubTittle}</h2>
          <div className={styles.subfooter}>
            <div className={styles.sudata}>{recived.GujCategory}</div>
            <div className={styles.sudata}>
              <TimeAgo timestamp={`${recived.CreatedDate}`} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default videoNewsed;
