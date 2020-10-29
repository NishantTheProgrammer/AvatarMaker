import React, {Component} from 'react';
import logo from './logo.svg';
import Body from './Body/Body'
import Selector from './Selector/Selector'
import './App.css';


class App extends Component {

  state = {
    selector: [
      "./Resources/body/",
      "./Resources/eyes/",
      "./Resources/glass/",
      "./Resources/lips/",
      "./Resources/mousetaches/"
    ],
    selectorIndex: 0,
    imgIndex: 1
  }
  
  render() {
    return (
      
    <div className="App">
    <Body adr=
    {this.state.selector[this.state.selectorIndex] + this.state.imgIndex + ".jpg"}></Body>
    <Selector></Selector>

    <p>ImgIndex: {this.state.imgIndex}</p>

    

    <div id="nav">
      <button type="button" class="btn btn-secondary" onClick={() => {this.setState({
        imgIndex: this.state.imgIndex - 1
      })}}>&lt;</button>
      <button type="button" class="btn btn-secondary" onClick={() => {this.setState({
        imgIndex: this.state.imgIndex + 1
      })}}>&gt;</button>

    </div>
  </div>
    )
  }
}


export default App;
