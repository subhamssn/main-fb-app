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
import Card from './shared/Card';

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

           <Card>
            <NavLink to='/' activeClassName='active'>
                Home
            </NavLink>

            <NavLink to='/about' activeClassName='active'>
                About
            </NavLink>
           </Card>

           
        </div>

        </Router>
    )
}

export default App;