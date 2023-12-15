import './index.scss';
import React from 'react'

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
];

function Result({result, setResult, setStep, setFinal}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>{`Вы отгадали ${result} ответа из 3`}</h2>
      <button onClick={()=>{
        setStep(0)
        setResult(0)
        setFinal(false)
      }}>Попробовать снова</button>
    </div>
  );
}

function Game({step, setStep, question, result, setResult, setFinal}) {
  return (
    <>
      <div className="progress">
        <div style={{width: `${(step/3*100)}%`}} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((key, index)=><li onClick={()=>{
          if (index == question.correct){setResult(result + 1)}
          setStep(step + 1)
          if (step == 2){setFinal(true)}
          }}>{key}</li>)}
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = React.useState(0)
  const [result, setResult] = React.useState(0)
  const [final, setFinal] = React.useState(false)
  const question = questions[step]
  return (
    <div className="App">
      {!final && <Game step={step} setStep={setStep} question={question} result={result} setFinal={setFinal} setResult={setResult}/>}
      {final && <Result result={result} setResult={setResult} setStep={setStep} setFinal={setFinal}/>}
    </div>
  );
}

export default App;
