import React from 'react';
import HomePage from './Pages/home-page/homePage.component';
import Header from './components/header/header.component';
import Shop from './Pages/shop-page/shopPage.component';
import SignInAndSignUp from './Pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { Switch, Route } from 'react-router';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={Shop}/>
        <Route exact path='/signin' component={SignInAndSignUp}/>
      </Switch>
    </div>
  );
}

export default App;
