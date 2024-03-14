// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails
  const currentEmoji = () => {
    clickEmoji(id)
  }
  return (
    <li className="list_item">
      <button className="emoji-button" type="button" onClick={currentEmoji}>
        <img src={emojiUrl} className="emoji-img" alt={emojiName} />
      </button>
    </li>
  )
}
export default EmojiCard
