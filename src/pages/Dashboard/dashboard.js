import React, { useState } from 'react';
import { Products } from '../../components/dataSource';
import BarChart from '../../components/BarChart';
import "./../Dashboard/dashboard.css";
import DateRange from '../../components/dateRange';

const Dashboard = () => {

    const topSellingChart = {
        labels: Products.map(product => product.name),
        datasets: [
            {
                label: 'Top 5 Most Selling Products',
                data: Products.map(product => product.sold),
                backgroundColor: '#60ce92',
                borderColor: 'black',
                borderWidth: 1,
            },
        ]
    }

    const highestStockChart = {
        labels: Products.map(product => product.name),
        datasets: [
            {
                label: 'Highest Profit',
                data: Products.map(product => product.profit),
                backgroundColor: ' #60b4ce',
                borderColor: 'black',
                borderWidth: 1,
            },
        ]
    }

    return (
        <div className="dashboard-content">
            <h1 className='dashboard'>Dashboard</h1>
            <section className="charts">
                <div className='c1 chart'>
                    <BarChart chartData={topSellingChart} />
                </div>
                <div className='c2 chart'>
                    <BarChart chartData={highestStockChart} />
                </div>
            </section>
            <section className='summary-details'>
                <div className='gauge'>
                    <h1 className='total-sale-value'>7841</h1>
                    <p>Sales</p>
                </div>
                <div className='gauge'>
                    <h1 className='total-customer-value'>8</h1>
                    <p>Customers</p>
                </div>
                <div className='gauge'>
                    <h1 className='total-stocks-value'>31405</h1>
                    <p>Stocks</p>
                </div>
                <DateRange />
            </section>
        </div>
    );
}

export default Dashboard;