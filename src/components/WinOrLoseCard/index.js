// Write your code here.
import './index.css'

const WinOrLossCard = props => {
  const {winningStatus, totalEmojisLength, gameScore, openGamePage} = props
  const imgUrl = winningStatus
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const scoreMsg = gameScore === totalEmojisLength ? 'Best Score' : 'Score'
  const gameResult = gameScore === totalEmojisLength ? 'You Won' : 'You Lose'
  const showGamePage = () => {
    openGamePage(gameScore)
  }
  return (
    <div className="result-container">
      <img src={imgUrl} className="result-img" alt="win or lose" />
      <div className="result-details-container">
        <h1 className="result-mag">{gameResult}</h1>
        <p className="score-msg">{scoreMsg}</p>
        <p className="score-format">
          {gameScore}/{totalEmojisLength}
        </p>
        <button className="playAgain-button" onClick={showGamePage}>
          Play Again
        </button>
      </div>
    </div>
  )
}
export default WinOrLossCard
