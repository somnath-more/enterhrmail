import React from 'react'
import { Route, Routes } from 'react-router'
import SignIn from './components/organisms/SignIn'
import Dashboard from './pages/Dashboard';
import './App.css'
import SignUp from './components/organisms/SignUp';


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

      </Routes>
 
    </>
  )
}

export default App


