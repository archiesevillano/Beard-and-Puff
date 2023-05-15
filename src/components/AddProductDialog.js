import { useEffect, useRef, useState } from "react";
import DescriptionList from "./descriptionList";
import { categoryList, brands } from "./settings";
import axios from 'axios';
import { uploadDataUrlImage } from "../firebase";

const AddProductDialog = ({ close }) => {

    const fileLabel = useRef(null);
    const [imageFile, setImageFile] = useState(null);
    const formRef = useRef(null);

    const [descList, setDescList] = useState(false);
    const [descItems, setDescItems] = useState([]);
    const descriptionItemsLabel = useRef(null);

    const [name, setName] = useState(null); //product name
    const [price, setPrice] = useState(0); //product price
    const [stock, setStock] = useState(0); //product stock
    const [brand, setBrand] = useState(null); //product brand
    const [category, setCategory] = useState(null); //product category

    useEffect(() => {
        if (imageFile !== undefined && imageFile !== null && imageFile !== "") {
            fileLabel.current.textContent = "Change Image";
        }
        else {
            fileLabel.current.textContent = "Upload an image";
        }

        if (descItems.length > 0) {
            descriptionItemsLabel.current.textContent = `${descItems.length} items`;
        } else {
            descriptionItemsLabel.current.textContent = `No items yet`;
        }

    }, [imageFile, descItems]);

    const addProduct = async () => {

        if (imageFile !== null && imageFile !== undefined) {
            if (name !== "" && name !== null) {
                if (price !== undefined && price !== null) {
                    if (stock !== null && stock > 0) {
                        if (brand !== null) {
                            console.log(brand);
                            if (category !== null) {
                                if (descItems !== undefined && descItems.length >= 3) {

                                    const dataBody = {
                                        image: await uploadDataUrlImage(imageFile, name),
                                        name: name,
                                        price: price,
                                        stock: stock,
                                        qr: "https://www.youtube.com/",
                                        brand: brand,
                                        category: category,
                                        description: descItems,
                                    }

                                    // send data to the database
                                    axios.post("http://localhost:3001/products/new", dataBody)
                                        .then(response => {
                                            alert(response.data);
                                            close({ show: false, type: "" });
                                        })
                                        .catch(error => console.log("error response: " + error));

                                }
                                else {
                                    alert("Please add at least 3 product description!");
                                }
                            }
                            else {
                                alert("Please select product category!");
                                return false;
                            }
                        }
                        else {
                            alert("Please select product brand!");
                            return false;
                        }
                    }
                    else {
                        alert("Stock cannot be equal to 0!");
                        return false;
                    }
                }
                else {
                    alert("Please specify the price of your product!");
                    return false;
                }
            }
            else {
                alert("Please enter product name!");
                return false;
            }
        }
        else {
            alert("Please upload an image!");
            return false;
        }
    }

    const readImgBlob = file => {
        if (file !== undefined) {
            const reader = new FileReader();

            reader.onload = e => {
                setImageFile(e.target.result);
            };
            console.log(file);
            reader.readAsDataURL(file);
        }
    };

    const closeDescList = () => {
        setDescList(false);
    }

    const handleNums = e => {
        let regex = /^[0-9]+$/;
        let input = "12345"; // Replace with your input here
        if (e.key != "Backspace" && regex.test(e.key) == false) {
            e.preventDefault();
        }
    }

    return (
        <div className="add-product-dialog">
            {descList && <DescriptionList listItems={descItems} editList={setDescItems} close={closeDescList} />}
            <div className="image-container">
                <img src={imageFile} alt="" />
                <label ref={fileLabel} htmlFor="fileUpload" className="upload-img-btn">Upload an image</label>
                <input type="file" id="fileUpload" accept="image/png, image/jpeg" onChange={e => {

                    fileLabel.current.textContent = "Change Image";
                    if (e.target.files[0] !== undefined) {
                        setImageFile(readImgBlob(e.target.files[0]));
                    }
                    console.log("File changed");
                }} />
            </div>
            <form ref={formRef} className="input-container">
                <label htmlFor="product-name">Product name:</label>
                <input type="text" id="product-name" placeholder="e.g Vape" autoComplete="off" onChange={e => setName(e.target.value)} />
                <label htmlFor="price">Price:</label>
                <input type="number" id="price" placeholder="0" autoComplete="off" onKeyDown={handleNums} onChange={e => setPrice(parseInt(e.target.value))} />
                <label htmlFor="stocks">Starting Stocks:</label>
                <input type="number" id="stocks" placeholder="0" autoComplete="off" onKeyDown={handleNums} onChange={e => setStock(parseInt(e.target.value))} />
                <div className="selection">
                    <select id="brand-selection" onChange={e => setBrand(e.target.value)}>
                        <option selected disabled>Brand</option>
                        <option>No brand</option>
                        {brands.map((item, index) => <option key={index}>{item}</option>)}
                    </select>
                    <select id="categories-selection" onChange={e => setCategory(e.target.value)}>
                        <option selected disabled>Category</option>
                        {categoryList.map((item, index) => <option key={index}>{item}</option>)}
                    </select>
                </div>
                <div className="input-group">
                    <label>Description list:</label>
                    <button type="button" onClick={() => setDescList(true)}>Open List</button>
                    <label ref={descriptionItemsLabel} className="item-counter">No items yet</label>
                </div>
                <div className="button-collection">
                    <button type="button" className="submit-btn" onClick={addProduct}>Submit</button>
                    <button type="button" className="cancel-btn" onClick={e => {
                        close({ show: false, type: "" });
                        setImageFile("");
                    }}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default AddProductDialog;