import React, { useContext, useEffect } from 'react'
import userContext from '../context/userContext'
import moment from 'moment/moment'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const context = useContext(userContext)
  const { getUser, userData } = context
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem("token")
    navigate('/')
    window.location.reload()
}


  useEffect(() => {
    getUser()
  })

  return (
    <div className='container'>
      <h1>Your Dashboard</h1>
      <div className='container d-flex justify-content-center text-center'>
        <div className='row mt-5'>
          {/* <img src={userData.pic} width={20} /> */}
          <div className="card" style={{ width: "18rem" }}>
            <ul className="list-group list-group-flush">
              <li className="list-group-item fw-bold">NAME:</li>
              <li className="list-group-item fw-bold">EMAIL:</li>
              <li className="list-group-item fw-bold">Contact No:</li>
              <li className="list-group-item fw-bold mb-4">Address:</li>
              <li className="list-group-item fw-bold">Account Created on:</li>
            </ul>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <ul className="list-group list-group-flush">
              <li className="list-group-item ">{userData.name}</li>
              <li className="list-group-item ">{userData.email}</li>
              <li className="list-group-item ">{userData.contactno}</li>
              <li className="list-group-item mb-3">{userData.address}</li>
              <li className="list-group-item">{moment(userData.date).format('MMMM Do YYYY, hh:mm a')}</li>
            </ul>
          </div>
        </div>
      </div>
      <button type="button" class="btn btn-warning" onClick={logout}>Logout</button>
    </div>
  )
}

export default Home
