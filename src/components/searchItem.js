import logo from "../logo.png";

const SearchItem = ({ text }) => {
    return (
        <div className="search-item" role="button">
            <div className="image-container">
                <img src={logo} alt="Product Image" />
            </div>
            <p>{text}</p>
        </div>
    );
}

export default SearchItem;