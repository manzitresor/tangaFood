import './App.css';
import {Navbar,Home, About, Footer } from './components';
import {Switch,Route} from "react-router-dom"
function App() {
  return (
    <>
          

          <Navbar/>
            <Switch>
          <Route exact path="/">
            <Home/>
            <Footer/>
          </Route>
          <Route exact path="/about">
           <About>
           </About>
          </Route>
          </Switch>
          <Footer/>

          
          
          
       
       
        

    

    
    
    </>
  );
}

export default App;
