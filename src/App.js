import { useLocation, Route, Switch } from 'react-router-dom';

import cn from 'classnames';

import GamePage from './routes/GamePage';
import HomePage from './routes/HomePage';

import AboutPage from './routes/AboutPage';
import NotFound from './routes/NotFound';

import MenuHeader from './components/MenuHeader';
import Footer from './components/Footer';

import s from './style.module.css';

import { FirebaseContext } from './context/firebaseContext'
import Firebase from './service/firebase';



const App = () => {

  const location = useLocation();
  const isPadding = location.pathname === '/' || location.pathname === '/game/board';

  return (
    <FirebaseContext.Provider value={new Firebase()} >
      <Switch>
        <Route path='/404' component={NotFound} />
        <Route>
          <>
            <MenuHeader bgActive={!isPadding} />
            <div className={cn(s.wrap, {
              [s.isHomePage]: isPadding
            })}>
              <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/game' component={GamePage} />
                <Route path='/about' component={AboutPage} />
                <Route path='/' component={HomePage} />
                {/* <Route render={() => (
                  <Redirect to='/404' />
                )} /> */}
              </Switch>
            </div>
            <Footer />
          </>
        </Route>

      </Switch>
    </FirebaseContext.Provider>

  );

}

export default App;
