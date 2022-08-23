import { Component } from 'react'
import Person from './Person/Person';

class App extends Component {
  // JavaScript
  state = {
    persons: [
      {id:'1001', name: 'Person - 1', age: 22}, 
      {id:'1002', name: 'Person - 2', age: 23}, 
      {id:'1003', name: 'Person - 3', age: 24},
      {id:'1004', name: 'Person - 4', age: 25},
      {id:'1005', name: 'Person - 5', age: 29}
    ],
    showPersons: false
  }

  onChangeNameHandler = () => {
    // DONOT MUTATE THE STATES DIRECTLY
    // this.state.persons[1].name = 'Person - 0'

    this.setState({
      persons: [
        {name: 'Person - One', age: 22}, 
        {name: 'Person - Two', age: 23}, 
        {name: 'Person - Three', age: 24},
        {name: 'Person - Four', age: 25},
      ]
    })
  }

  onClickHandler = () => {
    console.log('Button 1 was clicked!')
  }

  onShowPersons = () => {
    let stateValue = this.state.showPersons
    this.setState({ showPersons: !stateValue })
  }

  onSetName = (event) => {
    this.setState({
      persons: [
        {name: 'Person - One', age: 22}, 
        {name: event.target.value, age: 23}, 
        {name: 'Person - Three', age: 24},
        {name: 'Person - Four', age: 25},
      ]
    })
  }

  deletePersonHandler = () => {
    let personsCopy = [...this.state.persons];
    personsCopy.splice(2, 1)
    this.setState({persons: personsCopy})
  }

  render() {
    // JavaScript
    let persons = ( <h3>Click on Toggle Persons!</h3> )

    if(this.state.showPersons) {
      persons = (
        <div className='container'>
          { 
            this.state.persons.map( (person, index) => 
              <Person 
                key={person.id}
                name={person.name} 
                age={person.age} /> ) 
          }
          <hr />
          <button onClick={this.onChangeNameHandler} className='btn btn-danger'>Change State</button>

          <button onClick={this.deletePersonHandler} className='btn btn-warning'>Delete Person</button>
        </div>
      )
    }    

    return (
      // JSX
      <div>
        <div className="container-fluid">
          <h1 style={{ color: 'red', fontSize: '2.2em' }}>Person Management App</h1>
          <button onClick={this.onShowPersons} className='btn btn-success'>Toggle Persons</button>
          <hr />
        </div>
        { persons }
      </div>
    )
  }
}
export default App;


// import './App.css';
// import Person from './Person/Person';

// const App = () => {

//   return (
//     <div>
//       <div className="container-fluid">
//         <h1 className='page-header'>Person Management App</h1>
//       </div>
//       <div className='container'>
//         <Person name='Person - 1' age='22' />
//         <Person name='Person - 2' age='25' />
//         <Person name='Person - 3' age='27' />
//         <Person name='Person - 4' age='26' />
//       </div>
//     </div>
//   );
// }

// export default App;