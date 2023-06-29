import {FaTimes} from 'react-icons/fa'
import { useState } from "react";
import Card from "../shared/Card";
import propTypes from 'prop-types'

function FeedbackItem({item, handleDelete}) {

    
     

  return (
    <Card >

        <div className="num-display">{item.rating}</div>
        <button onClick= {() => handleDelete(item.id)} className='close'>
            <FaTimes color='purple'/>
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
