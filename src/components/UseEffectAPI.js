import React, {useEffect, useState} from 'react'
import GlobalDataAPI from './GlobalDataAPI'
import Loading from './Loading'
import UserList from './UserList'

const UseEffectAPI = () => {

    const [users, setUsers] = useState([])
    //const [userss, setUserss] = useState([])
    const [loading, setLoading] = useState(true)

    /* const getUsers = async () => {
        try{
            setLoading(false)
            //const response = await fetch('https://api.github.com/users');
            const response = await fetch('https://api.covid19api.com/summary');
            console.log(response)
        setUsers(await response.json())
        }catch(errors){
            console.log(errors)
        }
    } */

    const getUsers = async () => {
        try {
            setLoading(false)
            const res = await fetch('https://api.covid19api.com/summary')
            const actualData = await res.json()
            console.log(actualData.Countries)
            setUsers(actualData.Countries)
        } catch (err) {
            console.log(err)
        }
    }

    /* const getGlobal = async () => {
        try {
            setLoading(false)
            const res = await fetch('https://api.covid19api.com/summary')
            const globalData = await res.json()
            //console.log(globalData.Global)
            setUserss(globalData.Global)
        } catch (errs) {
            console.log(errs)
        }
    } */

    useEffect(() => {
        getUsers()
    }, [])
    /* useEffect(() => {
        getGlobal()
    }, []) */

    if (loading) {
        return <Loading/>
    }

    return (
        <div>
            {/* {userss.NewConfirmed} */}
            <GlobalDataAPI />
            <UserList users={users}/>
            {/* <UserList userss={userss}/> */}
        </div>
    )
}

export default UseEffectAPI
