import './App.css';
import { Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Component/HomePage/homepage';
import AboutUs from './Component/AboutUsPage/aboutUs';
import ContactPage from './Component/ContactPage/contactPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/about' component={AboutUs}/>
        <Route exact path='/contact' component={ContactPage}/>
      </Switch>
    </div>
  );
}

export default App;
