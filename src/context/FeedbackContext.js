import { createContext, useState } from "react";
import {v4 as uuidv4} from 'uuid'
import feedbackData from "../data/FeedbackData";

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState(feedbackData);

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        isEditing : false
    })

    const deleteFeedback = (id) => {

        if(window.confirm('Are you sure you want to Delete?')){
            setFeedback( feedback.filter((item) => item.id!==id
            ))
        }
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback,...feedback])
        
    }  

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            isEditing : true

            
        })
    }

    const updateFeedback = (id, updItem) => {

        setFeedback(feedback.map((item) => item.id === id ? {...item, ...updItem} : item))
        
    }




    return (
        <FeedbackContext.Provider 
        value={{
            feedback,
            deleteFeedback,
            addFeedback,
            editFeedback,
            feedbackEdit,
            updateFeedback,
        }}>
            { children }
        </FeedbackContext.Provider>
    )
}


export default FeedbackContext