/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'

import './index.css'

import NavBar from '../NavBar'

import WinOrLossCard from '../WinOrLoseCard/index'

import EmojiCard from '../EmojiCard'

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    clickedEmojiList: [],
    gameOverStatus: false,
    statusOfWinOrLoss: false,
  }

  shuffledEmojiIsList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  finishGameAndSetTopScore = gameScore => {
    const {emojisList} = this.props
    if (gameScore === emojisList.length) {
      this.setState(preveState => ({
        gameOverStatus: !preveState.gameOverStatus,
        statusOfWinOrLoss: !preveState.statusOfWinOrLoss,
      }))
    } else {
      this.setState(preveState => ({
        gameOverStatus: !preveState.gameOverStatus,
      }))
    }
  }

  clickEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojiList, score} = this.state
    const isEmojiPresent = clickedEmojiList.includes(id)
    const clickedEmojiLength = clickedEmojiList.length
    if (isEmojiPresent) {
      this.finishGameAndSetTopScore(clickedEmojiLength)
    } else {
      if (emojisList.length - 1 === clickedEmojiLength) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(previousState => ({
        clickedEmojiList: [...previousState.clickedEmojiList, id],
        score: previousState.score + 1,
      }))
    }
  }

  openGamePage = userScore => {
    const {topScore, gameOverStatus} = this.state
    if (userScore > topScore) {
      this.setState(preveState => ({
        gameOverStatus: !preveState.gameOverStatus,
        topScore: userScore,
        score: 0,
        clickedEmojiList: [],
      }))
    } else {
      this.setState(preveState => ({
        gameOverStatus: !preveState.gameOverStatus,
        score: 0,
        clickedEmojiList: [],
      }))
    }
  }

  render() {
    const shuffledEmojisList = this.shuffledEmojiIsList()
    const {
      score,
      topScore,
      clickedEmojiList,
      gameOverStatus,
      statusOfWinOrLoss,
    } = this.state

    const bodyContainerClass = gameOverStatus
      ? 'result-class'
      : 'game-playing-class'

    return (
      <>
        <div className="bg-container">
          <div className="nav-container">
            <NavBar
              gameStatus={gameOverStatus}
              gameScore={score}
              gameTopScore={topScore}
            />
          </div>
          <div className={`body-container ${bodyContainerClass}`}>
            {gameOverStatus ? (
              <WinOrLossCard
                winningStatus={statusOfWinOrLoss}
                totalEmojisLength={shuffledEmojisList.length}
                gameScore={score}
                openGamePage={this.openGamePage}
              />
            ) : (
              <ul className="emoji-container">
                {shuffledEmojisList.map(each => (
                  <EmojiCard
                    key={each.id}
                    emojiDetails={each}
                    clickEmoji={this.clickEmoji}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </>
    )
  }
}

export default EmojiGame
