import { CryptoProvider } from './context/CryptoContext';
import {BrowserRouter as Router} from 'react-router-dom'
import Footer from './pages/Footer';
import Main from './pages/Main';
import Navbar from './pages/Navbar';

function App() {
  return (
    <CryptoProvider>
       <Router>
        <div className="app-container">
          <Navbar />
          <Main/>
          <Footer/>
        </div>
     </Router>
    </CryptoProvider>
  );
}

export default App;
