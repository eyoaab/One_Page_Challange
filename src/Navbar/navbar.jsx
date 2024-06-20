import './navbar.css';
import { FaBeer } from 'react-icons/fa';

function navbar() {
  return (
    <>
    <div className="container">
        <div className="lefBar">
            <div className="logo">Shop now</div>
        </div>


        <div className="searcharea">
            <div className="placeforsearch">
            <div className="searchicon">
                <FaBeer />
            </div>
                <input type="text" placeholder="Search"className = "searchinput" /> 
            </div>     
        </div>

        <div className="rightBar">
            <div className="cart">
                <div className="carticon">
                <FaBeer />
                </div>
                <div className="word"> Profile</div>
              
                {/* <FaBeer /> */}
            </div>
        </div>

    </div>
    </>
  )
}

export default navbar
