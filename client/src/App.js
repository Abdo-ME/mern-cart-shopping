

import React , {useEffect, useState} from 'react';
import Cart from './components/Cart/Cart';
import Filter from './components/Filter/Filter';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from './components/Products/Products';
import data from './data.json'
import { Provider } from "react-redux";
import store from './store/store';

function App() {
  const [products, setProducts] = useState(data);
  const [size,setSize] = useState("ALL");
  const [sort, setSort] = useState("");
  // const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart') || []));
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')) || []);
  
  
  const filterBySize = (e) => {
    setSize(e.target.value)
    
    if (e.target.value === "ALL") {
      setProducts(data)
    } else {
      const cloneProducts = [...data];
      let newProducts = cloneProducts.filter(p => p.sizes.includes(e.target.value))
    setProducts(newProducts) 
    }

  }
  
  const filterByOrder = (e) => {

    setSort(e.target.value)
    
      const cloneProducts = [...products];

      let newProducts = cloneProducts.sort((a, b) => {
        console.log(e.target.value);
        const order = e.target.value;

        if (order === "lowest") {
         return  a.price - b.price
        } else if (order === "highest") {
          return b.price - a.price
          
        }  else{
          return a.id < b.id ? 1 : -1
        }
       
      });
    setProducts(newProducts) 
    
  }
//  Add Product
  
  const handleAddToCart = (item) => {
    const cartProductClone = [...cartItems];
    let isProductExist = false;
    cartProductClone.forEach(p => {
      if (p.id === item.id) {
        p.qty++
        isProductExist = true;
      }
    })
      if (!isProductExist) {
        cartProductClone.push({ ...item, qty: 1,isProductExist:true });
    }
    setCartItems(cartProductClone)
    
  }
  // Remove Product
  const handleRemoveProduct = (id) => {
    setCartItems(cartItems.filter(p => {
      return p.id!==id
    }))
  }

  useEffect(() => {
    localStorage.setItem('cartItems',JSON.stringify(cartItems))
  }, [cartItems]);

  return (
    <Provider store={store} >
      <div className="layout">
      <Header/>
      <main>
        <div className="wrapper">
            <Products  handleAddToCart={handleAddToCart} setCartItems={setCartItems}  />
          <Filter size={size} filterBySize={filterBySize} filterByOrder={filterByOrder} sort={sort} productsNumber={products.length} />
         
        </div>
        <Cart cart={cartItems} handleRemoveProduct={handleRemoveProduct} />
      </main>
      <Footer />
      
    </div>
    </Provider>
  );
}

export default App;
