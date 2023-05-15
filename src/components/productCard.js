import Sample from "./../images/sample.png";
import { generateCode } from "./qrGen";

const ProductCard = ({ productName, price, state, open }) => {

    return (
        <div className="product-card">
            <div className="product-image-container">
                <img draggable={false} src={Sample} alt="Not available" />
            </div>
            <div className="product-content">
                <p className="product-name">{productName}</p>
                <div className="product-btns">
                    <button className="qrCode" onClick={() => open(1)}>
                        <i className="fa-solid fa-qrcode"></i>
                    </button>
                    <p className="price"><i className="fa-solid fa-peso-sign"></i>{price}</p>
                    <button className="details" onClick={() => open(2)}>
                        <i className="fa-solid fa-align-right"></i>
                    </button>
                </div>
            </div>
            <button type="button" className="add-btn">Add to card</button>
        </div>
    );
}

export default ProductCard;