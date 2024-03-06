

import {Button} from 'react-bootstrap'
import AuthForm from './Components/AuthForm/AuthForm';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  WelcomePage  from './Components/WelcomePage/WelcomePage';
import ComposeMail from './Components/ComposeMail/ComposeMail';
import Inbox from './Components/Inbox/Inbox';


function App() {
  const email=localStorage.getItem('email')
  return (
    <>
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/login' element={ <AuthForm/>}/>
      <Route path='/welcome' element={<WelcomePage/>} />
      <Route path='/compose-mail' element={<ComposeMail/>}/>
      <Route path='/inbox' element={<Inbox/>}/>
    </Routes>
    
    </BrowserRouter>
    
   
    </>
  );
}

export default App;
