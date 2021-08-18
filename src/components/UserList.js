import React from 'react'

const UserList = ({users }) => {
    return (
        <>
            {/* <h2>List of Github Users</h2> */}
            
            <div className="container-fuild mt-5">
            
                
                <div className="row text-center">
                    {
                        users.map((curElem) => {
                            //const { avatar_url, id, login, url, type } = curElem
                            const { Country, ID, NewConfirmed, TotalConfirmed, TotalDeaths, CountryCode, NewDeaths } = curElem
                            return (
                                <>
                                    <div className="col-12 col-md-4 mt-5" key={ ID }>
                                        <div className="card p-2">
                                            <div className="d-flex align-item-center" style={{fontSize:'16px'}}>
                                                {/* <div className="image"><img src="" alt="images" className="rounded" width="155" />
                                                </div> */}
                                                <div className="ml-3 w-100">
                                                    
                                                    <h4 className="mb-0 mt-0 textLeft colors"> </h4><span className="textLeft colors" style={{color: '#000',fontWeight: 'bold'}}>{CountryCode} - { Country }</span>
                                                    <div className="textLeft colors" style={{color:'#c935d2',fontWeight:'bold'}}>New Confirmed =  { NewConfirmed }</div>
                                                    <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                                        <div className="d-flex flex-column">
                                                            <span className="articles">Total Confirmed</span> <span className="number1">{ TotalConfirmed }</span> </div>
                                                        <div className="d-flex flex-column">
                                                            <span className="followers">Deaths</span> <span className="number2">{TotalDeaths}</span> </div>
                                                        <div className="d-flex flex-column">
                                                            <span className="rating">New Confirmed</span> <span className="number3">{ NewConfirmed }</span> </div>
                                                        <div className="d-flex flex-column">
                                                            <span className="rating">New NewDeaths</span> <span className="number4">{ NewDeaths }</span> </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default UserList
