import { CryptoProvider } from './context/CryptoContext';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Footer from './pages/Footer';
import Navbar from './pages/Navbar';
import Main from './pages/Main';
import Details from './layout/Details';

function App() {

  return (
    <CryptoProvider>
       <Router>
        <div className="app-container">
          <Navbar/>
          <Main/>
          <Footer/>
        </div>
     </Router>
    </CryptoProvider>
  );
}

export default App;
