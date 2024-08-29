import { useReducer, useEffect, useContext, createContext } from "react";

// Predefined questions array
const questionsData = [
  {
    question: "Which is the most popular JavaScript framework?",
    options: ["Angular", "React", "Svelte", "Vue"],
    correctOption: 1,
    points: 10
  },
  {
    question: "Which company invented React?",
    options: ["Google", "Apple", "Netflix", "Facebook"],
    correctOption: 3,
    points: 10
  },
  // ... rest of the questions
];

const initialState = {
  questions: [],
  status: 'loading',
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null,
};

const QuizContext = createContext();

const SECS_PER_QUESTIONS = 30;

function reducer(state, action) {
  switch (action.type) {
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
      return { ...state, status: "active", secondsRemaining: state.questions.length * SECS_PER_QUESTIONS };
    case 'newAnswer':
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points: action.payload === question.correctOption ? state.points + question.points : state.points,
      };
    case 'nextQuestion':
      return { ...state, index: state.index + 1, answer: null };
    case 'Finish':
      return { ...state, status: 'finished', highscore: state.points > state.highscore ? state.points : state.highscore };
    case 'tick':
      return { ...state, secondsRemaining: state.secondsRemaining - 1, status: state.secondsRemaining === 0 ? 'finished' : state.status };
    case 'restart':
      return { ...initialState, questions: state.questions, highscore: state.highscore, status: 'ready' };
    default:
      return state;
  }
}

function QuizProvider({ children }) {
  const [{ questions, status, index, answer, points, highscore, secondsRemaining }, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // Simulating fetch by directly dispatching the data
    dispatch({ type: 'dataReceived', payload: questionsData });
  }, []);

  return (
    <QuizContext.Provider value={{ questions, status, index, answer, points, highscore, secondsRemaining, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined)
    throw new Error("QuizContext was used outside of the QuizProvider");
  return context;
}

export { QuizProvider, useQuiz };
