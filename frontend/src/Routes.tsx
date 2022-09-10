import NavBar from 'componentes/NavBar';
import Before from 'Page/Before';
import Home from 'Page/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routes = () => (
  <BrowserRouter>
  <NavBar />
    <Switch>
        <Route path="/" exact>
            <Home />
        </Route>
        <Route path="/before">
            <Before />
        </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
