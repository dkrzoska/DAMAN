// import logo from './logo.svg';
// import './App.css';
import Header from './components/home/Header/Header';
import Main from './components/home/Main/Main';
import Footer from './components/home/Footer/Footer';
import PortfolioIT from './components/home/PortfolioIT/PortfolioIT';
import Contact from './components/home/Contact/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route } from 'react-router-dom';
import styled from 'styled-components';
import bkg from './assets/bkg.jpg';

const Styleddiv = styled.div`{
        background: #dddfd4 url(${bkg}) no-repeat center;
        background-size: cover;
        .container {
          max-width: 1200px;
          background: rgba(255,255,255,0.7);
        }
    }`

function App() {
  return (
    <Styleddiv>
      <HashRouter>
        <div className='container'>
          <Route exact path="/">
            <Header />
            <Main />
            <Footer />
          </Route>
          <Route path="/portfolio">
            <Header />
            <PortfolioIT />
            <Footer />
          </Route>
          <Route path="/contact">
            <Header />
            <Contact />
            <Footer />
          </Route>
        </div>
      </HashRouter>
    </Styleddiv>
  );
}

export default App;
