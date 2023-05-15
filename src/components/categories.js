import { useState } from "react";
import { categoryList } from "./settings";

const Categories = () => {

    const [active, setActive] = useState();

    return (
        <div className="categories-section">
            <button type="button" className="category-block">All</button>
            {categoryList.map(item => <button type="button" className="category-block">{item}</button>)}
        </div>
    );
}

export default Categories;