const suffleArray = (arr)=>{
    return [...arr].sort(()=>0.5 - Math.random())
    
}
const getQuestions = async () =>{
     const res = await fetch('https://opentdb.com/api.php?amount=10&diffculty=easy&type=multiple')
     const {results} = await res.json();
     const questions = results.map((item)=>{
        return {
            question: item.question,
            answer: item.correct_answer,
            option: suffleArray(item.incorrect_answers.concat(item.correct_answer))
        }
    })
    
    return questions;
}

export default getQuestions;