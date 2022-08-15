import {Switch, Route} from 'react-router-dom'

import Login from './components/Login'

import Popular from './components/Popular'

import MovieItem from './components/MovieItem'

import NotFound from './components/NotFound'

import SearchRoute from './components/SearchRoute'

import Account from './components/Account'

import Home from './components/Home'

import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

const App = () => (
  <div>
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/movies/:id" component={MovieItem} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/search" component={SearchRoute} />
      <ProtectedRoute exact path="/account" component={Account} />
      <ProtectedRoute exact path="/popular" component={Popular} />
      <NotFound />
    </Switch>
  </div>
)
export default App
