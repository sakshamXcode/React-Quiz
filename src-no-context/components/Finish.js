export default function Finish({points,maxpossiblepoints,highscore,dispatch})
{
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
    <span>HighScore  : <strong> {highscore} </strong> / {maxpossiblepoints}</span>

    <button className="btn btn-ui" onClick={()=>dispatch({type: "restart"})}>
Restart
        </button>    
    </>)
}