import { Component } from 'react'
import Person from './Person/Person';

class App extends Component {
  constructor(props) {
    console.log(`[App.js] constructor`)
    super(props)
    // Define & Declatre you state
    this.state = {
      persons: [
        {id:'1001', name: 'Person - 1', age: 22}, 
        {id:'1002', name: 'Person - 2', age: 23}, 
        {id:'1003', name: 'Person - 3', age: 24},
        {id:'1004', name: 'Person - 4', age: 25},
        {id:'1005', name: 'Person - 5', age: 29}
      ],
      showPersons: false,
      otherState: 'This is an another State Value'
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log(`[App.js] getDerivedStateFromProps`)
    console.log(props)
    console.log(state)

    return state
  }

  shouldComponentUpdate(newProps, newState) {
    console.log(`[App.js] shouldComponentUpdate`)
    if(this.state.persons === newState.person || this.state.showPersons === newProps.showPersons) {
      return false
    } else {
      return true
    }
  }

  componentDidUpdate() {
    console.log(`[Person.js] componentDidUpdate`)
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount')
    // AJAX Call
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

  deletePersonHandler = (index) => {
    let personsCopy = [...this.state.persons];
    // If ID is passed
    // personsCopy.filter(person => person.id !== id)
    personsCopy.splice(index, 1)
    this.setState( {persons: personsCopy} )
  }

  render() {
    console.log(`[App.js] render`)
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
                age={person.age}
                deleted={() => this.deletePersonHandler(index)} /> ) 
          }
          <hr />
          <button onClick={this.onChangeNameHandler} className='btn btn-danger'>Change State</button>
        </div>
      )
    }    

    return (
      // JSX
      <div>
        <div className="container-fluid">
          <h1 style={{ color: 'red', fontSize: '2.2em' }}> {this.props.appTitle} </h1>
          <button onClick={this.onShowPersons} className='btn btn-success'>Toggle Persons</button>
          <hr />
        </div>
        <div className='container'>
          { persons }
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