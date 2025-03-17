import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './pages/home/MainPage';
import NewProduct from './pages/newproduct/NewProduct';

function Router() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/NewProduct" element={<NewProduct />}>
                  {/*<Route path=":cardId" element={<DetailCard />} />*/}
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default Router;
