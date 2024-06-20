import Navbar from './Navbar/navbar.jsx';
import './app.css';
import Leftside from './Leftside/Leftside.jsx';
import Center from './Center/center.jsx';

function App() {
  return (
    <>
      <Navbar />

      <div className="Appcontainer">
        <div className="left"><Leftside /></div>
        <div className="center"><Center /></div>
        <div className="right">right</div>
      </div>
    </>
  );
}

export default App;
