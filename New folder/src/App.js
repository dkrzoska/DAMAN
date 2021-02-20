// import logo from './logo.svg';
// import './App.css';
import Header from './components/home/Header/Header';
import Main from './components/home/Main/Main';
import Footer from './components/home/Footer/Footer';
import PortfolioIT from './components/home/PortfolioIT/PortfolioIT';
import Contact from './components/home/Contact/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <HashRouter>
        <div>
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
    </div>
  );
}

export default App;
