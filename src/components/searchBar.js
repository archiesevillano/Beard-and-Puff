import SearchItem from "./searchItem";

const SearchBar = ({ placeholderText }) => {
    return (
        <div className="search-bar">
            <input type="text" className="search-bar" autoComplete="off" placeholder={placeholderText} />
            <ul className="search-list">

            </ul>
            <button type="button" className="search-btn">
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
        </div>
    )
}

export default SearchBar;