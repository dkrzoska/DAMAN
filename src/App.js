// import logo from './logo.svg';
// import './App.css';
import { React, useState } from 'react';
import Header from './components/home/Header/Header';
import Main from './components/home/Main/Main';
import Footer from './components/home/Footer/Footer';
import PortfolioIT from './components/home/PortfolioIT/PortfolioIT';
import Contact from './components/home/Contact/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route } from 'react-router-dom';
import styled from 'styled-components';
import bkg from './assets/bkg.jpg';
import AboutmePL from './components/home/AboutmePL/AboutmePL';
import AboutmeEN from './components/home/AboutmeEN/AboutmeEN';

const Styleddiv = styled.div`{
        background: #dddfd4 url(${bkg}) no-repeat center;
        background-size: cover;
        .container {
          max-width: 1200px;
          background: rgba(255,255,255,0.7);
        }
    }`

function App() {
  const portfolioPL = [
    {
      title: 'BestShop',
      description: <>
        Strona samoczynnie dopasowująca się do rozmiaru okna przeglądarki z&nbsp;użyciem <strong>JavaScriptu</strong> stworzona na podstawie projektu graficznego stworzonego w&nbsp;AdobexD.<br />
        <a href="https://xd.adobe.com/view/31804ad0-5f57-46e0-6edf-a5f54c37078a-47b1/grid/">Link do projektu</a>.
      </>,
      link: '/bestshop/bestshop.html',
      github: 'https://github.com/dkrzoska/BestShop',
      linktf: true
    },
    {
      title: 'Kalendarz ToDo',
      description: <>
        Aplikacja <strong>JavaScript</strong> z trwałym przechowywaniem danych w pliku na serwerze <a href='https://jsonbin.io'>jsonbin.io</a>.<br />
        Komunikacja z serwerem za pomocą żądania fetch i parsowania JSON.
      </>,
      link: '/calendar/calendar.html',
      github: 'https://github.com/dkrzoska/Calendar',
      linktf: true
    },
    {
      title: 'Give to good hands',
      description: <>
        Wolontariacka aplikacja przy użyciu biblioteki <strong>React.js</strong>.
      </>,
      link: '/give_to_good_hands/give_to_good_hands.html',
      github: 'https://github.com/dkrzoska/Give_to_good_hands',
      linktf: true
    },
    {
      title: 'Movie search engine',
      description: <>
        Wyszukiwarka filmów korzystająca z darmowego <a href='http://www.omdbapi.com'>API OMdB</a>.
      </>,
      link: '/find_movie/find_movie.html',
      github: 'https://github.com/dkrzoska/find_movie',
      linktf: true
    },
    {
      title: 'Strona DAMAN',
      description: 'Kod źródłowy mojej strony internetowej',
      link: 'https://www.daman.pl',
      github: 'https://github.com/dkrzoska/DAMAN',
      linktf: false
    }
  ];
  const portfolioEN = [
    {
      title: 'BestShop',
      description: <>Resolution independent website with <strong>JavaScript</strong> created on the basis of a graphic design created in&nbsp;AdobexD.<br />
        <a href="https://xd.adobe.com/view/31804ad0-5f57-46e0-6edf-a5f54c37078a-47b1/grid/">Link to the project</a>.</>,
      link: '/bestshop/bestshop.html',
      github: 'https://github.com/dkrzoska/BestShop',
      linktf: true
    },
    {
      title: 'Calendar ToDo',
      description: <>
        <strong>JavaScript</strong> application with persistent data storage in file on server <a href='https://jsonbin.io'>jsonbin.io</a>.<br />
        Communication with the server using a fetch request and JSON parsing.
      </>,
      link: '/calendar/calendar.html',
      github: 'https://github.com/dkrzoska/Calendar',
      linktf: true
    },
    {
      title: 'Give to good hands',
      description: <>
        Volunteer application using <strong>React.js</strong> library.
      </>,
      link: '/give_to_good_hands/give_to_good_hands.html',
      github: 'https://github.com/dkrzoska/Give_to_good_hands',
      linktf: true
    },
    {
      title: 'Movie search engine',
      description: <>
        Movie search engine using free <a href='http://www.omdbapi.com'>OMdB API </a>.
      </>,
      link: '/find_movie/find_movie.html',
      github: 'https://github.com/dkrzoska/find_movie',
      linktf: true
    },
    {
      title: 'DAMAN website',
      description: 'Source code of my website',
      link: 'https://www.daman.pl',
      github: 'https://github.com/dkrzoska/DAMAN',
      linktf: false
    }
  ];

  const [menu, setMenu] = useState(['Start', 'Portfolio', 'CV', 'Contact']);
  const [main, setMain] = useState(['Msc. Damian Krzoska', 'Welcome to my website', 'About me', <AboutmeEN />])
  const [portfolio, setPortfolio] = useState(portfolioEN);
  const [buttonName, setButtonName] = useState('Website');
  const [contact, setContact] = useState('Contact');

  const handleChangeLanguageMenu = (ev) => {
    if (ev.target.alt === 'PL') {
      setMenu(['Start', 'Portfolio', 'CV', 'Kontakt']);
      setMain(['mgr inż. Damian Krzoska', 'Witaj na mojej stronie', 'O mnie', <AboutmePL />]);
      setPortfolio(portfolioPL);
      setButtonName('Strona');
      setContact('Kontakt');
    } else {
      setMenu(['Start', 'Portfolio', 'CV', 'Contact']);
      setMain(['Msc. Damian Krzoska', 'Welcome to my website', 'About me', <AboutmeEN />]);
      setPortfolio(portfolioEN);
      setButtonName('Website');
      setContact('Contact');
    }
  }

  return (
    <Styleddiv>
      <HashRouter>
        <div className='container'>
          <Route exact path="/">
            <Header
              changeLang={handleChangeLanguageMenu}
              menu={menu}
            />
            <Main
              main={main}
            />
            <Footer />
          </Route>
          <Route path="/portfolio">
            <Header
              changeLang={handleChangeLanguageMenu}
              menu={menu}
            />
            <PortfolioIT
              portfolio={portfolio}
              buttonName={buttonName}
            />
            <Footer />
          </Route>
          <Route path="/contact">
            <Header
              changeLang={handleChangeLanguageMenu}
              menu={menu}
            />
            <Contact
              contact={contact}
            />
            <Footer />
          </Route>
        </div>
      </HashRouter>
    </Styleddiv>
  );
}

export default App;
