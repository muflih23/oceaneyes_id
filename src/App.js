import './App.css';
import {
  BrowserRouter as Router, Routes, Route,
  useLocation
} from "react-router-dom";
import { routes } from './routes';
import { Helmet } from 'react-helmet';
import { Suspense, useEffect } from 'react';
import PageLayout from './components/layout/page-layout';
import { Spin } from 'antd';
import ReactGA from 'react-ga4'

function GoogleAnalytics() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname })
  }, [location])
}


function App() {

  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_TRACKING_ID);
  }, [])

  return (
    <Router>
      <GoogleAnalytics />
      <Routes>
        {
          routes.map((page, index) => (
            <Route
              path={page.path}
              element={
                <PageLayout>
                  <Helmet>
                    <title>Oceaneyes Indonesia</title>
                    <meta name='title' content='Oceaneyes' />
                    <meta name='description' content='OceanEyes menghadirkan analitik berbasis AI, big data, dan satelit untuk mendukung pengelolaan sumber daya laut yang efisien dan berkelanjutan' />
                    <meta name="og:title" content="Oceaneyes" />
                    <meta name="og:description" content="OceanEyes menghadirkan analitik berbasis AI, big data, dan satelit untuk mendukung pengelolaan sumber daya laut yang efisien dan berkelanjutan" />
                    <meta name="og:image" content="/favicon.ico" />
                    <meta name="og:card" content="/favicon.ico" />
                    <meta name="twitter:title" content="Oceaneyes" />
                    <meta name="twitter:description" content="OceanEyes menghadirkan analitik berbasis AI, big data, dan satelit untuk mendukung pengelolaan sumber daya laut yang efisien dan berkelanjutan" />
                    <meta name="twitter:image" content="/favicon.ico" />
                    <meta name="twitter:card" content="/favicon.ico" />
                  </Helmet>
                  <Suspense fallback={
                    <div className='w-screen h-screen flex justify-center items-center'>
                      <Spin percent={0} />
                    </div>
                  }>
                    <page.component />
                  </Suspense>
                </PageLayout>
              }
            />
          ))
        }
      </Routes>
    </Router>
  );
}

export default App;
