import {FaTimes, FaEdit} from 'react-icons/fa'
import { useContext, useState } from "react";
import Card from "../shared/Card";
import propTypes from 'prop-types'
import FeedbackContext from '../context/FeedbackContext';

function FeedbackItem({item}) {
    
  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)
    
     

  return (
    <Card >

        <div className="num-display">{item.rating}</div>
        <button onClick= {() => deleteFeedback(item.id)} className='close'>
            <FaTimes color='purple'/>
        </button>
        <button onClick={() => editFeedback(item)} className='edit'>
          <FaEdit color='purple'/>
        </button>
        <div className="text-display">{item.text}</div>
        
      
    </Card>
  )
}

FeedbackItem.propTypes = {
    id: propTypes.number,
    item: propTypes.object,
}

export default FeedbackItem
