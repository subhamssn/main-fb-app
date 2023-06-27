import { useState } from "react";

function FeedbackItem({id, item}) {

     const [rating, setRating] = useState(item.rating);
     const [feedback, setFeedback] = useState(
        item.text
     );

     const handleClick = () => {
        setRating((prev) => {
             return (prev+1)
        });
     }

  return (
    <div className="card">

        <div className="num-display">{rating}</div>
        <div className="text-display">{feedback}</div>
        <button onClick={handleClick}>Click Here</button>
      
    </div>
  )
}

export default FeedbackItem
