import './homepage.css';
import { Link } from 'react-router-dom';

function homepage() {
  return (
    <div>
      <div className="homepage">
        <div className="Homee">
          <h1 className="h1">WELCOME TO THE WORLD OF</h1>
          <h1 className="h1">WEB DEVELOPMENT</h1> 
          <Link to="/">
          <button className="button">Go to Home</button>
          </Link>
          </div>
          </div>      
      
    </div>
  )
}

export default homepage
