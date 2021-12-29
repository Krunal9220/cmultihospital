import './App.css';
import Header from './components/Header';
import Home from './containers/Home';
import Departments from './containers/Departments';
import Doctors from './containers/Doctors';
import About from './containers/About';
import Contact from './containers/Contact';
import Appoinment from './containers/Appoinment';
import Sign_in_up from './containers/Sign_in_up';
import Counter from './containers/Counter';
import Footer from './components/Footer';

import { Route, Switch } from "react-router-dom"

function App() {
  return (
    <>
      <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/departments" component={Departments} />
            <Route path="/doctors" component={Doctors} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/appoinment" component={Appoinment} />
            <Route path="/login" component={Sign_in_up}/>
            <Route path="/counter" component={Counter}/>
          </Switch>
      <Footer />
    </>
  );
}

export default App;
