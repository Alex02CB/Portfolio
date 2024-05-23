import {Routes,Route} from 'react-router-dom';
import Layout from '/src/components/Layout.jsx';
import About from '/src/components/About.jsx';
import Contact from '/src/components/Contact.jsx';
import Projects from '/src/components/Projects.jsx';
import SmoothScroll from './components/SmoothScroll/';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
  return (
    <SmoothScroll>
    <div>
        <Routes>
          <Route path='/' element={<Layout/>}> 
          <Route path='/' element={<About/>}/> 
          <Route path='projects' element={<Projects/>}/> 
          <Route path='contact' element={<Contact/>}/> 
          <Route path='*' element={<About/>}/> 
          </Route>
        </Routes>
     
    </div>
    </SmoothScroll>
  )
}

export default App
