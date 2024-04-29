import React,{Suspense} from 'react'
import './styles/App.css';
import {Loader} from 'lucide-react'
import { BrowserRouter as Router } from 'react-router-dom';
const Routes = React.lazy(() => import( './Routes'));
const Navbar = React.lazy(() => import( './components/common/Navbar'));
const Footer = React.lazy(() => import( './components/common/Footer'));
const BackToTop = React.lazy(() => import( './components/BackToTop'));
const Animation = React.lazy(() => import( './Animation'));

function App() {
  return (
    <>
   <Router>
    <Suspense fallback={<Loader />}>
    <Navbar />
    <Animation>
    <Routes />
    </Animation>
    </Suspense>
   </Router>
   <Footer />
   <BackToTop />
    </>
  );
}

export default App;
