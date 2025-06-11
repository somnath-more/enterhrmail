import React from 'react'
import { Route, Routes } from 'react-router'
import SignIn from './components/organisms/SignIn'
import Dashboard from './pages/Dashboard';
import './App.css'
import SignUp from './components/organisms/SignUp';
import SentToHrMail from './pages/SentToHrMail';
import ViewSentMail from './pages/ViewSentMail';


function App() {
  // const [isAuthenticated, setIsAuthenticated] = React.useState(false);





  return (
    <>
      {/* <p>Hello Personal Profile</p> */}
      {/* routes for sign in and dashboard */}
      <Routes>
          <Route path="/" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send-to-hr-mail" element={<SentToHrMail />} />
          <Route path="/view-sent-mails" element={<ViewSentMail />} />

      </Routes>
 
    </>
  )
}

export default App


