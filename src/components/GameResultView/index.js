import {
  ResultView,
  GameResultContainer,
  ChoiceResult,
  ResultLabel,
  ResultImage,
  ResultTextContainer,
  GameStatus,
  CustomButton,
} from './styledComponents'

const GameResultView = props => {
  const {gameChoiceArray, gameResultText, restartGame} = props

  const onClickRestartGame = () => {
    restartGame()
  }
  return (
    <ResultView>
      <GameResultContainer>
        <ChoiceResult>
          <ResultLabel>YOU</ResultLabel>
          <ResultImage src={gameChoiceArray[0].imageUrl} alt="your choice" />
        </ChoiceResult>
        <ChoiceResult>
          <ResultLabel>OPPONENT</ResultLabel>
          <ResultImage
            src={gameChoiceArray[1].imageUrl}
            alt="opponent choice"
          />
        </ChoiceResult>
      </GameResultContainer>
      <ResultTextContainer>
        <GameStatus>{gameResultText}</GameStatus>
        <CustomButton type="button" onClick={onClickRestartGame}>
          PLAY AGAIN
        </CustomButton>
      </ResultTextContainer>
    </ResultView>
  )
}

export default GameResultView
