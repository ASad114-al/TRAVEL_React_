
import { Link } from 'react-router-dom';

const Navgations = () => {
    return ( 
      <nav>
      <img src="../img/Logo.png" alt="" />
     <ul>
         <li id='homecolor'><Link to="/">Home</Link></li>
         <li><Link to="/Destinations">Destinations</Link></li>
         <li><Link to="/about">About</Link></li>
         <li><Link to="/partner">Partner</Link></li>
         <li className="login">login</li>
         <li className="register">register</li>
     </ul>
    </nav>
     );
}
 

export default Navgations