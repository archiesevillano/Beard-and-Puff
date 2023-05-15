import DataTable from 'react-data-table-component';
import SearchBar from '../../components/searchBar';
import Categories from '../../components/categories';
import "./productInventory.css";
import AddProductDialog from '../../components/AddProductDialog';
import { useReducer, useState } from 'react';
import axios from 'axios';

const columns = [
    {
        name: 'ProductID',
        selector: row => row.productID,
        sortable: true,
    },
    {
        name: 'Product Name',
        selector: row => row.name,
        sortable: true,
    },
    {
        name: 'Price',
        selector: row => row.price,
        sortable: true,
    },
    {
        name: 'Stocks',
        selector: row => row.stock,
        sortable: true,
    },
    {
        name: 'Brand',
        selector: row => row.brand,
        sortable: true,
    },
    {
        name: 'Category',
        selector: row => row.category,
        sortable: true,
    }
];

const getList = async () => {
    const requestData = await axios.post("http://localhost:3001/products");

    const list = () => {
        const items = [];

        requestData.data.map(item => items.push(item));

        return items;
    }

    return list();
}

const ProductInventory = () => {
    const [dialog, setDialog] = useState({ show: false, type: "" });
    const [dataList, setDataList] = useState(null);

    setTimeout(async () => {
        setDataList(await getList());
    }, 2000)

    return (
        <div className='product-inventory'>
            {dialog.show && dialog.type}
            <header className='inventory-header'>
                <SearchBar placeholderText={"Search for items..."} />
                <Categories />
            </header>
            <section className='inventory-controls'>
                <button type="button" onClick={() => {
                    setDialog({ show: true, type: <AddProductDialog close={setDialog} /> })
                }}>
                    <i className="fa-solid fa-circle-plus"></i>
                    Add new product
                </button>
                <button type="button">
                    <i className="fa-solid fa-pen"></i>
                    Update product
                </button>
                <button type="button">
                    <i className="fa-solid fa-trash"></i>
                    Remove product
                </button>
            </section>
            <div className='table-container'>
                {dataList && <DataTable
                    columns={columns}
                    data={dataList === null ? "" : dataList}
                />}
            </div>
        </div>
    );
}

export default ProductInventory;