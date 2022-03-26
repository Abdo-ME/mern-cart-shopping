import React from 'react'
import Cart from '../Cart/Cart'
import Filter from '../Filter/Filter'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Products from '../Products/Products'

const Home = () => {
  return (
      <>
        
          <Header/>
          <main>
            <div className="wrapper">
                <Products />
                <Filter/>
            </div>
            <Cart />
          </main>
          {/* <Footer /> */}
     
    </>
  )
}

export default Home