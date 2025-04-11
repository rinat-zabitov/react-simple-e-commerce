import { MainContent } from './components/MainContent/MainContent';
import { ProductPage } from './components/ProductPage/ProductPage';
import { Sidebar } from './components/Sidebar/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TopSellers } from './components/TopSellers/TopSellers';
import { PopularBlogs } from './components/PopularBlogs/PopularBlogs';

export const App = () => {
  return (
    <BrowserRouter>
      <div className="flex h-screen">
        <Sidebar />
        <div className="rounded w-full flex justify-center flex-wrap">
          <Routes>
            <Route path={'/'} element={<MainContent />} />
            <Route path={'/products/:id'} element={<ProductPage />} />
          </Routes>
        </div>
        <div>
          <TopSellers />
          <PopularBlogs />
        </div>
      </div>
    </BrowserRouter>
  );
};
