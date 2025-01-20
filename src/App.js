import './App.css';
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import { routes } from './routes';
import { Helmet } from 'react-helmet';
import { Suspense } from 'react';
import PageLayout from './components/layout/page-layout';
import { Spin } from 'antd';

function App() {
  return (
    <Router>
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
                    <meta name='description' content='We are dedicated to foster sustainable coconut production in Indonesia by prioritizing conscientious practices that optimize productivity while minimizing the ecological footprint. Our commitment is to deliver exceptional, eco-friendly coconut products to our discerning consumers, meticulously crafted with minimal reliance on synthetic chemicals. We develop the livelihoods and open up business prospects for Indonesian farmers by offering them fair pricing, access to larger markets, and advice on sustainable farming methods.' />
                    <meta name="og:title" content="Oceaneyes" />
                    <meta name="og:description" content="We are dedicated to foster sustainable coconut production in Indonesia by prioritizing conscientious practices that optimize productivity while minimizing the ecological footprint. Our commitment is to deliver exceptional, eco-friendly coconut products to our discerning consumers, meticulously crafted with minimal reliance on synthetic chemicals. We develop the livelihoods and open up business prospects for Indonesian farmers by offering them fair pricing, access to larger markets, and advice on sustainable farming methods." />
                    <meta name="og:image" content="/favicon.ico" />
                    <meta name="og:card" content="/favicon.ico" />
                    <meta name="twitter:title" content="Oceaneyes" />
                    <meta name="twitter:description" content="We are dedicated to foster sustainable coconut production in Indonesia by prioritizing conscientious practices that optimize productivity while minimizing the ecological footprint. Our commitment is to deliver exceptional, eco-friendly coconut products to our discerning consumers, meticulously crafted with minimal reliance on synthetic chemicals. We develop the livelihoods and open up business prospects for Indonesian farmers by offering them fair pricing, access to larger markets, and advice on sustainable farming methods." />
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
