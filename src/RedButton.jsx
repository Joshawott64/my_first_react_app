import { useState } from 'react'

function RedButton(props) { // props can be destructured e.g. {message, message2}

    const [color, setColor] = useState('Blue')

    const changeToRed = () => {
        setColor('Red') // this changes the state value 'color' to 'Red', and as a state value changes, the component knows it must re-render and evaluate any changes
    }

  return (
    <>
        <button onClick={() => alert(props.message)} style={{backgroundColor: 'Blue'}}>{props.message}</button>
        <button onDoubleClick={changeToRed} style={{backgroundColor: 'Red'}}>{props.message2}</button>

        <h4 style={{color: color}}>My favorite color is: {color}</h4>
    </>
    
  )
}

export default RedButton