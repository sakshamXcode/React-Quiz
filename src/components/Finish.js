import { useQuiz } from "../contexts/QuizContext";
export default function Finish()
{
const {points,highscore,dispatch,questions} = useQuiz();
  const maxpossiblepoints= questions.reduce((prev,cur)=>prev + cur.points,0);
    const percentage=(points/maxpossiblepoints)*100;
    let emoji;
    if(percentage===100) emoji='😁'
    if(percentage>=80 && percentage <100) emoji='😊'
    if(percentage<80 && percentage>= 50) emoji='😒'
    if(percentage<50) emoji='☠️'
    return(<>
    <p className="result">
        <span>{emoji}</span>
        You scored <strong>{points}</strong> out of {maxpossiblepoints}  ({Math.ceil(percentage)} %)
    
    </p>
    <div className="strong" >
    <h2>   HighScore  : <strong> {highscore} </strong> / {maxpossiblepoints}</h2>
    </div>
    <button className="btn btn-ui" onClick={()=>dispatch({type: "restart"})}>Restart</button>   
    </>)
}