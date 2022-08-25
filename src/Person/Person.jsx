import { Component } from 'react'
import './Person.css'

class Person extends Component {
    render() {
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