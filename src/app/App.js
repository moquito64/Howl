import { BrowserRouter as Router , Route ,Switch} from 'react-router-dom';
import Home from '../components/Home/home';
import Login from '../components/Login/login';
import About from '../components/About/about';
import Contact from '../components/Contact/contact';
import NotFoundPage from '../components/NotFound/404';

function App() {
 
  return (
        <Router>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/login" component={Login} />
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route component={NotFoundPage} />
          </Switch>
        </Router>
       
  );
}

export default App;
