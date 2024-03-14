// Write your code here.
import './index.css'

const NavBar = props => {
  const {gameStatus, gameScore, gameTopScore} = props

  return (
    <nav className="navClass">
      <div className="logo-name-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo-img"
        />
        <h1 className="emoji-header">Emoji Game</h1>
      </div>

      {!gameStatus && (
        <>
          <p className="score-styling">Score: {gameScore}</p>
          <p className="score-styling">Top Score: {gameTopScore}</p>
        </>
      )}
    </nav>
  )
}

export default NavBar
