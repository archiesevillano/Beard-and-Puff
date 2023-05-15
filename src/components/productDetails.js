const ProductDetails = ({ close }) => {
    return (
        <div className="product-details">
            <div className="image-container">
                <img src="https://i0.wp.com/www.thevapeshop.ph/wp-content/uploads/2023/02/VOOPOO-Argus-Pro-80W-Pod-Kit-3000mAh-With-PNP-Tank-Striker-Blue.jpg?fit=1200%2C1200&ssl=1" alt="Not available yet" />
            </div>
            <div className="details">
                <h1>VOOPOO Argus Pro 80W Pod Kit</h1>
                <p>Product Details:</p>
                <ul>
                    <li>1 x ARGUS Pro Device</li>
                    <li>1 x PnP Pod (4.5ml)</li>
                    <li>1 x PnP-VM6, 0.15ohm</li>
                    <li>1 x PnP-VM1, 0.3ohm</li>
                </ul>
            </div>
            <div className="button-collections">
                <button type="button" onClick={close}>Close</button>
            </div>
        </div>
    );
}

export default ProductDetails;