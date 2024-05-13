import './App.css'
import RedButton from './RedButton.jsx'
import Counter from './Counter.jsx'

function App() {
  const myName = 'Jeff'

  const sum = (n1, n2) => n1 + n2

  return (
    <div id='second-root'>
      <h1 style={{color: 'purple', border: '2px solid blue'}}>Hello React!</h1>
      <p>My name is {myName}</p>
      <p>3 + 5 = {sum(3, 5)}</p>
      <RedButton 
        message='Click me... or else.'
        message2='You had better click me'
      
      />

      <Counter/>
    </div>
  )
}

export default App
