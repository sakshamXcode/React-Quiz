import { useQuiz } from "../contexts/QuizContext";

export default function Options()
{
    const {questions,index, dispatch,answer}= useQuiz();
    const ques=questions[index];
    const hasAnswered=answer!==null;
    return(<div>
        <div className="options"> 
    {ques.options.map((option,index)=>
    <button className={`btn btn-option ${index===answer? "answer": ""} 
    ${hasAnswered?index===ques.correctOption?"correct":"wrong":""}`} 
    key={option} 
    disabled={hasAnswered}
    onClick={()=>dispatch({type:'newAnswer', payload:index})}>
        {option}
    </button>)}
    </div>
        </div>
    )
}