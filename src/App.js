import react from 'react';
import {Route,Switch} from 'react-router-dom';
import About from './About';
import Contact from './contact';
import Menu from './menu';
import Search from './search';

const App=()=>{
  return(
    <>
    <Menu/>
    <Switch>
      <Route exact path='/' component={About}/>
      <Route exact path='/contact' component={Contact}/>
      <Route  path='/search' component={Search}/>
    </Switch>
    </>
  );
}
export default App;
