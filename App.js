import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import getQuestions from "./Queries/getQuestions";
import QuestionCard from "./Components/QuestionCard";

export default function App() {
  let [QuizQuestion, setQuizQuestions] = useState([]);
  let [QuestionNo, setQuestionNo] = useState(0);
  let [Score, setScore] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const question = await getQuestions();
      setQuizQuestions(question);
      console.log(QuizQuestion);
    }
    fetchData();
    console.log(QuizQuestion);
  }, []);

  const nextQuestion = (e, userAnswer) => {
    e.preventDefault();

    if (userAnswer == QuizQuestion[QuestionNo].answer) {
      setScore(++Score);
    }
    if (QuestionNo !== QuizQuestion.length - 1) {
      setQuestionNo(++QuestionNo);
    } else {
      alert(
        Score > 6
          ? `Congratlation! You got ${Score} out of 10.`
          : `Oops! please try again.You got ${Score} out of 10.`
      );
      setQuestionNo(0);
      setScore(0);
    }
  };

  if (!QuizQuestion.length) {
    return (
      <View style={styles.container}>
        <Text>Loading Question ...</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <QuestionCard Score={Score} QuestionNo={QuestionNo} QuizQuestion={QuizQuestion} nextQuestion={nextQuestion}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  
});
