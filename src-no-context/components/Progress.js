export default function Progress({index,numQuestions, points, maxpossiblepoints, answer})
{
    return(
    <header className="progress">
        <progress max={numQuestions} value={index + Number(answer!==null)}></progress>
             <p>
                   Questions <strong>{index}</strong> / {numQuestions}
             </p>
              <p>
                    <strong>{points} / {maxpossiblepoints}</strong></p>
      </header>)
}