import './App.css';
import AllBooks from './components/AllBooks/AllBooks';
import SignUp from './components/Authentications/SignUp';
import ContactUs from './components/ContactUs';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
const App = () => {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/allBooks' element={<AllBooks />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/contactus' element={<ContactUs />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
