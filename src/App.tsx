import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home  from './pages/home';
import About  from './pages/about';
import Eventpage from './pages/events';


function App() {
    return (
        <>
          <BrowserRouter>
            <Routes>
              <Route index element = {<Home /> } />
              <Route path='/home' element =  {<Home /> } />
              <Route path='/about' element =  {<About /> } />
              <Route path='/events' element =  {<Eventpage /> } />
            </Routes>
          </BrowserRouter>   
        </>
    );
}

export default App;
