import React, {Component} from 'react'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      dropdownView: false
    }
  }

  toggleDropdown = () => {
    this.setState({dropdownView: !this.state.dropdownView})
  }

  render(){
    return (
      <div className="App">
        <header className="main-header">
          <h1 classname='logo'>Start Bootstrap</h1>
          <nav className='desktop-menu'>
            <span>About</span>
            <span>Projects</span>
            <span>Contact</span>
          </nav>
          <div className='dropdown' onClick={this.toggleDropdown}>Menu</div>
          {this.state.dropdownView
            ? (
              <nav className='mobile-menu'>
                <span>About</span>
                <span>Projects</span>
                <span>Contact</span>
              </nav>
            )
            : null}
        </header>
        <section className='main-content'>
          <h1>Grayscale</h1>
          <p>A free, responsive, one page Bootstrap theme <br></br>
          created by Start Bootstrap</p>
          <button className='get-started'>GET STARTED</button>
        </section>

      </div>
    )
  }
}

export default App;
