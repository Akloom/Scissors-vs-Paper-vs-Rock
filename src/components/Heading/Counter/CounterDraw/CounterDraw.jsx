import styled from "styled-components"

const Counter = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`

const Text = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: #060645;
`

const Num = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #1a0874;
`

const CounterDraw = ({counterDraw}) => {
  return (
    <Counter>
      <Text>Draws:</Text>
      <Num>{counterDraw}</Num>
    </Counter>
  )
}

export default CounterDraw