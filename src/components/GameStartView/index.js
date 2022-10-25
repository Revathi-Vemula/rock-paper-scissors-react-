import {Component} from 'react'
import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'
import GameHeader from '../GameHeader'
import GameResultView from '../GameResultView'
import 'reactjs-popup/dist/index.css'
import './index.css'

import {
  GameContainer,
  ChoiceContainer,
  ChoiceButton,
  ChoiceImage,
  PopupView,
  PopupImage,
  RulesView,
} from './styledComponents'

const gameResultTextArray = {
  youWon: 'YOU WON',
  youLose: 'YOU LOSE',
  itsDraw: 'IT IS DRAW',
}

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class GameStartView extends Component {
  state = {
    gameScore: 0,
    gameChoiceArray: [choicesList[0], choicesList[1]],
    isGameShow: true,
    gameResultText: gameResultTextArray.youWon,
  }

  getResult = (userChoice, opponentChoice) => {
    if (userChoice.id === 'ROCK') {
      switch (opponentChoice.id) {
        case 'PAPER':
          return gameResultTextArray.youLose
        case 'SCISSORS':
          return gameResultTextArray.youWon
        default:
          return gameResultTextArray.itsDraw
      }
    } else if (userChoice.id === 'PAPER') {
      switch (opponentChoice.id) {
        case 'ROCK':
          return gameResultTextArray.youWon
        case 'SCISSORS':
          return gameResultTextArray.youLose
        default:
          return gameResultTextArray.itsDraw
      }
    } else {
      switch (opponentChoice.id) {
        case 'PAPER':
          return gameResultTextArray.youWon
        case 'ROCK':
          return gameResultTextArray.youLose
        default:
          return gameResultTextArray.itsDraw
      }
    }
  }

  checkResult = id => {
    const {gameScore} = this.state
    const yourChoice = choicesList.filter(eachChoice => eachChoice.id === id)
    const opponentChoice =
      choicesList[Math.floor(Math.random() * choicesList.length)]
    const resultText = this.getResult(yourChoice[0], opponentChoice)
    let newScore = gameScore
    if (resultText === gameResultTextArray.youWon) {
      newScore = gameScore + 1
    } else if (resultText === gameResultTextArray.youLose) {
      newScore = gameScore - 1
    } else {
      newScore = gameScore
    }

    this.setState({
      gameScore: newScore,
      gameResultText: resultText,
      isGameShow: false,
      gameChoiceArray: [yourChoice[0], opponentChoice],
    })
  }

  restartGame = () => {
    this.setState({isGameShow: true})
  }

  appendGame = () => (
    <ChoiceContainer>
      {choicesList.map(eachChoice => (
        <ChoiceButton
          onClick={() => this.checkResult(eachChoice.id)}
          data-testid={`${eachChoice.id.toLowerCase()}Button`}
          key={eachChoice.id}
        >
          <ChoiceImage src={eachChoice.imageUrl} alt={eachChoice.id} />
        </ChoiceButton>
      ))}
    </ChoiceContainer>
  )

  appendResults = () => {
    const {gameChoiceArray, gameResultText} = this.state

    return (
      <GameResultView
        gameChoiceArray={gameChoiceArray}
        gameResultText={gameResultText}
        restartGame={this.restartGame}
      />
    )
  }

  render() {
    const {gameScore, isGameShow} = this.state

    return (
      <GameContainer>
        <GameHeader score={gameScore} />
        {isGameShow ? this.appendGame() : this.appendResults()}
        <RulesView>
          <Popup
            modal
            trigger={
              <button type="button" className="trigger-button">
                Rules
              </button>
            }
          >
            {close => (
              <PopupView>
                <button
                  type="button"
                  className="trigger-button-close"
                  onClick={() => close()}
                >
                  <RiCloseLine />
                </button>
                <PopupImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </PopupView>
            )}
          </Popup>
        </RulesView>
      </GameContainer>
    )
  }
}

export default GameStartView
