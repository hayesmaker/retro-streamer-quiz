"use client"; // This is a client component 👈🏽
import React, {useRef, useState, useCallback, useEffect, useContext} from "react";

import styles from "@/app/page.module.css";
import ScreenshotPanel from "@/components/ScreenshotPanel";
import { QuestionsContext } from "@/context/QuestionsContext";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function QuestionPanel ({}) {
  const ref = useRef<HTMLDivElement>(null);

  const { questions } = useContext(QuestionsContext);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(questions[questionIndex]);
  // const { contextSafe } = useGSAP({ revertOnUpdate: true });
  // const onImageLoad = contextSafe(() => {
  //
  // });

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(ref.current, {duration: 2, x: 600, opacity: 0, autoAlpha : 0 });
  }, {dependencies: [currentQuestion], revertOnUpdate: true});

  // @ts-ignore
  const onClick = useCallback(() => {
    let nextIndex = questionIndex + 1;
    if (nextIndex > questions.length - 1) {
      nextIndex = 0;
    }
    setQuestionIndex(nextIndex);
    setCurrentQuestion(questions[nextIndex]);
  },[questions, questionIndex]);

  return (
    <div className={styles.questionContainer}>
      <ScreenshotPanel ref={ref} question={currentQuestion} />
      <button onClick={onClick}> Next </button>
    </div>

  )
}