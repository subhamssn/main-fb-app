import { useState } from "react";
import Card from "../shared/Card";
import propTypes from 'prop-types'

function FeedbackItem({id, item}) {

     const [rating, setRating] = useState(item.rating);
     const [feedback, setFeedback] = useState(
        item.text
     );

     

  return (
    <Card >

        <div className="num-display">{rating}</div>
        <div className="text-display">{feedback}</div>
        
      
    </Card>
  )
}

FeedbackItem.propTypes = {
    id: propTypes.number,
    item: propTypes.object,
}

export default FeedbackItem
