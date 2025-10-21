import { useState } from 'react'
import './App.css'
import AppStructure from './AppStructure'
import UserLogin from './user login register/UserLogin'
import { useLocation } from 'react-router-dom'
function App() {


  const url = useLocation().pathname;
  // console.log(url, 'screen url from app component')

  if (url === '/login') {
    return <UserLogin />;
  }

  // otherwise normal structure
  return (
    <>
    {
      localStorage.getItem('vendorRef') !== null ? 
      <>
      <AppStructure />
      </>
       : <UserLogin />
    }
    
    </>
  );
  
}

export default App
