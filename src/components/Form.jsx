import React, { useState } from 'react'
import Card from './Card'



const Form = () => {

    const [user, setUser] = useState({
        nombre: '',
        serieFavorita: '',
        appFavorita: ''
    })

    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        if(user.nombre.length > 3 || user.serieFavorita > 6){
            setShow(true)
            setError(false)
        } else {
            setShow(false)
            setError(true)
        }
    }


  return (
    <div className='form'>
       <form onSubmit={handleSubmit}>
            <label>Ingresa tu Nombre </label>
            <input type="text" value={user.nombre} onChange={(e) => setUser({...user, nombre: e.target.value})}/>
            <label>Ingresa tu serie favorita</label>
            <input type="text" value={user.serieFavorita} onChange={(e) => setUser({...user, serieFavorita: e.target.value})}/>
            
            <select value={user.appFavorita} onChange={(e) => setUser({...user, appFavorita: e.target.value})}>
                <option value="">Escoge tu app</option>
                <option value="Netflix">Netflix</option>
                <option value="Prime video">Prime vídeo</option>
                <option value="HBO">HBO</option>
            </select>

            <button>Enviar</button>
        </form>


        {error ? 'Por favor chequea que la información sea correcta' : null}
        {show && <Card nombre={user.nombre} appFavorita={user.appFavorita}/>}
        
    </div>
  )
}

export default Form