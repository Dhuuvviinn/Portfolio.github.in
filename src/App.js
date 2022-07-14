// import logo from './logo.svg';
import './App.css';
// import Artile from './Component/Article/Artile';
import Brand from './Component/Brand/Brand';
import CTA from './Component/cta/CTA';
import Feature from './Component/feature/Feature';
import Navbar from './Component/navbar/Navbar';
import Blog from './Container/blog/Blog';
// import Features from './Container/features/Features';
import Footer from './Container/footer/Footer';
import Header from './Container/header/Header';
import Possibility from './Container/possibility/Possibility';
import WhatGPT3 from './Container/whatGPT3/WhatGPT3';

function App() {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Feature />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
