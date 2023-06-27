import FeedbackItem from "./FeedbackItem"
import propTypes from 'prop-types'

function FeedbackList({feedback}) {
  return (
    <>
    <div className="feedback-list">
      {feedback.map((item) => (
       <FeedbackItem id = {item.id} item = {item}/>
      )) }
    </div>
    </>
  )
}

FeedbackList.propTypes ={
      feedback: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.number.isRequired,
            text: propTypes.string.isRequired,
            rating: propTypes.number.isRequired

        })
      )
}
export default FeedbackList
