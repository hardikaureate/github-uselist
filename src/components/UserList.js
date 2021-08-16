import React from 'react'

const UserList = ({users}) => {
    return (
        <>
            <h2>List of Github Users</h2>
            <div className="container-fuild mt-5">
                <div className="row text-center">
                    {
                        users.map((curElem, i) => {
                            const {avatar_url, id, login,url} = curElem
                            return (
                                <>
                                    <div className="col-10 col-md-4 mt-5" key={ i }>
                                        <div className="card p-2">
                                            <div className="d-flex align-item-center">
                                                <div className="image"><img src={avatar_url} alt="images" className="rounded" width="155" />
                                                </div>
                                                <div className="ml-3 w-100">
                                                    <h4 className="mb-0 mt-0 textLeft colors">{id} </h4><span className="textLeft colors">{login}</span>
                                                    <div className="textLeft colors">URL: {url}</div>
                                                    <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                                        <div className="d-flex flex-column">
                                                            <span className="articles">Articles</span> <span className="number1">38</span> </div>
                                                        <div className="d-flex flex-column">
                                                            <span className="followers">Followers</span> <span className="number2">980</span> </div>
                                                        <div className="d-flex flex-column">
                                                            <span className="rating">Rating</span> <span className="number3">8.9</span> </div>
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
