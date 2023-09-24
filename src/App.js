import './App.css';
import React from 'react'
import ListItems from './ListItems';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


library.add( faTrash );

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
    this.handleinput = this.handleinput.bind(this);
    this.addItem= this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    
  }
  handleinput(e) {
    this.setState({
      currentItem: {
        text:e.target.value,
        key: Date.now()
      }
    })
  }
  
  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    // console.log(newItem);
    if (newItem !== "") {
      const newItems = [...this.state.items, newItem]; 
      this.setState({
        items: newItems,
      currentItem: {
        text: '',
        key: ''
        }
      });
    }
  }
  
  deleteItem(key) {
    const filterItems = this.state.items.filter(item => item.key !== key);
    this.setState({
      items: filterItems,
    })
  }
  render() {
    return (
      <div>
        <header className='App'>
        <form id="to-do-form" onSubmit={this.addItem}>
            <input type="text" placeholder='Enter Text' value={this.state.currentItem.text}
            onChange={this.handleinput}
            />
            <button type="submit">Add</button>
        
        </form>
        </header>
        <ListItems items={this.state.items}
          deleteitem={this.deleteItem}>
          


        </ListItems>
      </div>

    )
  }
}

export default App;
