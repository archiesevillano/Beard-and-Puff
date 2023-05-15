import "./shopProducts.css";
import ProductCard from "../../components/productCard";
import ProductQRDialog from "../../components/productQRDialog";
import React, { useState } from 'react';
import ProductDetails from "../../components/productDetails";
import SearchBar from "../../components/searchBar";
import Categories from "../../components/categories";
import axios from "axios";

const ShopProducts = () => {

    const productList = async () => {
        const list = await axios.post("http://localhost:3001/products");
        return await list.data;
    }

    // const categorySwitch = async (currentCategory, categoryState) => {
    //     switch (categoryState.selected) {
    //         case "All":
    //             currentCategory = await productList();
    //             break;
    //         case "E-juice":
    //             currentCategory = await productList().filter(product => product.category == "E-juice");
    //             break;
    //         case "Atomizer":
    //             currentCategory = await productList().filter(product => product.category == "Atomizer");
    //             break;
    //         case "Accessories":
    //             currentCategory = await productList().filter(product => product.category == "Accessories");
    //             break;
    //         case "Disposable Vape":
    //             currentCategory = await productList().filter(product => product.category == "Disposable Vape");
    //             break;
    //     }
    // }


    // const [productQuery, dispatch] = (categorySwitch, { selected: "All", })
    const [dialogState, setDialogState] = useState(false);
    const [openDialog, setOpenDialog] = useState(0);

    const handleHideDialog = () => {
        setDialogState(false); // Hide or close the dialog state
    }

    const handleOpenDialog = i => {
        if (i > 0) {
            setDialogState(true);
        }
        else {
            setDialogState(false);
        }
        setOpenDialog(i); //get the dialog type based on the passed index value or 'i'
    }

    const dialogs = [
        "",
        <ProductQRDialog action={handleHideDialog} qr={'https://i.pinimg.com/originals/1e/5e/75/1e5e75c80befbd02653b81a025b08412.jpg'} />,
        <ProductDetails action={handleHideDialog} />
    ]

    return (
        <>
            <header className='shop-header'>
                <SearchBar placeholderText={"Search for items..."} />
                <Categories />
            </header>
            <div className="product-list">
                {dialogState === true ? dialogs[openDialog] : console.log("test")}
                <ProductCard open={handleOpenDialog} state={dialogState} productName={"Freemax Sample"} price={2999} />
                <ProductCard open={handleOpenDialog} state={dialogState} productName={"Freemax Sample"} price={2999} />
                <ProductCard open={handleOpenDialog} state={dialogState} productName={"Freemax Sample"} price={2999} />
                <ProductCard open={handleOpenDialog} state={dialogState} productName={"Freemax Sample"} price={2999} />
                <ProductCard open={handleOpenDialog} state={dialogState} productName={"Freemax Sample"} price={2999} />
                <ProductCard open={handleOpenDialog} state={dialogState} productName={"Freemax Sample"} price={2999} />
                <ProductCard open={handleOpenDialog} state={dialogState} productName={"Freemax Sample"} price={2999} />
                <ProductCard open={handleOpenDialog} state={dialogState} productName={"Freemax Sample"} price={2999} />
                <ProductCard open={handleOpenDialog} state={dialogState} productName={"Freemax Sample"} price={2999} />
                <ProductCard open={handleOpenDialog} state={dialogState} productName={"Freemax Sample"} price={2999} />
            </div>
        </>

    );
}

export default ShopProducts;