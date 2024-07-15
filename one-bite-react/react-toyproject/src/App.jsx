import { Route, Routes } from 'react-router-dom';

import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Footer } from './components/Footer';
import { MoviePage } from './pages/MoviePage';
import { NotFound } from './components/NotFound';
import { MyPage } from './pages/MyPage';
import { Setting } from './pages/Setting';
import { Login } from './pages/Login';

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<MoviePage />} />
        <Route path="/my" element={<MyPage />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};
