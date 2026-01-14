import { QuestionCard } from "../../assets/components/QuestionCard";
import cls from "./HomePage.module.css";
import { API_URL } from "../../constants";
import { useState } from "react";
import { useEffect } from "react";

export const HomePage = () => {
  const [questions, setQuestions] = useState([]);

  const getQuestions = async () => {
    try {
      const response = await fetch(`${API_URL}/react`);
      const questions = await response.json();
      setQuestions(questions);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <>
      {questions.map((question, index) => {
        return <QuestionCard card={question} key={index} />;
      })}
    </>
  );
};
