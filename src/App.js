

import {Button} from 'react-bootstrap'
import AuthForm from './Components/AuthForm/AuthForm';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  WelcomePage  from './Components/WelcomePage/WelcomePage';

function App() {
  const email=localStorage.getItem('email')
  return (
    <>
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/login' element={ <AuthForm/>}/>
      <Route path='/welcome' element={<WelcomePage/>} />
    </Routes>
    </BrowserRouter>
   
    </>
  );
}

export default App;
