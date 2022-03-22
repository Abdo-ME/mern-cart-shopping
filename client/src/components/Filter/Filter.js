import { connect } from 'react-redux'
import "../../css/Filter/Filter.css"
import { filteredSort, filteredSize } from '../../store/actions/products'

function Filter({ filteredSort, filteredSize, filteredProducts, products, size, sort }) {
  
  const handleFilterBySize = (e) => {
    let value = e.target.value;
    filteredSize(products, value);
  }
  const handleFilterBySort = (e) => {
    let value = e.target.value;
    filteredSort(filteredProducts, value);
  }
  

  return (
    <>
      {filteredProducts &&
        <div className="filter-wrapper">
          <h2 className="filter-title">Filter</h2>
        <div className="products-Number">Number of Products : {filteredProducts.length} </div>
            <div className="filter-by-size">
              <span>Filter</span>
                <select value={size}  onChange={handleFilterBySize} className="filter-select">
                  <option value="ALL">ALL</option>
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
                <select  value={sort} onChange={handleFilterBySort} className="filter-select">
                  <option value="latest" >Latest</option>
                  <option value="lowest">Lowest</option>
                  <option value="highest">Highest</option>
                  
                </select>
            </div>
        
    </div>}
    </>
  )
}

export default connect((state) => {
  return {
    products: state.products.products,
    filteredProducts: state.products.filterProducts,
    size: state.products.size,
    sort: state.products.sort,
  }
},{filteredSize,filteredSort})(Filter)