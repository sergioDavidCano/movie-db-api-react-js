import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { RoutesApp } from './routers/RoutesApp';

function App() { 
  return (
    <BrowserRouter>
      <Header />
      <RoutesApp />
      <Footer />
    </BrowserRouter>
  )
}

export default App
