import { Link } from "react-router-dom";
import "./navbar.scss"

const Navbar = () => {
  return (
    <div className='navbar'>
        <nav>
            <span>Shopping</span>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="orders">Order</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar

