import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Page/Home';
import Profile  from './Page/Profile';
import NavigationTopBar from './Page/NavBar';
import Task from './Page/Task';
import Counter from './TaskPage/Counter'

export default function App(){
  return(
    <div>
       <BrowserRouter>
         <NavigationTopBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/profile" element={<Profile/>} />
          <Route path="/task" element={<Task/>}/>
          <Route path="/counter" element={<Counter/>} />
        </Routes>
       </BrowserRouter>
    </div>
  )
}