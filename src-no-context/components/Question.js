import Options from "./Options"
export default function Question({ques,dispatch,answer})

{
    return(
        <div>
 <h4>
    {ques.question}
 </h4>
 <Options ques={ques}  dispatch={dispatch} answer={answer} />
        </div>
    )
}