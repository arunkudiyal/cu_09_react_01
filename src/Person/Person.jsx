import { Component } from 'react'
import './Person.css'

class Person extends Component {
    constructor(props) {
        super(props)
        this.state = {
            personState: 'This is a Person State'
        }
    }

    static getDerivedStateFromProps(props, state) {
        console.log(`[Person.js] getDerivedStateFromProps`)
        return state
    }

    shouldComponentUpdate(newProps, newState) {
        console.log(`[Person.js] shouldComponentUpdate`)
        if(this.props === newProps || this.state === newState) {
            return false
        } else {
            return false
        }        
    }


    componentDidUpdate() {
        console.log(`[Person.js] componentDidUpdate`)
    }

    render() {
        console.log(`[Person.js] rendering...`)

        const paraStyles = {
            color: 'gray'
        }
        return (
            <div id='my-person-div'>
                <div className='my-div'>
                    <p style={paraStyles} onClick={this.props.clicked} className="lead">I am {this.props.name} and I am {this.props.age} years old!</p> <br />
                    <i onClick={this.props.deleted} className="fa-solid fa-x"></i>
                </div>
                
                <input onChange={(e) => this.props.changed(e)} className='form-control' type="text" placeholder='enter the new name...' />
            </div>
        )
    }
}
export default Person;