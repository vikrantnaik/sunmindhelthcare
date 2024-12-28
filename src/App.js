import './App.css';
import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/about/About';
import Footer from './components/Footer/Footer'
import Contact from './components/contact/Contact';
import Order from './components/howtoorder/Order';
import FAQ from './components/faq/FAQ';
import ProductPage from './components/product/ProductPage';
import Products from './components/product/Products';


function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/order" element={<Order />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductPage />} />
        </Routes>
       <Footer/>
        {/* <section id="about" className="section">
        <h1>About Us</h1>
        <p>We are a company that does awesome things!</p>
      </section>
      <section id="products" className="section">
        <h1>Products</h1>
        <p>Check out our amazing products!</p>
      </section>
      <section id="order" className="section">
        <h1>How to Order</h1>
        <p>Here’s how you can place an order!</p>
      </section>
      <section id="contact" className="section">
        <h1>Contact Us</h1>
        <p>Get in touch with us!</p>
      </section>
      <section id="faq" className="section">
        <h1>FAQ</h1>
        <p>Frequently Asked Questions</p>
      </section> */}
      </BrowserRouter>
    </>
  );
}

export default App;
