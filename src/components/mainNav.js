import { Link } from "react-router-dom";
import "./components.css";
import logo from "../logo.png";

const MainNav = () => {
    return (
        <nav className='app-navigation'>
            <div className="logo-container">
                <img src={logo} alt="Brand Image" />
            </div>
            <ul>
                <li>
                    <Link to="/">
                        <span className="material-symbols-outlined">
                            dashboard
                        </span>
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link to="/productInventory">
                        <span className="material-symbols-outlined">
                            inventory_2
                        </span>
                        Inventory
                    </Link>
                </li>
                <li>
                    <Link to="/shopProducts">
                        <span className="material-symbols-outlined">
                            shopping_cart
                        </span>
                        Shop
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default MainNav;