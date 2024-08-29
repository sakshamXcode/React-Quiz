import { useQuiz } from "../contexts/QuizContext"
import Options from "./Options"
export default function Question()

{
    const {questions,index,dispatch,answer}=useQuiz();
    const ques=questions[index];
    return(
        <div>
 <h4>
    {ques.question}
 </h4>
 <Options ques={ques}  dispatch={dispatch} answer={answer} />
        </div>
    )
}