import React from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import Container from './components/Container'

const MainAppRouter = () => {
  return (
    <BrowserRouter>
      {/* <Redirect exact from='/' to='/note'  /> */}
      <Route exact path='/' render={()=><Redirect to='/note' />} />
      <Route path='/note' component={Container} />
    </BrowserRouter>
  )
}

export default MainAppRouter
