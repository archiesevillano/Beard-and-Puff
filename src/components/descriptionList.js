import { useState, useRef } from "react";

const DescriptionList = ({ close, listItems, editList }) => {
    const inputRef = useRef(null);
    const [list, setList] = useState(listItems);
    const [inputVal, setInputVal] = useState("");

    const handleRemoveAll = () => {
        setList([]);
    }

    const handleAdd = () => {
        if (list.includes(inputVal) == false && inputVal.length > 0) {
            setList(list => [...list, inputVal])
            setInputVal("");
            inputRef.current.value = "";
        }
        else {
            if (inputVal.length > 0) {
                alert(`'${inputVal}' already exists in the list`);
            }
            else {
                alert("Please enter a description value in the field");
                inputRef.current.focus();
            }

        }
    }

    const handleRemove = () => {
        if (list.length > 0) {
            setList(list.filter(item => item !== list[list.length - 1]));
        }
    }

    return (
        <div className="desc-list">
            <div className="header-container">
                <h1>Add Product Description</h1>
                <div className="input-contents">
                    <div className="input-box">
                        <label htmlFor="description-input">Description</label>
                        <input ref={inputRef} type="text" id="description-input" className="input-field" onChange={e => setInputVal(e.target.value)} />
                    </div>
                    <div className="button-controls">
                        <button type="button" className="add-btn" onClick={handleAdd}>Add</button>
                        <button type="button" className="add-btn" onClick={handleRemove}>Remove</button>
                        <button type="button" className="add-btn" onClick={handleRemoveAll}>Remove all</button>
                    </div>
                </div>
            </div>
            <ul className="desc-items">
                {list.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
            <div className="button-collection">
                <button type="button" className="submit-btn" onClick={() => {
                    editList(list);
                    close();
                }}>Done</button>
                <button type="button" className="cancel-btn" onClick={close}>Cancel</button>
            </div>
        </div>
    );
}

export default DescriptionList;