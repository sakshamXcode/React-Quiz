import { useQuiz } from "../contexts/QuizContext";

export default function NextButton()
{

  const {dispatch,answer,questions,index}=useQuiz();
  const numQuestions= questions.length;
    if(answer===null) return null;
  
  if(index<numQuestions-1)  return(
        <button className="btn btn-ui" onClick={()=>dispatch({type: "nextQuestion"})}>
Next
        </button>
    )
  if(index===numQuestions-1)  return(
        <button className="btn btn-ui" onClick={()=>dispatch({type: "Finish"})}>
Finish
        </button>
    )
}