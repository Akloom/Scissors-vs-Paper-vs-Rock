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
  color: #cd1212;
`

const CounterLose = ({counterLose}) => {
  return (
    <Counter>
      <Text>Loses:</Text>
      <Num>{counterLose}</Num>
    </Counter>
  )
}

export default CounterLose