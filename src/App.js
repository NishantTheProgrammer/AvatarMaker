import React, {Component} from 'react';
import logo from './logo.svg';
import Body from './Body/Body'
import Selector from './Selector/Selector'
import './App.css';


class App extends Component {

  state = {
    selector: [
      "./Resources/body/",
      "./Resources/glass/",
      "./Resources/lips/",
      "./Resources/mousetaches/"
    ],
    selectorIndex: 0,
    noOfImages: [3, 7, 6, 4],
    imgIndex: [1, 1, 1, 1]
  }

  leftIndex = () =>{
    let imgIndex = [...this.state.imgIndex]
    if(imgIndex[this.state.selectorIndex] <= 1){
      imgIndex[this.state.selectorIndex] = this.state.noOfImages[this.state.selectorIndex]

      this.setState({
        imgIndex
      })
      return
    }
    imgIndex[this.state.selectorIndex]--;
    this.setState({
      imgIndex
    })
  }
  rightIndex = () =>{
    let imgIndex = [...this.state.imgIndex]
    imgIndex[this.state.selectorIndex] = 
    (this.state.imgIndex[this.state.selectorIndex] % 
      this.state.noOfImages[this.state.selectorIndex]) + 1
    this.setState({
      imgIndex
    })
  }

  changeSelector = selected => {
    this.setState({selectorIndex: selected})
  }



  
  render() {
    return (
      
    <div className="App">
    <Body 
    
    bodyImg=
    {this.state.selector[0] + this.state.imgIndex[0] + ".jpg"}

    glassImg={this.state.selector[1] + this.state.imgIndex[1] + ".png"}
    lipImg={this.state.selector[2] + this.state.imgIndex[2] + ".png"}
    mousetachImg={this.state.selector[3] + this.state.imgIndex[3] + ".png"}


    
    
    
    ></Body>
    <Selector change={this.changeSelector}></Selector>
    

    <div id="nav">
      <button type="button" class="btn btn-secondary" onClick={this.leftIndex}>&lt;</button>
      <button type="button" class="btn btn-secondary" onClick={this.rightIndex}>&gt;</button>

    </div>
  </div>
    )
  }
}


export default App;
