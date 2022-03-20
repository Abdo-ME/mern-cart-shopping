import React, { useEffect, useState } from 'react';
import "../../css/Products/Products.css";
import ProductModal from './ProductModal';
import { connect } from "react-redux";
import { fetchProducts } from '../../store/actions/products';

        
function Products({ products,handleAddToCart,setCart}) {
    const [product, setProduct] = useState("")
    const [isOpen, setIsOpen] = useState(false)

    const openModel = (product) => {
        setProduct(product)
        setIsOpen(true)
    };

    // render Products
    
const productsItems = products&&products.length?products.map(product => (    
    <div key={product.id} className="product-item">
        <a onClick={() => { openModel(product) }} href="#">
            <img src={product.imageUrl} alt={product.item} />
        </a>
        <div className="product-desc">
            <p>{product.title}</p>
            <span>{product.price}$</span>
        </div>
        <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
    </div>

)):"Loading";

useEffect(() => {
    fetchProducts()
},[])
    return (
        <div className="products-wrapper"> 
            { productsItems}
            <ProductModal product={product} isOpen={isOpen} setIsOpen ={setIsOpen} />
            </div>
    
            
  )
}

export default connect((state) => {
    return {
        products: state.products.products
    }
},fetchProducts)(Products)