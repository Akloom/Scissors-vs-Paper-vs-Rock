import styled from "styled-components"
import Button from "./Button/Button"

const ChoiceSection = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`

const ChoiceTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #060645;
`

const ChoiceVariable = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

const Choice = ({ click, play }) => {
  return (
    <ChoiceSection className="container">
      <ChoiceTitle>Pick one</ChoiceTitle>

      <ChoiceVariable>
        <Button image={'paper.png'} click={click} play={() => play('paper')} />
        <Button image={'rock.png'} click={click} play={() => play('rock')} />
        <Button image={'scissors.png'} click={click} play={() => play('scissors')} />
      </ChoiceVariable>
    </ChoiceSection>
  )
}

export default Choice