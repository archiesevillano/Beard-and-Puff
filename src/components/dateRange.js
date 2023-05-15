const DateRange = () => {
    return (
        <div className='date-range'>
            <div className='row'>
                <label htmlFor="start-date">Start Date: </label>
                <input type="date" className='start-date' id="start-date" value="2018-01-01" min="2018-01-01" max="2018-12-31" />
            </div>
            <div className='row'>
                <label htmlFor="start-date">End Date: </label>
                <input type="date" className='end-date' id="end-date" value="2018-01-01" min="2018-01-01" max="2018-12-31" />
            </div>
        </div>
    );
}

export default DateRange;