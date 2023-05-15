import "./components.css";
import "./../style.css";
import logo from "./../logo.png";

const FloatingNav = ({ visible, closeFunc }) => {
    return (
        <div className="floating-nav" style={{ display: (visible === true ? "block" : "none"), }}>

            <header className="nav-header">
                <img src={logo} alt="Not Available" />
                <h1 className="application-name">Beard and Puff Vape Shop</h1>
            </header>
            <ul>
                <li>
                    <button type="button" className="settings-btn fbtns">
                        Settings
                    </button>
                </li>
                <li>
                    <button type="button" className="logout-btn fbtns">
                        Log Out
                    </button>
                </li>
            </ul>
            <button type="button" className="btn close-btn" onClick={closeFunc}>Close</button>
        </div>
    )
}

export default FloatingNav;