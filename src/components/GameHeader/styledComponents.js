import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: Solid 2px #ffffff;
  padding: 20px;
  border-radius: 15px;
  width: 80%;
`

export const GameName = styled.h1`
  height: 100%;
  width: 100px;
  font-size: 18px;
  font-family: 'Bree Serif';
  color: #ffffff;
`
export const ScoreContainer = styled.div`
  background-color: #ffffff;
  height: 100%;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;

  @media screen and (min-width: 768px) {
    width: 20%;
  }
`

export const ScoreTag = styled.p`
  color: #223a5f;
  font-family: 'Bree Serif';
  font-size: 20px;
  margin-top: 5px;
  margin-bottom: 5px;
`
export const ScoreValue = styled.p`
  color: #223a5f;
  font-size: 30px;
  font-family: 'Roboto';
  font-weight: 800;
  margin-top: 0;
  margin-bottom: 0;
`
