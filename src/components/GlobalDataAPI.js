import React, { useEffect, useState } from 'react'
import Loading from './Loading'
//import '../App.css'

const GlobalDataAPI = () => {

    const [userss, setUserss] = useState([])
    const [loading, setLoading] = useState(true)

    const getGlobal = async () => {
        try {
            setLoading(false)
            const res = await fetch('https://api.covid19api.com/summary')
            const globalData = await res.json()
            //console.log(globalData.Global)
            setUserss(globalData.Global)
        } catch (errs) {
            console.log(errs)
        }
    }

    useEffect(() => {
        getGlobal()
    }, [])

    if (loading) {
        return <Loading />
    }

    return (
        <div>
            <h2>World - Live Covid Tracker Data</h2>
            <div className="container mt-5" style={{marginTop:'100px'}}>
                <div className="row text-center global">
                    <div className="col-12 col-md-3 mt-5 global">
                        <div className="card p-2 global">
                            <div className="d-flex align-item-center" style={ { fontSize: '16px' } }>
                                <div className="ml-3 w-100">
                                <div className="textLeft colors" style={{color:'blue',fontWeight:'bold',textAlign:'center'}}>New Confirmed = {userss.NewConfirmed}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 mt-5 global">
                        <div className="card p-2 global">
                            <div className="d-flex align-item-center" style={ { fontSize: '16px' } }>
                                <div className="ml-3 w-100">
                                <div className="textLeft colors" style={{color:'green',fontWeight:'bold',textAlign:'center'}}>Total Confirmed = {userss.TotalConfirmed}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 mt-5 global">
                        <div className="card p-2 global">
                            <div className="d-flex align-item-center" style={ { fontSize: '16px' } }>
                                <div className="ml-3 w-100">
                                <div className="textLeft colors" style={{color:'red',fontWeight:'bold',textAlign:'center'}}>New Deaths = {userss.NewDeaths}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 mt-5 global">
                        <div className="card p-2 global">
                            <div className="d-flex align-item-center" style={ { fontSize: '16px' } }>
                                <div className="ml-3 w-100">
                                <div className="textLeft colors" style={{color:'rgb(201, 53, 210)',fontWeight:'bold',textAlign:'center'}}>Total Deaths = {userss.TotalDeaths}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GlobalDataAPI
