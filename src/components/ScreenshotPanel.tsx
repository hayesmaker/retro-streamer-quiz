"use client"; // This is a client component 👈🏽

import styles from "@/app/page.module.css";
import Image from "next/image";
import {forwardRef} from "react";

import {Question} from "@/type-defs/types";

interface ScreenshotPanelProps {
  question: Question;
  onImageLoad?: Function;
}

// eslint-disable-next-line react/display-name
const ScreenshotPanel = forwardRef<HTMLDivElement, ScreenshotPanelProps>
  ((props, ref) => {

    return (
    <div className={styles.screenshotContainer} ref={ref}>
      <Image
        className={styles.cover}
        onLoad={() => {
          props.onImageLoad && props.onImageLoad()
        }}
        priority={true}
        src={props.question.coverUrl}
        alt="Retro Streamer Quiz"
        width={800}
        height={400}
      />
    </div>
  )
});

export default ScreenshotPanel;
/*

export default function ScreenshotPanel({ coverUrl }: ScreenshotPanelProps) {

  return (
    <div className={styles.screenshotContainer}>
      <Image
        className={styles.cover}
        src={coverUrl}
        alt="Retro Streamer Quiz"
        width={800}
        height={400}
      />
    </div>

  )
}
 */