import {v4 as uuidv4} from 'uuid'
import { BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom';
import Header from './components/Header'
import { useState } from 'react';
import feedbackData from './data/FeedbackData';
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink';
import { FeedbackProvider } from './context/FeedbackContext';

function App(){

    const [feedback, setFeedback] = useState(
        feedbackData
    )

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback,...feedback])
        
    }

    const deleteFeedback = (id) => {

        if(window.confirm('Are you sure you want to Delete?')){
            setFeedback( feedback.filter((item) => item.id!==id
            ))
        }
    }

    
    
    
    return (
    
    <FeedbackProvider>

    
        <Router>
        <Header  />
        <div className="container">

        <Routes>

            
            <Route exact path='/' element={
                <>
                
               <FeedbackForm handleAdd = {addFeedback}/>
               <FeedbackStats feedback={feedback}/>

               <FeedbackList 
                  feedback={feedback} handleDelete = {deleteFeedback}
               />
               <AboutIconLink />
               </> 
            }>
               

           </Route>

           <Route path='/about' element={<AboutPage />}/>
           </Routes>

          
           
        </div>

        </Router>

    </FeedbackProvider>
    )
}

export default App;