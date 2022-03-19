import React from 'react'
import "../../css/Filter/Filter.css"
function Filter({ size,sort,filterBySize,filterByOrder,productsNumber }) {
  return (
      <div className="filter-wrapper">
          <h2 className="filter-title">Filter</h2>
        <div className="products-Number">Number of Products : {productsNumber} </div>
            <div className="filter-by-size">
              <span>Filter</span>
                <select value={size}  onChange={filterBySize} className="filter-select">
                  <option value="ALL" defaultValue>ALL</option>
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                </select>
            </div>
            <div className="filter-by-sort">
              <span>Order</span>
                <select  value={sort} onChange={filterByOrder} className="filter-select">
                  <option value="latest" >Latest</option>
                  <option value="lowest">Lowest</option>
                  <option value="highest">Highest</option>
                  
                </select>
            </div>
        
    </div>
  )
}

export default Filter