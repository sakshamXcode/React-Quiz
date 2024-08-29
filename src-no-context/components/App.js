import Header from './Header.js';
import { useEffect, useReducer } from 'react';
import Main from './Main.js';
import Loader from './Loader.js';
import Error from './Error.js';
import StartScreen from './StartScreen.js';
import Question from './Question.js';
import NextButton from './NextButton.js';
import Progress from './Progress.js';
import Finish from './Finish.js'
import Footer from './Footer.js';
import Timer from './Timer.js'
const initialState = { questions: [],
   status: 'loading',
    index:0,
     answer:null, 
     points:0,
    highscore:0,
  secondsRemaining:null,
};
const SECS_PER_QUESTIONS=30;

function reducer(state, action) 
{
  switch (action.type) 
  {
    case 'dataReceived':
      return {
        ...state,
        questions: action.payload,
        status: 'ready',
      };
    case 'dataFailed':
      return {
        ...state,
        status: 'error',
      };
      case 'start':
        return({...state, status:"active", secondsRemaining: state.questions.length * SECS_PER_QUESTIONS})
        case 'newAnswer':
          const question=state.questions.at(state.index)

          return ({...state, answer: action.payload,
             points: action.payload=== question.correctOption? state.points + question.points:state.points, 
             })

     case 'nextQuestion':
      return{...state, index:state.index+1, answer:null}
     
      case 'Finish':
        return{...state, status:'finished', highscore: state.points > state.highscore? state.points:state.highscore}

        case 'tick':
          return{...state,secondsRemaining: state.secondsRemaining-1, status:state.secondsRemaining===0?'finished':state.status}

          case 'restart':
            return{...initialState, questions:state.questions,highscore:state.highscore, status:'ready'}

          default:
        return state;

      }
    }

    export default function App() {
      const [{ questions , status, index, answer, points, highscore, secondsRemaining }, dispatch] = useReducer(reducer, initialState);
      
      const numQuestions= questions.length;
      const maxpossiblepoints= questions.reduce((prev,cur)=>prev + cur.points,0);
  useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'dataReceived', payload: data }))
      .catch((err) => dispatch({ type: 'dataFailed' }));
  }, []);

  return (
    <div className='app'>
      <Header />
      <Main>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && < StartScreen numQuestions={numQuestions} dispatch={dispatch}/>}
        {status==="active"&& 
        <>
        <Progress index={index}
         numQuestions={numQuestions}
          points={points}
          maxpossiblepoints={maxpossiblepoints} 
          answer={answer}/>
        <Question ques={questions[index]} dispatch={dispatch} answer={answer} />
        <Footer>
          <Timer dispatch={dispatch} secondsRemaining={secondsRemaining}/>
         <NextButton dispatch={dispatch} answer={answer} numQuestions={numQuestions} index={index} /> 
       </Footer>
        </>
         }
        { status==='finished'&& <Finish points={points} maxpossiblepoints={maxpossiblepoints} highscore={highscore} dispatch={dispatch} />}
      </Main>
    </div>
  );
}
 