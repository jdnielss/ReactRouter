import React from 'react'
import { Switch, Route } from 'react-router-dom'
import GuestBookContainer from '../components/GuestBook/GuestBookContainer'
import Home from '../components/Home/Home'

function Routes(){
  return(
    <Switch>
      <Route exact path="/" render={() => <Home/>}/>
      <Route path="/guests" render={() => <GuestBookContainer/>}/>
    </Switch>
  )
}

export default Routes