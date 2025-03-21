import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './pages/home/MainPage';
import NewProduct from './pages/newproduct/NewProduct';
import EventDetail from './pages/eventdetail/EventDetail';
import ProductDetail from './pages/productdetail/ProductDetail';
import ScrollToTop from './components/ScrollToTop';
import DiscountPage from './pages/discountpage/DiscountPage';
import BrandPage from './pages/brandpage/BrandPage';

function Router() {
  return (
      <BrowserRouter>
          <ScrollToTop />
          <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/newproduct" element={<NewProduct />} />
              <Route path="/productDetail" element={<ProductDetail />} />
              <Route path="/eventDetail" element={<EventDetail />} />
              <Route path="/discountPage" element={<DiscountPage />} />
              <Route path="/brandPage" element={<BrandPage />} />
          </Routes>
      </BrowserRouter>
  );
}

export default Router;
