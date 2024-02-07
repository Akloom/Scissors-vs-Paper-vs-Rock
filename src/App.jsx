import { useState } from 'react';
import './App.css'
import cn from 'clsx'
import Choice from './components/Choice/Choice'
import Heading from './components/Heading/Heading'

function App() {

  const [result, setResult] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [myChoice, setMyChoice] = useState('');
  const [counterWin, setCounterWin] = useState(0);
  const [counterLose, setCounterLose] = useState(0);
  const [counterDraw, setCounterDraw] = useState(0);
  const [showChoice, setShowChoice] = useState(true)
  const [game, setGame] = useState('')

  const visible = () => {
    setShowChoice(true)
    setComputerChoice('')
    setMyChoice('')
  }

  const resetCounters = () => {
    setCounterWin(0);
    setCounterLose(0);
    setCounterDraw(0);
  }

  const compChoice = () => {
    const variables = ['rock', 'scissors', 'paper']
    return variables[Math.floor(Math.random() * variables.length)]
  }

  const play = (choice) => {
    setShowChoice(false)

    setTimeout(() => {
      const computerChoice = compChoice();
      let wins = 0;
      let draws = 0;
      let loses = 0

      if (choice === computerChoice) {
        setResult("Draw")
        draws = counterDraw + 1
        setCounterDraw(draws)
        setTimeout(() => {
          visible()
          setResult("")
        }, 3000);
      } else if (
        choice === 'rock' && computerChoice === 'scissors' ||
        choice === 'paper' && computerChoice === 'rock' ||
        choice === 'scissors' && computerChoice === 'paper'
      ) {
        setResult("You won")
        wins = counterWin + 1
        setCounterWin(wins)
        setTimeout(() => {
          visible()
          setResult("")
        }, 3000);
      } else {
        setResult("You lose")
        loses = counterLose + 1;
        setCounterLose(loses)
        setTimeout(() => {
          visible()
          setResult("")
        }, 3000);
      }

      if (wins >= 5 || loses >= 5) {
        resetCounters()

        if (wins > loses) {
          setGame('You are winner!')
        } else {
          setGame('You are loser!')
        }
      }


      setComputerChoice(computerChoice)
    }, 2000);
    setMyChoice(choice);
  }

  const gameClasses = ['game']

  const restartGame = () => {
    setGame(false)
  }

  return (
    <div className="wrapper">
      {
        !game && (
          <>
            {
              showChoice && (
                <>
                  <Heading counterWin={counterWin} counterLose={counterLose} counterDraw={counterDraw} />
                  <Choice play={play} />
                </>
              )
            }

            {
              myChoice && (
                <div className={gameClasses.join(" ")}>
                  {play && <img src={`/img/${myChoice}.png`} className='game__image me' />}
                  <div className={cn('game__decoration me__decore', result === 'You won' && 'is-active')}></div>

                  {
                    computerChoice && (
                      <>
                        <h2 className='game__text'>{result}</h2>

                        {play && <img src={`/img/${computerChoice}.png`} className='game__image computer' />}
                        <div className={cn('game__decoration computer__decore', result === 'You lose' && 'is-active')}></div>
                      </>
                    )
                  }

                </div>
              )
            }
          </>
        )
      }

      {
        game && (
          <div className="game__restart">
            <h1 className='game__restart-title'>{game}</h1>
            <button onClick={restartGame} className='game__restart-btn'>Попробовать снова?</button>

          </div>
        )
      }

    </div>
  )
}

export default App
