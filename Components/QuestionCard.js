import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { RadioButton } from "react-native-paper";

const QuestionCard = ({ Score, QuizQuestion, QuestionNo, nextQuestion }) => {
  let [answer, setAnswer] = useState("");

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Quiz</Text>
      <View style={styles.score}>
        <Text>Score: {Score}</Text>
      </View>
      <View >
        <Text style={styles.questionTitle}>Question {QuestionNo+1}: </Text>
        <Text style={styles.questionContent}>{QuizQuestion[QuestionNo].question}</Text>
      </View>
      <View>
        {QuizQuestion[QuestionNo].option.map((opt, id) => {
          return (
            <View key={id} style={styles.option}>
              <RadioButton
                value={opt}
                status={opt === answer ? "checked" : "unchecked"}
                onPress={() => setAnswer(opt)}
              ></RadioButton>
              <Text>{opt}</Text>
            </View>
          );
        })}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={(e) => nextQuestion(e, answer)}>
          <Text>Next Question</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default QuestionCard;

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: "80%",
    padding: 10,
  },
  title:{
      fontSize: 25,
      fontWeight: 'bold',
      alignSelf: 'center',
  },
  score:{
      alignSelf:'flex-end',
      padding: 10,
  },
  questionTitle:{
      fontSize: 17,
  },
  questionContent:{
      paddingVertical: 10,
  },
  option:{
      flexDirection: 'row',
      textAlign: 'center',
      alignItems: 'center'
  },
  buttonContainer:{
      alignItems: 'center',
      marginTop: 60,
  },
  button:{
      backgroundColor:'#17CDFF',
      paddingHorizontal: 14,
      paddingVertical: 6,
      borderRadius: 20,
      fontSize: 16,
      
  }
});
