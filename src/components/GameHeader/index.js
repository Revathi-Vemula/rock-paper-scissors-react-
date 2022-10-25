import {
  Header,
  GameName,
  ScoreContainer,
  ScoreTag,
  ScoreValue,
} from './styledComponents'

const GameHeader = props => {
  const {score} = props

  return (
    <Header>
      <GameName>ROCK PAPER SCISSORS</GameName>
      <ScoreContainer>
        <ScoreTag>Score</ScoreTag>
        <ScoreValue>{score}</ScoreValue>
      </ScoreContainer>
    </Header>
  )
}

export default GameHeader
