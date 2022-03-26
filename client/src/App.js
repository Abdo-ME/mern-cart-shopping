import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";




// import Cart from './components/Cart/Cart';
// import Filter from './components/Filter/Filter';
// import Header from "./components/Header/Header";
// import Products from './components/Products/Products';
// import { Provider } from "react-redux";
// import store from './store/store';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Orders from "./components/Orders/Orders";

function App() {

  return (
    
      <BrowserRouter>
        <Navbar />
        <div className="layout">
        <Routes>
        <Route path="/" >
              <Route index element={<Home />} />
              <Route path="orders" element={< Orders/>}/>
        </Route>
        </Routes>
        <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;
