import './Person.css'

const Person = (props) => {
    const paraStyles = {
        color: 'gray'
    }

    return (
        <div id='my-person-div'>
            <div className='my-div'>
                <p style={paraStyles} onClick={props.clicked} className="lead">I am {props.name} and I am {props.age} years old!</p> <br />
                <i class="fa-solid fa-x"></i>
            </div>
            
            <input onChange={(e) => props.changed(e)} className='form-control' type="text" placeholder='enter the new name...' />
        </div>
    )
}
export default Person;