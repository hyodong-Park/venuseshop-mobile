import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './pages/home/MainPage';
import NewProduct from './pages/newproduct/NewProduct';
import ProductDetail from './pages/productdetail/ProductDetail';

function Router() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/NewProduct" element={<NewProduct />} />
              <Route path="/ProductDetail" element={<ProductDetail />} />
          </Routes>
      </BrowserRouter>
  );
}

export default Router;
