import React, { useState } from 'react'
import './InputToArray.css'

const InputToArray = () => {
   
    const [person, setPerson] = useState({firstName:"",email:"",telephone:""}) 
    const [people, setPeople] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        if(person.firstName && person.email && person.telephone) {
            const newPerson = {...person, id: new Date().getTime().toString}
            setPeople((people) => {
                let newPeople = [...people, newPerson]
                return newPeople
            })
            console.log(newPerson);
        }
        setPerson({firstName:"",email:"",telephone:""})
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPerson({...person, [name]:value})
    }

    return (
        <>
        <div className="input-form">
           <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" id="firstName" value={person.firstName} onChange={handleChange} />
                <label htmlFor="email"> Email Address</label>
                <input type="text" name="email" id="email" value={person.email} onChange={handleChange} />
                <label htmlFor="telephone">Telephone</label>
                <input type="text" name="telephone" id="telephone" value={person.telephone} onChange={handleChange} />
                <button type="submit">submt</button>
            </form>
        </div>
        <div className="form-output">
            {
                people.map(person => {
                    const {id, firstName, email, telephone} = person
                    return (
                        <div className="singlePerson" key={id}>
                            <h3>{firstName}</h3>
                            <p>{email}</p>
                            <p>{telephone}</p>
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}

export default InputToArray
