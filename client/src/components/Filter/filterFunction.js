export const handleFilterBySize =(filteredSize,products)=> (e) => {
    let value = e.target.value;
    filteredSize(products, value);
  }
  export const handleFilterBySort =(filteredSort,filteredProducts)=> (e) => {
    let value = e.target.value;
    filteredSort(filteredProducts, value);
  }