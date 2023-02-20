import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Enrol from './components/authentication/Enrol';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Statistics from './components/Statistics';
import Population from './components/Population';
import Referrer from './components/Referrer';
import Encounter from './components/Encounter';
import Admin from './components/Admin';
import Signup from './components/authentication/Signup';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Fragment>
                <Header />
                <Banner />
                <Cards />
                <Footer />
              </Fragment>
            }
          ></Route>
          <Route
            path="/signup"
            element={
              <Fragment>
                <Header />
                <Enrol />
              </Fragment>
            }
          />
          <Route
            path="/statistics"
            element={
              <Fragment>
                <Header />
                <Statistics />
              </Fragment>
            }
          />
          <Route
            path="/population"
            element={
              <Fragment>
                <Header />
                <Population />
              </Fragment>
            }
          />
          <Route
            path="/referrer"
            element={
              <Fragment>
                <Header />
                <Referrer />
              </Fragment>
            }
          />
          <Route
            path="/encounter"
            element={
              <Fragment>
                <Header />
                <Encounter />
              </Fragment>
            }
          />
          <Route
            path="/admin"
            element={
              <Fragment>
                <Header />
                <Admin />
              </Fragment>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
