import { generateCode } from "./qrGen";
import "./components.css";

const ProductQRDialog = ({ qr, action }) => {
    return (
        <div className="product-qr-dialog">
            <div className="instructions">
                <h1>To see the product details on your mobile:</h1>
                <ol>
                    <li>Open any QR Code Scanner App on your phone</li>
                    <li>Point your phone to this screen to capture the code</li>
                    <li> You can <b>Tap</b> the <b>link</b>. for example <b>www.vapeshop.com/products/12423423</b>(if applicable)</li>
                </ol>
                <button className="done-btn" type="button" onClick={action}>Done</button>
            </div>
            <div className="content">
                <div className="upper">
                    <img src={generateCode(qr)} alt="QR Code not available" />
                </div>
                <p className="lower">
                    Scan this QR Code
                </p>
            </div>
        </div>
    );
}

export default ProductQRDialog;