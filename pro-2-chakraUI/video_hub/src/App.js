import Headers from './components/Headers';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import VideoComp from './components/VideoComp';
import Uploads from './components/Uploads';
import Login from './components/Login';
import Signup from './components/Signup';
import ForgetPassword from './components/ForgetPassword';


function App() {
  return (
    <Router>
      <Headers />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<VideoComp/>} />
        <Route path='/uploads' element={<Uploads/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/forgetpassword' element={<ForgetPassword/>}></Route>
        
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
