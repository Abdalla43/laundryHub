import React, { useEffect } from 'react';
import Header from './Components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home'
import About from './Pages/About'
import Service from './Pages/Service'
import Login from './Pages/Login'
import Pricing from './Pages/Pricing'
import Order from './Pages/Order'
import Contact from './Pages/Contact'
import './App.css';
import Signup from './Pages/Signup';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import { login, logout } from './features/userSlice';
import Footer from './Components/Footer';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {

      if (authUser) {
        dispatch(login({
          email: authUser.email,
          name: authUser.displayName,
          uid: authUser.uid
        }))
      }
      else {
        dispatch(logout())
      }
      console.log(authUser)
    })

  }, [dispatch])
  return (
    <Router>
      <div className='app'>
        <Header />
        <div className="app__body">
          <Switch>
            <Route exact path='/'>
              <Home />
              <Footer />
            </Route>
            <Route exact path='/about'>
              <About />
              <Footer />
            </Route>
            <Route exact path='/service'>
              <Service />
              <Footer />
            </Route>
            <Route exact path='/pricing'><Pricing /></Route>

            <Route exact path='/login'><Login /></Route>
            <Route exact path='/signup'><Signup /></Route>
            <Route exact path='/order'><Order /></Route>

            <Route exact path='/contact'><Contact /></Route>



          </Switch>
        </div>

      </div>
    </Router>

  );
}

export default App;
