import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import styles from "../../styles/Nav.module.css";
import Image from 'next/image';
// import "../ComingSoon/Coming";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPlayCircle,
  faSearch,
  faNewspaper,
  faBars,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";
import img from "../../public/Logo.png";
import Link from "next/link";
function Nav() {
  // var [date, setDate] = useState(new Date());

  // useEffect(() => {
  //   var timer = setInterval(() => setDate(new Date()), 1000);
  //   return function cleanup() {
  //     clearInterval(timer);
  //   };
  // });

  return (
    <><div className={styles.insideContainer}>
      <div className={styles.Container}>
        <input type="checkbox" id={styles.check} />

        <div className={styles.logo}>
          <Link href="/">
            <Image
            className={styles.imgs}
              src="/Logo.png"
              width={200}
              height={50}
              alt="Logo"
            />
          </Link>
          {/* <div className="date">
            {date.toLocaleDateString()} {date.toLocaleTimeString()}
          </div> */}
          {/* Date and Time Start */}
          {/* <div className="date">
              {date.getDate() +
                "/" +
                (date.getMonth() + 1) +
                "/" +
                date.getFullYear()}{" "}
              {date.toLocaleTimeString()}
            </div> */}
          {/* Date and Time END */}
        </div>
        <label htmlFor="check" className={styles.Icones}>
          <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
        </label>

        <div className={styles.navmenu}>
          <ul>
            <Link style={{ textDecoration: "none", color: "#000" }} href="/">
              <li className={styles.datas}>
                <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>હોમ
              </li>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "#000" }}
              href="/coming"
            >
              <li className={styles.link}>
                <FontAwesomeIcon icon={faPlayCircle}></FontAwesomeIcon>વીડિઓ
              </li>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "#000" }}
              href="/coming"
            >
              <li className={styles.link}>
                <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>સર્ચ કરો
              </li>
            </Link>
            <Link
              style={{ textDecoration: "none", color: "#000" }}
              href="/epapers"
            >
              <li className={styles.link}>
                <FontAwesomeIcon icon={faNewspaper}></FontAwesomeIcon>ઇ-પેપર્સ
              </li>
              <li className={styles.MediaIco}>
                <FontAwesomeIcon icon={faNewspaper}></FontAwesomeIcon>
              </li>
            </Link>
            {/* <a style={{ textDecoration: "none", color: "#000" }} href="/">
                <li className="MediaIcoDOT">
                  <FontAwesomeIcon icon={faEllipsisV}></FontAwesomeIcon>
                </li>
              </a> */}
          </ul>
        </div>
      </div>
    </div>
    </>
  );
}

// export default Nav;
export default React.memo(Nav);
