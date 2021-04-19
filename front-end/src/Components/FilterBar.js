const FilterBar = () => {
    return (
        <div>
            <h1>Filter</h1>

            <div>
                Categories
                <ul>
                    <li>Clothing</li>
                    <li>Shoes</li>
                    <li>Accessories</li>
                </ul>

                User:
                <input type="text" placeholder="search by username"></input>
                <button>Search </button>
            </div>
        </div>
    ) 
}