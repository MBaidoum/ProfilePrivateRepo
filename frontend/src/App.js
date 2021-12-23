import { Navbar } from 'react-bootstrap';
import './App.css';
import Footer from './components/Footer';
import NavbarProfile from './components/Navbar';
import PrivacyForm from './components/PrivacyForm';

function App() {
  return (
    <div className="App">
          <NavbarProfile />
          <PrivacyForm />
          {/* <Footer /> */}
    </div>
  );
}

export default App;
