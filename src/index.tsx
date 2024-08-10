import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './index.css';
import Sidebar from './components/Sidebar';
import About from './pages/about';
import Home from './pages/index'
import Resume from './pages/resume';
import Programming from './pages/programming';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/about" Component={About} />
        <Route path="/resume" Component={Resume} />
        <Route path="/programming" Component={Programming} />
      </Routes>
    </Router>
  </React.StrictMode>
);