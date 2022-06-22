
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Navbar from './containers/pages/Navbar';
import Banner from './containers/pages/Banner';
import { ProductList } from './containers/ProductList';
import { ProductDetail } from './containers/ProductDetail';

import Sidebar from "./containers/pages/Sidebar";
import Footer from "./containers/pages/Footer";
function App() {
  return (
    <div className="App"> 
      <Router>
      <Navbar/>
      <Banner/>
    
      <Sidebar/>
     
      <Footer/>
        <Routes>
      {/* <Route path="/" exact component={ProductList} />
      <Route path="/product/:productId" exact component={ProductDetail}/>
      </Routes> */}

<Route path="/" element={<ProductList/>} />
<Route path="/product/:productId" element={<ProductDetail/>} />
      </Routes>
      </Router>

  
    </div>

  );
}

export default App;
