import host from '../assets/maniac-dave.png';
import Image from "next/image";

import "./host-styles.scss";
import styles from "@/app/page.module.css";


export default function HostPanel() {
  return (
    <div className={styles.hostContainer}>
      <Image
        className={styles.host}
        src={host}
        alt="Host Dave"
      />
      <div
        style={{
          width: '700px',
          height: '0%',
        }}
        className={"bubble left"}>
        <p>
          Welcome to the Retro Streamer Quiz! I'm your host, Maniac Dave. I'll be asking you a series of questions
          about retro video games.
        </p>
      </div>
    </div>
  )
};