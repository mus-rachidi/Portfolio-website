import SharedLayout from './components/SharedLayout';
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Project from './components/project';


function App() {
 
   return(
     <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
        
          <Route index element={<Home />} />

          <Route path='about' element={<About/>} />
          <Route path='portfolio' element={<Portfolio />} />
          <Route path='contact' element={<Contact />} />
          <Route path='project' element={<Project />} />
        </Route>
      </Routes>
     </BrowserRouter>
     </>
  )
 
   
}

export default App;