import {useState} from 'react';
import GamePage from './routes/Game';
import HomePage from './routes/Home';
import database from './service/firebase';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

database.ref('pokemons').once('value', (snapshot) => {
  console.log('####: snapshot', snapshot.val());
});

const App = () => {
  const [page, setPage] = useState('app');

  const handleChangePage = (page) => {
    console.log('###: <Main />');
    setPage(page);
  }

  // <BrowserRouter>
  //   <Switch>
  //     <Route path='/' exact component={HomePage} />
  //     <Route path='/game' component={GamePage} />
  //     <Route render={() => {
  //       <h1>404 non found</h1>
  //     }} />
  //   </Switch>
  // </BrowserRouter>


  switch (page) {
    case 'app':
      return <HomePage onChangePage={handleChangePage} />
    case 'game':
      return <GamePage />
    default:
      return <HomePage />
  }

}

export default App;
