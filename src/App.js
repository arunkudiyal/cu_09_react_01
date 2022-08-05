import './App.css';
import Button from './Button'

const App = () => {
  // JavaSCript
  const onClickHandler = (e) => {
    console.log(e)
  }

  return (
    <div className='container'>
      <h1>Welcome to React!</h1> <hr />
      <Button contextual="primary" text="Button - 1" />
      <Button contextual="danger"  />
      <Button click={(e) => onClickHandler(e)} contextual="success" text="Button - 3" />
      <Button contextual="info" text="Button - 4" />
      <Button contextual="warning"  />
    </div>
  );
}

export default App;