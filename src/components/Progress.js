import { useQuiz } from "../contexts/QuizContext"

export default function Progress()
{
      const { index,
       points,questions,
       answer}=useQuiz();
       const maxpossiblepoints= questions.reduce((prev,cur)=>prev + cur.points,0);
       const numQuestions= questions.length;
          
    return(
    <header className="progress">
        <progress max={numQuestions} value={index+1 + Number(answer!==null)}></progress>
             <p>
                   Questions <strong>{index}</strong> / {numQuestions}
             </p>
              <p>
                    <strong>{points} / {maxpossiblepoints}</strong></p>
      </header>)
}