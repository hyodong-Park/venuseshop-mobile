import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './pages/home/MainPage';
import NewProduct from './pages/newproduct/NewProduct';
// import BestProduct from './pages/bestproduct/BestProduct';
import ProductDetail from './pages/productdetail/ProductDetail';
import ScrollToTop from './components/ScrollToTop';

function Router() {
  return (
      <BrowserRouter>
          <ScrollToTop />
          <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/newproduct" element={<NewProduct />}>
                  {/*<Route path=":cardId" element={<DetailCard />} />*/}
              </Route>
              {/*<Route path="/bestproduct" element={<BestProduct />} />*/}
              <Route path="/productDetail" element={<ProductDetail />} />
          </Routes>
      </BrowserRouter>
  );
}

export default Router;
