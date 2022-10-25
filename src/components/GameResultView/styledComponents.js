import styled from 'styled-components'

export const ResultView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 40px;
`
export const GameResultContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 50vw;
  margin-bottom: 20px;
`
export const ChoiceResult = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ResultLabel = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 800;
  font-size: 18px;
`

export const ResultImage = styled.img`
  height: 100px;
  width: 100px;

  @media screen and (min-width: 768px) {
    height: 120px;
    width: 120px;
  }
`
export const ResultTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
`
export const GameStatus = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 800;
  font-size: 23px;
`

export const CustomButton = styled.button`
  width: 150px;
  padding: 10px;
  color: #223a5f;
  font-family: 'Bree Serif';
  font-size: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border-style: none;
  outline: none;
`
