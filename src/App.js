import './App.css';
import Header from './Component/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './Component/Footer';
import Service from './pages/Service';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/About">
            <About />
            </Route>
          <Route path="/Service">
            <Service />
            </Route>
          <Route path="/Blog">
            <Blog />
            </Route>
          <Route path="/Contact">
            <Contact/>
            </Route>
        </Switch>
        
        <Footer/>

      </Router>
     
    </>
  );
}

export default App;
