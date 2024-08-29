export default function StartScreen({numQuestions,dispatch})
{
    return(
        <div className="start">
            <h2>
                WELCOME TO REACT QUIZ
            </h2>
            <h3>{numQuestions} Questions to test your Knowledge</h3>
            <button className="btn btn-ui" onClick={()=>dispatch({type:"start"})}>Let's Begin</button>
        </div>
    )
}