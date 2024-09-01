import Header from './Header';
import Main from './Main';
import Loader from './Loader';
import Error from './Error';
import StartScreen from './StartScreen';
import Question from './Question';
import NextButton from './NextButton';
import Progress from './Progress';
import Finish from './Finish.js'
import Footer from './Footer.js';
import Timer from './Timer.js';
import Contact from '../components/Contact.js'
import { useQuiz } from '../contexts/QuizContext.js';


    export default function App()
{
     
    const {status}= useQuiz();
  return (
    <div className='app'>
      <Header />

      <Main>


        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && < StartScreen/>}
        {status==="active"&& 
        <>
        <Progress/>
        <Question  />
        <Footer>
          <Timer />
         <NextButton /> 
       </Footer>
        </>
         }
        { status==='finished'&& <Finish />}
      </Main>
      <h1>Contact Saksham :</h1>
        <Contact/> 
       
    </div>
  );
}
 