import React, { use } from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'
import { useNavigate } from 'react-router-dom'

function LogoutBtn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout())
      navigate("/")
    })
  }
  return (
    <button
      className='inline-bock px-6 py-2 duration-400 transition border-transparent border-2 hover:border-blue-800 bg-black
       text-white mx-auto my-2 p-2 cursor-pointer rounded-xl'
      onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn