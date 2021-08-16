import React, { useEffect, useState } from 'react'
import Loading from './Loading'
import UserList from './UserList'

const UseEffectAPI = () => {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    const getUsers = async () => {
        try{
            setLoading(false)
            const response = await fetch('https://api.github.com/users');
        setUsers(await response.json())
        }catch(errors){
            console.log(errors)
        }
    }

    useEffect(() => {
        getUsers()
    }, [])

    if(loading){
        return <Loading />
    }

    return (
        <div>
            <UserList users={users}/>
        </div>
    )
}

export default UseEffectAPI
