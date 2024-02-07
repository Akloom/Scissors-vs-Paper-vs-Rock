import styled from "styled-components"
import CounterWin from "./CounterWin/CounterWin"
import CounterDraw from "./CounterDraw/CounterDraw"
import CounterLose from "./CounterLose/CounterLose"


const Counters = styled.div`
  display: flex;
  align-items: center;
  gap: 55px;
`

const Counter = ({counterWin, counterLose, counterDraw}) => {
  return (
    <Counters>
      <CounterWin counterWin={counterWin} />
      <CounterDraw counterDraw={counterDraw} />
      <CounterLose counterLose={counterLose} />
    </Counters>
  )
}

export default Counter