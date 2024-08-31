import { useQuiz } from "../contexts/QuizContext"

export default function StartScreen()
{
    const {dispatch}=useQuiz();
    return(
        <div className="start">
            <h2>
                WELCOME TO REACT QUIZ
            </h2>
            <img src='icon.png' alt='React logo' />
            <button className="btn btn-ui" onClick={()=>dispatch({type:"start"})}>LET'S REACT</button>
        </div>
    )
}