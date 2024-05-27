"use client"; // This is a client component 👈🏽
import styles from "./page.module.css";
import TitlePanel from "@/components/TitlePanel";
import HostPanel from "@/components/HostPanel";

import { useContext } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import QuestionPanel from "@/components/QuestionPanel";
import { QuestionsContext } from "@/context/QuestionsContext";

gsap.registerPlugin(useGSAP);


export default function Home() {

  const questions = [ {
    coverUrl: "https://www.lemon64.com/assets/images/games/covers/large/2x/last_ninja_01.jpg",
    question: "What is the name of this game?",
    answer: 'Last Ninja',
  }, {
    coverUrl: "https://www.lemon64.com/assets/images/games/covers/large/2x/creatures_(thalamus)_01.jpg",
    question: "What is the name of this game?",
    answer: 'Creatures',
  }, {
    coverUrl: "https://www.lemon64.com/assets/images/games/covers/large/2x/thrust_01.jpg",
    question: "What is the name of this game?",
    answer: 'Thrust',
  } ];


  const QuestionContext = useContext(QuestionsContext);

  return (
    <main className={styles.main}>
      <QuestionsContext.Provider value={{
        questions,
      }}>
        <TitlePanel />
        <QuestionPanel />
        <HostPanel />
      </QuestionsContext.Provider>
    </main>
  );
}
