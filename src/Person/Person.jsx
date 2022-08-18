import './Person.css'

const Person = (props) => {
    return (
        <div id='my-person-div'>
            <p onClick={props.clicked} className="lead">I am {props.name} and I am {props.age} years old!</p> <br />
            
            <input onChange={(e) => props.changed(e)} className='form-control' type="text" placeholder='enter the new name...' />
        </div>
    )
}
export default Person;