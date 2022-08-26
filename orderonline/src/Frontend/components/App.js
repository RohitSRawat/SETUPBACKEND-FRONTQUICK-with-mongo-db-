import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Routes ,Router,Route} from 'react-router-dom'
import Content from './Homepage'
import About from './about'
 class App extends Component {
  render() {
    return (
      <Routes >
      <Route path="/" exact element={ <Content/> } />
      <Route path="/about" exact element={ <About/> } />

    </Routes>
    )
  }
}



export default App