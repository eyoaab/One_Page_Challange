import './center.css'
import { Link } from 'react-router-dom';

function center() {
  return (
    <div>
        <div className="centercontainer">
            <h1 className="centertext">hello ... </h1>

            <Link to="/homeTwo">
            <button className="button">Go to Next Page</button>
            </Link>

        </div>
      
    </div>
  )
}

export default center
