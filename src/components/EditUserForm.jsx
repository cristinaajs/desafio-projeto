import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

const ConfirmButton = styled.button`

    background-color: lightgreen
`

const CancelButton = styled.button`

    background-color: lightcoral
`


const EditUserForm = (props) => {

    const [user, setUser] = useState(props.currentUser)
console.log(props.currentUser)
    useEffect(
        () =>{
            setUser(props.currentUser)
        },
        [props]
    )

    const handleInputChange = (event) => {

        const {name, value} = event.target

        setUser({...user, [name]:value})
    }

    return (
        <form 
            style = {{
                "display": "flex",
                "flexDirection": "column"
            }}
            onSubmit={
            (event) => {
                event.preventDefault()

                props.updateUser(user.id, user)                
            }
        }>

            <label>Nome</label>
            <input type="text" name="name" value={user.name} onChange={handleInputChange} placeholder="Nome do usuário" />
            
            <label>Username</label>
            <input type="text" name='username' value={user.username} onChange={handleInputChange} placeholder="Nickname do usuário" />
            
            <label>Email</label>
            <input type="email" name="email" value={user.email} onChange={handleInputChange} placeholder="Email do usuário" />
            
            <label>Idade</label>
            <input type="number" name="age" value={user.email} onChange={handleInputChange} placeholder="Idade" />
            
            <ConfirmButton> Atualizar </ConfirmButton>

            {/* <button onClick={
                () => {
                    props.setEditing(false)
                }
            }>
                Cancelar
            </button> */}

            <CancelButton onClick={
                () => props.setEditing(false)
            }> Cancelar
            </CancelButton>
            
        </form>
    )

}

export default EditUserForm