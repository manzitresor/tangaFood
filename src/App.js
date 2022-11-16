import './App.css';

import {Navbar,Home, Footer, Login,Register,Contact } from './components';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
function App() {
  return (
    <>
          
<Router>
          <Navbar/>

          <Switch>
          <Route exact path="/" component={Home} />  
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/contact" component={Contact}/>
          </Switch>
          <Footer/>
  </Router>

          
          
          
       
       
        

    

    
    
    </>
  );
}

export default App;
