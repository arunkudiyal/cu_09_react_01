import { Component } from 'react'
import Person from './Person/Person';

class App extends Component {
  // JavaScript
  state = {
    persons: [
      {name: 'Person - 1', age: 22}, 
      {name: 'Person - 2', age: 23}, 
      {name: 'Person - 3', age: 24},
      {name: 'Person - 4', age: 25},
    ]
  }

  onChangeNameHandler = () => {
    // DONOT MUTATE THE STATES DIRECTLY
    this.state.persons[1].name = 'Person - 0'
    this.state.persons[1].age =  '0'
  }

  render() {
    // JSX
    return (
      <div>
        <div className="container-fluid">
          <h1 className='page-header'>Person Management App</h1>
        </div>
        <div className='container'>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />

          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />

          <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />

          <Person name={this.state.persons[3].name} age={this.state.persons[3].age} />

          <hr />

          <button className='btn btn-danger'>Change State</button>
        </div>
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