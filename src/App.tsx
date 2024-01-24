import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home  from './pages/home';
import About  from './pages/about';
import Eventpage from './pages/events';
import GalleryPage from './pages/gallery';
import MouseFollower from './components/mousemover/mousefollower';


function App() {
    return (
        <>
          <BrowserRouter>
            <Routes>
              <Route index element = {<Home /> } />
              <Route path='/' element =  {<Home /> } />
              <Route path='/about' element =  {<About /> } />
              <Route path='/events' element =  {<Eventpage /> } />
              <Route path='/gallery' element =  {<GalleryPage /> } />
            </Routes>
          </BrowserRouter>  
          <MouseFollower /> 
        </>
    );
}

export default App;
