import {useState} from 'react';
import {useRouteMatch, Route, Switch, Redirect} from 'react-router-dom';
import database from './service/firebase';
import cn from 'classnames';

import GamePage from './routes/Game';
import HomePage from './routes/Home';

import AboutPage from './routes/AboutPage';
import ContactPage from './routes/ContactPage';
import NotFound from './routes/NotFound';

import MenuHeader from './components/MenuHeader';
import Footer from './components/Footer';

import s from './style.module.css'

database.ref('pokemons').once('value', (snapshot) => {
  console.log('####: snapshot', snapshot.val());
});

const App = () => {
  const [page, setPage] = useState('app');

  const handleChangePage = (page) => {
    console.log('###: <Main />');
    setPage(page);
  }

  const match = useRouteMatch('/');
  console.log('####: match', match);

  return (
    
      <Switch>
        <Route path='/404' component={NotFound} />
        <Route>
          <>
            <MenuHeader bgActive={!match.isExact} />
              <div className={cn(s.wrap, {[s.isHomePage]: match.isExact})}>
                <Switch>
                  <Route path='/' exact component={HomePage} />
                  <Route path='/wellcome' component={HomePage} />
                  <Route path='/game' component={GamePage} />
                  <Route path='/about' component={AboutPage} />
                  <Route path='/contact' component={ContactPage} />
                  <Route render={() =>(
                    <Redirect to='/404' />
                  )} />
                </Switch>
              </div>
            <Footer />
          </>
        </Route>

      </Switch>
    
  );

  // switch (page) {
  //   case 'app':
  //     return <HomePage onChangePage={handleChangePage} />
  //   case 'game':
  //     return <GamePage onChangePage={handleChangePage} />
  //   default:
  //     return <HomePage />
  // }

}

export default App;
