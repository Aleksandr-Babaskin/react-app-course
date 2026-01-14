import { QuestionCard } from "../../assets/components/QuestionCard";
import cls from "./HomePage.module.css";

// Временные данные для тестирования
const cards = [
  { id: 1, level: 1, completed: false, question: "What is React?", answer: "A JavaScript library for building user interfaces" },
];

export const HomePage = () => {
  return (
    <>
      {cards.map((card, index) => {
        return <QuestionCard card={card} key={index} />;
      })}
    </>
  );
};
