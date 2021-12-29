import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PrivacyPage from './pages/PrivacyPage';

function App() {
  return (
      <div>
        <Router>
          <div>
              <Routes>
                <Route path='/PrivacyPage' element={<PrivacyPage />} />
              </Routes>
          </div>
        </Router>
      </div>
  );
}

export default App;
