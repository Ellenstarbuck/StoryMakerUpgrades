import React from 'react'
// import ReactDom from 'react-dom'
import './styles/main.scss'
import 'bulma'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/common/Home'
import StoryIndex from './components/storys/StoryIndex'
import StoryShow from './components/storys/StoryShow'
import StoryNew from './components/storys/StoryNew'
import StoryEdit from './components/storys/StoryEdit'
import Register from './auth/Register'
import Login from './auth/Login'
import NavBar from './components/common/NavBar'
import SecureRoute from './components/common/SecureRoute'


const App = () => (
  <BrowserRouter>
    <main>
      <NavBar />
      <Switch>
      <Route exact path='/'component={Home} /> 
      <SecureRoute path="/storys/:id/edit"component={StoryEdit}/>
      <SecureRoute path='/storys/new'component={StoryNew} />
      <Route path='/storys/:id'component={StoryShow} /> 
      <Route path='/storys'component={StoryIndex} /> 
      <Route path="/register"component={Register}/>
      <Route path="/login"component={Login}/>
      

      </Switch>
    </main>
  </BrowserRouter>

)


export default App