import styled from "styled-components"

const Btn = styled.button`
  cursor: pointer;
  padding: 10px;
  box-sizing: border-box;
  max-width: 300px;
  width: 100%;
  border: 1px solid #a4a4a4;
  background: transparent;
  transition: .6s all;

  &:hover{
    border-color: #ffa500;
    background: #ffa500;
  }
`
const Image = styled.img`
  width: 100%;
  height: 300px;
`

const Button = ({ image, click, play }) => {
  return (
    <Btn onClick={play}>
      <Image src={`img/${image}`} alt="variable" />
    </Btn>
  )
}

export default Button