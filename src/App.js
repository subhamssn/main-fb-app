
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

    
    
    
    return (
    
    <FeedbackProvider>

    
        <Router>
        <Header  />
        <div className="container">

        <Routes>

            
            <Route exact path='/' element={
                <>
                
               <FeedbackForm />
               <FeedbackStats feedback={feedback}/>

               <FeedbackList />
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