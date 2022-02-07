import { CryptoProvider } from './context/CryptoContext';
import {BrowserRouter as Router} from 'react-router-dom'
import Footer from './pages/Footer';
import Main from './pages/Main';

function App() {

  return (
    <CryptoProvider>
       <Router>
        <div className="app-container">
          <Main/>
          <Footer/>
        </div>
     </Router>
    </CryptoProvider>
  );
}

export default App;
