import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {

    const [ persons, setPersons ] = useState([
      { name: 'Arto Hellas' }
    ]) 

    const [ newName, setNewName ] = useState('')

    const handleChange = ({target}) => {
        setNewName(target.value)
    }
    
    const handleClick = (e) => {
        e.preventDefault()
        setPersons([...persons, {name: newName}])
        setNewName('')
    }
    
    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={handleClick}>
                <div>
                name: <input value={newName} onChange={handleChange}/>
                </div>
                <div>
                <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {persons.map(person => {
                return(
                    <h4 key={person.name}>{person.name}</h4>
                )
            })}
        </div>
      )
    }
    
export default App
    
ReactDOM.render(<App />, document.getElementById('root'))