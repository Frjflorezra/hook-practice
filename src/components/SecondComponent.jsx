import React from 'react'
import {useState} from 'react'
export const SecondComponent = () => {
    const [name, setName] = useState("Francisco Florez")
    const [isNameChanged, setIsNameChanged] = useState(false)

    const changeName = (e) => {
        if (isNameChanged) {
            setName("Francisco Florez")
        }else {
            setName("Catalina barco")
        }
        setIsNameChanged(!isNameChanged)
    }
  return (
    <div>
        <h3>Componente: SecondComponent</h3>
        <p>
            {name}
        </p>
        <div>
            <button className='button-large' onClick={changeName}>Cambiar Nombre</button>
        </div>
    </div>
  )
}
