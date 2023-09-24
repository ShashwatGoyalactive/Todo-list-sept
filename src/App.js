
import './App.css';

import React from 'react'

export class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      item: [],
      currentItem: {
        text: '',
        key:''
      }
    }
  }
  render() {
    return (
      <div>
        <header className='App'>
        <form id="to-do-form">
          <input type="text" placeholder='Enter Text'/>
            <button type="submit">Add</button>
        
        </form>
     </header></div>

    )
  }
}

export default App;
