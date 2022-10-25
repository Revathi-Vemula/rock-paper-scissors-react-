import styled from 'styled-components'

export const GameContainer = styled.div`
  background-color: #223a5f;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-right: 30px;
`
export const ChoiceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 400px;
  margin-top: 60px;
  margin-bottom: 40px;

  @media screen and (max-width: 567px) {
    width: 250px;
    height: 250px;
    margin-left: 15px;
  } ;
`
export const ChoiceButton = styled.button`
  background-color: transparent;
  border-style: none;
  width: 150px;
  height: 150px;

  @media screen and (max-width: 567px) {
    width: 100px;
    height: 100px;
    margin-top: 0px;
    margin-right: 20px;
  }
`
export const ChoiceImage = styled.img`
  width: 150px;
  height: 150px;

  @media screen and (max-width: 567px) {
    width: 100px;
    height: 100px;
  }
`
export const RulesView = styled.div`
  align-self: flex-end;
  margin-top: auto;
  @media screen and (max-width: 576px) {
    margin-bottom: 40px;
  }
`
export const PopupView = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vw;
  justify-content: space-between;
  padding: 10px;
  @media screen and (max-width: 576px) {
    height: 280px;
    width: 100%;
  }
`

export const PopupImage = styled.img`
  width: 100%;
  height: 100%;
  margin-top: auto;
`
