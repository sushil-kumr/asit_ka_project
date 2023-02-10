import { BrowserRouter as Router } from "react-router-dom"
import Routing from './routes';
import './assets/css/bootstrap.css';
import './assets/css/style.css';
import './assets/css/responsive.css'
// import './assets/css/owl.css'

export default function App() {
  return (

    <Router>

      <Routing />

    </Router>
    
  );
}
